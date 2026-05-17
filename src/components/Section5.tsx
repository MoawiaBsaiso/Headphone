const products = [
  { name: 'Audira One', price: '₹4,499', img: '/images/green.png' },
  { name: 'Audira Plus', price: '₹7,499', img: null },
  { name: 'Audira Max Pro', price: '₹11,499', img: '/images/black.png' },
]

export default function Section5() {
  return (
    <div id="section5" style={{ textAlign: 'center', paddingTop: '4vw', paddingBottom: '8vw', minHeight: '94vh' }}>
      <h2 className="heading">Top Picks</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '3rem' }}>
        {products.map((p) => (
          <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end' }}>
            {p.img && (
              <img src={p.img} alt={p.name} style={{ maxWidth: '300px', marginBottom: '1.5rem', filter: 'drop-shadow(6px 15px 5px #00000018)' }} />
            )}
            <div style={{ fontSize: '24px', fontWeight: 500 }}>{p.name}</div>
            <div style={{ fontSize: '24px', fontWeight: 700 }}>{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}