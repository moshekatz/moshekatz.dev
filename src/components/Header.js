import Link from 'next/link'
import { moshekatz } from '../authors'

export default function Header() {
  return (
    <header className="flex items-center py-10">
      <img src={moshekatz.avatar} alt="Moshe Katz" className="w-32 h-32 rounded-full" />
      <div>
        <Link href="/">
          <a aria-label="Moshe Katz's Blog">
            <h1>MKBlog</h1>
          </a>
        </Link>
      </div>
    </header>
  )
}
