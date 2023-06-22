import { Link } from 'react-router-dom'
import { BlogIssuesType } from '../pages/Blog'
import { dateFormatter } from '../utils/formatter'

interface PostProps {
  postBlog: BlogIssuesType
}

export function Post({ postBlog }: PostProps) {
  const postDate = dateFormatter(postBlog.created_at)

  return (
    <Link
      to={`/post/${postBlog.number}`}
      className="flex flex-col gap-5 bg-base-post rounded-[.625rem] p-8 border-[2px] border-transparent hover:border-[#3a536b] transition-all"
    >
      <div className="flex items-center justify-between gap-4">
        <strong className="text-xl font-bold text-base-title flex-1 leading-6">
          {postBlog.title}
        </strong>

        <span className="text-sm font-normal text-base-span self-start leading-6 overflow-hidden">
          {postDate}
        </span>
      </div>

      <p className="text-base font-normal text-base-text line-clamp-4">
        {postBlog.body}
      </p>
    </Link>
  )
}
