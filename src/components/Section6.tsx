import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section6() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !contentRef.current) return

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '40%',
      ease: 'power1.inOut',
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="section6"
      className="w-[calc(100vw-10rem)] max-w-[1440px] mx-auto min-h-screen flex items-start gap-[5vw] pb-[8vw]"
    >
      <img
        src="/images/img4.jpg"
        alt="Pure Escape"
        className="rounded-[10px]"
        style={{ boxShadow: '0 0 30px #73442536' }}
      />
      <div ref={contentRef} className="space-y-4">
        <h2
          className="uppercase font-bold text-[6.5vw] leading-[0.95] mb-5 text-[var(--primary)]"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Pure Escape
        </h2>
        <p>
          Step into a world where every note feels alive. Audira headphones are
          engineered to create a sound experience that surrounds you — deep, rich,
          and breathtaking.
        </p>
        <p>
          Whether you're working, relaxing, or moving, our design blends comfort
          and clarity for every lifestyle. You don't just listen — you feel the moment.
        </p>
      </div>
    </section>
  )
}