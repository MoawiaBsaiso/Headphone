import ProductCard from './ui/ProductCard'

const products = [
  { name: 'Audira One', price: '₹4,499', image: '/images/green.png' },
  { name: 'Audira Plus', price: '₹7,499' },
  { name: 'Audira Max Pro', price: '₹11,499', image: '/images/black.png' },
]

export default function Section5() {
  return (
    <section id="section5" className="min-h-[94vh] text-center pt-[4vw] pb-[8vw]">
      <h2
        className="uppercase font-bold text-[6.5vw] leading-[0.95] mb-12 text-[var(--primary)]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Top Picks
      </h2>
      <div className="grid grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}