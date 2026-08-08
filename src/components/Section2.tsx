import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from './ui/Button'
import FeatureCard from './ui/FeatureCard'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: 'Crystal-Clear Audio', description: 'Hear every detail with balanced bass and studio-quality mids and highs.' },
  { title: 'All-Day Comfort', description: 'Lightweight build with plush ear cushions and ergonomic fit.' },
  { title: '40+ Hour Battery Life', description: 'Long-lasting performance, wherever you go.' },
]

export default function Section2() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!contentRef.current || !sectionRef.current) return

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '-50% bottom',
        end: 'center center',
      },
      y: '140%',
      ease: 'power1.inOut',
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="section2" className="w-section min-h-screen pt-[4vw]">
      <div ref={contentRef} className="max-w-[500px]">
        <h2
          className="uppercase font-bold text-[6.5vw] leading-[0.95] mb-5 text-[var(--primary)]"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          True Clarity
        </h2>
        <p>
          Engineered for clarity, comfort, and immersive sound — Audira redefines
          your listening experience with style and performance in perfect harmony.
        </p>
        <Button label="Buy Now" variant="dark" className="mt-7" />
      </div>

      <div className="grid grid-cols-3 gap-7 mt-[8vw]">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  )
}