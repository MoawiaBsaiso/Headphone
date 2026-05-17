import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section3() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!headingRef.current || !sectionRef.current) return

    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="section3" className="min-h-screen pt-[4vw] pb-[4vw]">
      <h2
        ref={headingRef}
        className="uppercase font-bold text-center text-[clamp(2rem,12.5vw,13.5rem)] leading-[0.95] mb-[3vw] text-[var(--primary)]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Masterbeat
      </h2>

      <div className="flex items-center gap-[4vw]">
        <video
          autoPlay loop muted
          className="w-full max-w-[500px] rounded-[10px]"
          style={{ boxShadow: '0 0 30px #73442536' }}
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>

        <div className="max-w-[500px] ml-auto space-y-4">
          <p>
            Crafted for the modern audiophile, Audira headphones deliver sound so rich,
            it pulses through your senses. From crisp highs to deep, rolling bass — you
            don't just hear it, you feel it.
          </p>
          <p>
            Whether you're in focus mode or free flow, the precision-tuned audio adapts
            to your pace. With Masterbeat, music becomes your personal soundtrack — bold,
            immersive, unforgettable.
          </p>
        </div>
      </div>
    </section>
  )
}