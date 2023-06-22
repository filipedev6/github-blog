import { useState, useEffect } from 'react'
import { PostInfo } from './components/PostInfo'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { BlogIssuesType } from '../Blog'
import { PostContent } from './components/PostContent'

export function Post() {
  const [post, setPost] = useState<BlogIssuesType>({} as BlogIssuesType)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  async function fetchPostID() {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/filipedev6/github-blog/issues/${id}`,
      )
      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPostID()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-5">
      <PostInfo isLoading={isLoading} postData={post} />
      {!isLoading && <PostContent content={post.body} />}
    </div>
  )
}
