import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from '@phosphor-icons/react'
import Avatar from '../../../assets/avatar.png'

export function Profile() {
  return (
    <div
      style={{ boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)' }}
      className="bg-base-profile flex items-center rounded-[10px] gap-8 h-[212px] px-10 py-8 -mt-20"
    >
      <img src={Avatar} alt="" className="rounded-lg" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-base-title text-2xl font-bold">
            Cameron Williamson
          </h1>

          <button className="flex items-center gap-2 text-others-blue uppercase text-xs font-bold">
            GitHub <ArrowSquareUpRight size={14} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-base-text text-base font-normal">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <GithubLogo weight="fill" color="#3A536B" />
              <span className="text-base-subtitle text-base font-normal">
                cameronwll
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Buildings weight="fill" color="#3A536B" />
              <span className="text-base-subtitle text-base font-normal">
                Rocketseat
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users weight="fill" color="#3A536B" />
              <span className="text-base-subtitle text-base font-normal">
                32 seguidores
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
