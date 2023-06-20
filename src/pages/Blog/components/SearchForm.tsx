export function SearchForm() {
  return (
    <div className="flex flex-col gap-3 mt-16 mb-12">
      <header className="flex items-center justify-between">
        <span className="text-lg font-bold text-base-subtitle">
          Publicações
        </span>

        <span className="text-sm font-normal text-base-span">
          6 publicações
        </span>
      </header>

      <form>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="w-full h-[50px] px-4 bg-base-input border border-base-border rounded-md outline-none text-base-text placeholder:text-base-label focus:border-[#3294f8] transition-all"
        />
      </form>
    </div>
  )
}
