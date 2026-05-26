import { ChevronDown } from 'lucide-react'
import { Logo } from './Logo'

const NAV_ITEMS = ['Products', 'Solutions', 'Resources', 'Company'] as const

/** 主导航栏 */
export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className="header__nav" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="header__nav-link">
              {item}
              <ChevronDown size={14} aria-hidden />
            </a>
          ))}
          <a href="#" className="header__nav-link header__nav-link--plain">
            Pricing
          </a>
        </nav>
        <div className="header__actions">
          <a href="#" className="header__sign-in">
            Sign in
          </a>
          <a href="#" className="btn btn--primary">
            Book a demo
          </a>
        </div>
      </div>
    </header>
  )
}
