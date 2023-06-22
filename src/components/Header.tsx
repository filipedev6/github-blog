// import EffectLeft from '../assets/effects/left.svg'
// import EffectRight from '../assets/effects/right.svg'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="h-[296px] w-full bg-base-profile flex items-center justify-center bg-cover-pattern bg-center bg-cover bg-no-repeat">
      <img draggable={false} src={Logo} alt="" className="mb-20 select-none" />
    </header>
  )
}
