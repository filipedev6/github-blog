import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from '@phosphor-icons/react'
// import Avatar from '../../../assets/avatar.png'
import { api } from '../../../lib/axios'
import { useEffect, useState } from 'react'

interface UserGithubProfileType {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [userGithubProfile, setUserGithubProfile] =
    useState<UserGithubProfileType>({} as UserGithubProfileType)

  async function fetchUserProfilleGithub() {
    const response = await api.get('/users/filipedev6')

    setUserGithubProfile(response.data)
  }

  useEffect(() => {
    fetchUserProfilleGithub()
  }, [])

  return (
    <div
      style={{ boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)' }}
      className="bg-base-profile flex items-center rounded-[10px] gap-8 h-[212px] px-10 py-8 -mt-20 max-md:h-full max-sm:flex-col"
    >
      <img
        src={userGithubProfile.avatar_url}
        alt=""
        draggable={false}
        className="rounded-lg w-36 h-36 select-none max-md:self-start max-sm:self-center"
      />
      <div className="flex flex-col gap-2 flex-1 w-full">
        <div className="flex justify-between">
          <h1 className="text-base-title text-2xl font-bold">
            {userGithubProfile.name}
          </h1>

          <a
            href="https://github.com/filipedev6"
            target="_blank"
            className="flex items-center gap-2 text-others-blue uppercase text-xs font-bold select-none border-b border-transparent hover:border-[#3294f8] transition-all"
            rel="noreferrer"
          >
            GitHub <ArrowSquareUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-base-text text-base font-normal">
            {userGithubProfile.bio}
          </p>

          <div className="flex items-center gap-6 max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-2">
              <GithubLogo weight="fill" color="#3A536B" />
              <span className="text-base-subtitle text-base font-normal">
                {userGithubProfile.login}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Buildings weight="fill" color="#3A536B" />
              <span className="text-base-subtitle text-base font-normal">
                {userGithubProfile.company}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users weight="fill" color="#3A536B" />
              <span className="text-base-subtitle text-base font-normal">
                {userGithubProfile.followers} seguidores
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
