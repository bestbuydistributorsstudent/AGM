// import { Link } from '@tanstack/react-router'
import { CustomLink } from './customLink'
import img from './images.png'
// import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-black sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <section className="grid grid-cols-4">
        <picture >
          <source srcSet={img} type='image/jpg' />
          <img src={img} className='h-[100px] py-2' />
        </picture>
        <div className="col-span-3 pt-8">
          <div className='flex font-bold text-2xl'><p className="text-white pr-1">BESTBUY </p><p className="text-[#c30112]">POWER</p></div>
          <p className="text-[#B2BEB5]">Event App</p>
        </div>
      </section>
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-1 sm:py-4">
        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
          <CustomLink
            to="/"
          // className="nav-link"
          // activeProps={{ className: 'nav-link is-active' }}
          >
            General Agenda
          </CustomLink>
          <CustomLink
            to="/trade"
          // className="nav-link"
          // activeProps={{ className: 'nav-link is-active' }}
          >
            Warehouse Trade Event
          </CustomLink>
          <CustomLink
            to="/participants"
          // className="nav-link"
          // activeProps={{ className: 'nav-link is-active' }}
          >
            Participants
          </CustomLink>
        </div>
      </nav>
    </header>
  )
}
