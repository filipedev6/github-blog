import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

export function Blog() {
  return (
    <div>
      <Header />

      <main className="max-w-4xl mx-auto px-5">
        <Profile />
        <SearchForm />
      </main>
    </div>
  )
}
