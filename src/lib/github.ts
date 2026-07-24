import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export interface GitHubMetrics {
  repos: number
  stars: number
  followers: number
  contributions: number
  source: 'live' | 'fallback'
}

export async function getGitHubMetrics(username: string): Promise<GitHubMetrics> {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN

  if (!token) {
    console.warn('No GITHUB_TOKEN or GH_TOKEN set — using fallback values')
    return { repos: 0, stars: 0, followers: 0, contributions: 0, source: 'fallback' }
  }

  const query = `query {
    user(login: "${username}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
        totalCount
        nodes {
          stargazerCount
        }
      }
      followers {
        totalCount
      }
    }
  }`

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`)
    }

    const json = await res.json() as {
      data: {
        user: {
          contributionsCollection: { contributionCalendar: { totalContributions: number } }
          repositories: { totalCount: number; nodes: Array<{ stargazerCount: number }> }
          followers: { totalCount: number }
        }
      }
    }

    const { user } = json.data
    const repos = user.repositories.totalCount
    const stars = user.repositories.nodes.reduce((sum, repo) => sum + repo.stargazerCount, 0)
    const followers = user.followers.totalCount
    const contributions = user.contributionsCollection.contributionCalendar.totalContributions

    return { repos, stars, followers, contributions, source: 'live' }
  } catch (e) {
    console.warn('GitHub GraphQL fetch failed — using fallback values:', e)
    return { repos: 0, stars: 0, followers: 0, contributions: 0, source: 'fallback' }
  }
}
