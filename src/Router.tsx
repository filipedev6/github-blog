import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { Default } from './layouts/default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
