export default function Section3() {
  return (
    <div id="section3" style={{ minHeight: '100vh', paddingTop: '4vw', paddingBottom: '4vw' }}>
      <h2 className="heading" style={{ fontSize: 'clamp(2rem, 12.5vw, 13.5rem)', textAlign: 'center', marginBottom: '3vw' }}>
        Masterbeat
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4vw' }}>
        <video width={500} autoPlay loop muted style={{ borderRadius: '10px', boxShadow: '0 0 30px #73442536' }}>
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div style={{ maxWidth: '500px', marginLeft: 'auto' }}>
          <p style={{ marginTop: '1rem' }}>
            Crafted for the modern audiophile, Audira headphones deliver sound so rich,
            it pulses through your senses. From crisp highs to deep, rolling bass — you
            don't just hear it, you feel it.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Whether you're in focus mode or free flow, the precision-tuned audio adapts
            to your pace. With Masterbeat, music becomes your personal soundtrack — bold,
            immersive, unforgettable.
          </p>
        </div>
      </div>
    </div>
  )
}