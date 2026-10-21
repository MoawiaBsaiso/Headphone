export default function Footer() {
  return (
    <footer className="w-[calc(100vw-10rem)] max-w-[1440px] mx-auto flex justify-between items-center py-6 border-t-2 border-[var(--primary)]">
      <img src="/images/logo.png" alt="Audira" className="max-w-[132px]" />
      <div className="flex items-center gap-4">
        <a href="#"><img src="/images/fb.png" alt="Facebook" className="w-6" /></a>
        <a href="#">Moawia Bsaiso</a>
        <a href="#"><img src="/images/insta.png" alt="Instagram" className="w-6" /></a>
      </div>
    </footer>
  )
}
