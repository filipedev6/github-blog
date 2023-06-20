import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

export function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-5">
      <Profile />
      <SearchForm />
    </div>
  )
}
