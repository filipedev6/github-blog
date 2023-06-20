import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function PostInfo() {
  return (
    <div
      style={{ boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)' }}
      className="bg-base-profile h-[168px] p-8 flex flex-col justify-between rounded-[.625rem] -mt-20"
    >
      <header className="flex justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-others-blue uppercase text-xs font-bold"
        >
          <CaretLeft size={12} />
          Voltar
        </Link>

        <a
          href="https://github.com"
          className="flex items-center gap-2 text-others-blue uppercase text-xs font-bold"
        >
          Ver no GitHub <ArrowSquareUpRight size={12} />
        </a>
      </header>

      <div className="flex flex-col gap-2">
        <strong className="text-2xl font-bold text-base-title">
          JavaScript data types and data structures
        </strong>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <GithubLogo weight="fill" color="#3A536B" />
            <span className="text-base-subtitle text-base font-normal">
              Rocketseat
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar weight="fill" color="#3A536B" />
            <span className="text-base-subtitle text-base font-normal">
              Há 1 dia
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ChatCircle weight="fill" color="#3A536B" />
            <span className="text-base-subtitle text-base font-normal">
              5 comentários
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
