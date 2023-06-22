import { Post } from '../../components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

export function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-5">
      <div className="flex flex-col gap-16 mb-12">
        <Profile />
        <SearchForm />
      </div>
      <div className="grid gap-8 grid-cols-2 max-md:grid-cols-1 pb-12">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
