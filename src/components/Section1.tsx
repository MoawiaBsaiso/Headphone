import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function Section1() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!headingRef.current) return

    const split = SplitText.create(headingRef.current, {
      type: 'chars,words,lines',
      mask: 'lines',
    })

    gsap.from(split.chars, {
      yPercent: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-30, 30),
      autoAlpha: 0,
      ease: 'back.out(1.5)',
      stagger: { amount: 0.5, from: 'random' },
      duration: 1.5,
    })
  }, { scope: headingRef })

  return (
    <section
      id="section1"
      className="h-screen w-[60vw] mx-auto flex items-center justify-center text-center"
    >
      <h1
        ref={headingRef}
        className="uppercase font-bold text-[11.5vw] leading-[0.85] text-[var(--primary)]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Modern Harmony
      </h1>
    </section>
  )
}