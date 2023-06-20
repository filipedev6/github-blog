import { Link } from 'react-router-dom'

export function Post() {
  return (
    <Link
      to="/post"
      className="flex flex-col gap-5 bg-base-post rounded-[.625rem] p-8 border-[2px] border-transparent hover:border-[#3a536b] transition-all"
    >
      <div className="flex items-center justify-between gap-4">
        <strong className="text-xl font-bold text-base-title flex-1 leading-6">
          JavaScript data types and data structures
        </strong>

        <span className="text-sm font-normal text-base-span self-start leading-6">
          Há 1 dia
        </span>
      </div>

      <p className="text-base font-normal text-base-text line-clamp-4">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo // foo is now a string foo =
        true; // foo is now a boolean
      </p>
    </Link>
  )
}
