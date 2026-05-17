const features = [
  {
    name: 'Crystal-Clear Audio',
    detail: 'Hear every detail with balanced bass and studio-quality mids and highs.',
  },
  {
    name: 'All-Day Comfort',
    detail: 'Lightweight build with plush ear cushions and ergonomic fit.',
  },
  {
    name: '40+ Hour Battery Life',
    detail: 'Long-lasting performance, wherever you go.',
  },
]

export default function Section2() {
  return (
    <div id="section2" style={{ minHeight: '100vh', paddingTop: '4vw' }}>
      <div style={{ maxWidth: '500px' }} className="content-wrapper">
        <h2 className="heading">True Clarity</h2>
        <p>
          Engineered for clarity, comfort, and immersive sound — Audira redefines
          your listening experience with style and performance in perfect harmony.
        </p>
        <a href="#" className="btn" style={{ backgroundColor: 'var(--black)', marginTop: '1.8rem' }}>
          Buy Now
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.8rem',
          marginTop: '8vw',
        }}
      >
        {features.map((f) => (
          <div
            key={f.name}
            style={{ border: '2px solid var(--black)', padding: '1.2vw 1.4vw', borderRadius: '10px' }}
          >
            <div style={{ fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', fontSize: '1.4rem', lineHeight: 1.2, marginBottom: '0.5rem' }}>
              {f.name}
            </div>
            <div>{f.detail}</div>
          </div>
        ))}
      </div>
    </div>
  )
}