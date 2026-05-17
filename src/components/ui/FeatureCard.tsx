interface FeatureCardProps {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="border-2 border-[var(--dark)] rounded-[10px] p-[1.2vw_1.4vw]">
      <h3
        className="uppercase font-bold text-[1.4rem] leading-tight mb-2"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {title}
      </h3>
      <p>{description}</p>
    </div>
  )
}