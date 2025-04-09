export function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold">Logo</div>
        <nav className="space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Item 1
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Item 2
          </a>
        </nav>
      </header>
    )
  }
  