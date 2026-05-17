export default function Footer() {
  return (
    <footer
      className="w-section"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 0',
        borderTop: '2px solid var(--primary-color)',
      }}
    >
      <img src="/images/logo.png" alt="Audira" style={{ maxWidth: '132px' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="#"><img src="/images/fb.png" alt="Facebook" style={{ width: '24px' }} /></a>
        <a href="#"><img src="/images/insta.png" alt="Instagram" style={{ width: '24px' }} /></a>
      </div>
    </footer>
  )
}