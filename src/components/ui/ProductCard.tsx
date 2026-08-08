interface ProductCardProps {
  name: string
  price: string
  image?: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center justify-end">
      {image && (
        <img
          src={image}
          alt={name}
          className="max-w-[200px] mb-6"
          style={{ filter: 'drop-shadow(6px 15px 5px #00000018)' }}
        />
      )}
      <span className="text-2xl font-medium">{name}</span>
      <span className="text-2xl font-bold">{price}</span>
    </div>
  )
}