import { useEffect, useState } from 'react'
import { Post } from '../../components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { api } from '../../lib/axios'

export interface BlogIssuesType {
  title: string
  body: string
  created_at: string
  number: number
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function Blog() {
  const [blogIssues, setBlogIssues] = useState<BlogIssuesType[]>([])

  async function fetchIssuesGithub(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:filipedev6/github-blog`,
    )

    setBlogIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssuesGithub()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-5">
      <div className="flex flex-col gap-16 mb-12">
        <Profile />
        <SearchForm
          postsLength={blogIssues.length}
          fetchIssuesGithub={fetchIssuesGithub}
        />
      </div>
      <div className="grid gap-8 grid-cols-2 max-md:grid-cols-1 pb-12">
        {blogIssues.map((postBlog) => {
          return <Post key={postBlog.number} postBlog={postBlog} />
        })}
      </div>
    </div>
  )
}
