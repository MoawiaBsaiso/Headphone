import Button from './ui/Button'

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-10 py-4 w-[calc(100vw-10rem)] max-w-[1440px]">
      <nav className="flex justify-between items-center">
        <img src="/images/logo.png" alt="Audira" className="max-w-[132px]" />
        <Button label="Buy Now" variant="primary" />
      </nav>
    </header>
  )
}