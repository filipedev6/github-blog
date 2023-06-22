import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { dateFormatter } from '../../../utils/formatter'
import { BlogIssuesType } from '../../Blog'

interface PostInfoProps {
  postData: BlogIssuesType
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostInfoProps) {
  const formattedDate = dateFormatter('2023-06-21T18:52:14Z')

  return (
    <div
      style={{ boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)' }}
      className="bg-base-profile h-[168px] p-8 flex flex-col justify-between rounded-[.625rem] -mt-20"
    >
      {isLoading ? null : (
        <>
          <header className="flex justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-others-blue uppercase text-xs font-bold border-b border-transparent hover:border-[#3294f8] transition-all"
            >
              <CaretLeft size={12} />
              Voltar
            </Link>

            <a
              href="https://github.com"
              className="flex items-center gap-2 text-others-blue uppercase text-xs font-bold border-b border-transparent hover:border-[#3294f8] transition-all"
            >
              Ver no GitHub <ArrowSquareUpRight size={12} />
            </a>
          </header>

          <div className="flex flex-col gap-2">
            <strong className="text-2xl font-bold text-base-title">
              {postData.title}
            </strong>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <GithubLogo weight="fill" color="#3A536B" />
                <span className="text-base-span text-base font-normal">
                  {postData.user.login}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar weight="fill" color="#3A536B" />
                <span className="text-base-span text-base font-normal">
                  {formattedDate}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ChatCircle weight="fill" color="#3A536B" />
                <span className="text-base-span text-base font-normal">
                  {postData.comments} comentários
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
