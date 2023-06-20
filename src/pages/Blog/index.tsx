import { Header } from '../../components/Header'
import { Profile } from './components/Profile'

export function Blog() {
  return (
    <div>
      <Header />

      <main className="max-w-4xl mx-auto px-5">
        <Profile />
      </main>
    </div>
  )
}
