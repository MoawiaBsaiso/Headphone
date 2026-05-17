import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  { src: '/images/img1.jpeg', alt: 'Audira lifestyle 1', className: 'absolute max-w-[260px] top-[12%] left-[3%] rotate-[15deg]' },
  { src: '/images/img2.jpeg', alt: 'Audira lifestyle 2', className: 'absolute max-w-[470px] right-[4%] top-[22%] rotate-[14deg]' },
  { src: '/images/img3.jpeg', alt: 'Audira lifestyle 3', className: 'absolute max-w-[340px] left-[10%] bottom-[12%] -rotate-[12deg]' },
]

export default function Section4() {
  const sectionRef = useRef<HTMLElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])

  useGSAP(() => {
    if (!sectionRef.current || imagesRef.current.length === 0) return

    gsap.from(imagesRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: 'power1.inOut',
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="section4" className="min-h-screen relative">
      {photos.map((p, i) => (
        <img
          key={p.src}
          ref={(el) => { if (el) imagesRef.current[i] = el }}
          src={p.src}
          alt={p.alt}
          className={`border-[10px] border-white rounded-[10px] ${p.className}`}
          style={{ boxShadow: '0 0 30px #73442536' }}
        />
      ))}
    </section>
  )
}