export default function Header() {
  return (
    <header
      style={{
        width: 'calc(100vw - 10rem)',
        maxWidth: '1440px',
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 0,
        zIndex: 10,
        padding: '1rem 0',
      }}
    >
      <nav className="flex justify-between items-center">
        <img src="/images/logo.png" alt="Audira" style={{ maxWidth: '132px' }} />
        <a href="#" className="btn" style={{ backgroundColor: 'var(--secondary-color)' }}>
          Buy Now
        </a>
      </nav>
    </header>
  )
}