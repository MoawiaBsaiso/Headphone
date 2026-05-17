interface ButtonProps {
  label: string
  href?: string
  variant?: 'primary' | 'dark'
  className?: string
}

export default function Button({ label, href = '#', variant = 'primary', className = '' }: ButtonProps) {
  const bg = variant === 'primary' ? 'bg-[var(--secondary)]' : 'bg-[var(--dark)]'

  return (
    <a
      href={href}
      className={`inline-block text-white font-medium px-5 py-2 rounded-[10px] ${bg} ${className}`}
    >
      {label}
    </a>
  )
}