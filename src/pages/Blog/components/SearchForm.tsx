import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchPostSchema = z.object({
  search: z.string(),
})

type SearchFormInput = z.infer<typeof searchPostSchema>

interface SearchFormProps {
  postsLength: number
  fetchIssuesGithub: (query: string) => Promise<void>
}

export function SearchForm({
  postsLength,
  fetchIssuesGithub,
}: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchPostSchema),
  })

  async function searchPostBlog(query: SearchFormInput) {
    await fetchIssuesGithub(query.search)
  }

  return (
    <div className="flex flex-col gap-3">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-base-subtitle">Publicações</h3>

        <span className="text-sm font-normal text-base-span">
          {postsLength} publicações
        </span>
      </header>

      <form onSubmit={handleSubmit(searchPostBlog)}>
        <input
          {...register('search')}
          type="text"
          required
          placeholder="Buscar conteúdo"
          className="w-full h-[50px] px-4 bg-base-input border border-base-border rounded-md outline-none text-base-text placeholder:text-base-label focus:border-[#3294f8] transition-all"
        />
      </form>
    </div>
  )
}
