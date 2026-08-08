import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  {
    src: '/images/img1.jpeg',
    alt: 'Audira lifestyle 1',
    width: '260px',
    positionStyle: { top: '12%', left: '3%', transform: 'rotate(15deg)' },
  },
  {
    src: '/images/img2.jpeg',
    alt: 'Audira lifestyle 2',
    width: '470px',
    positionStyle: { right: '4%', top: '22%', transform: 'rotate(14deg)' },
  },
  {
    src: '/images/img3.jpeg',
    alt: 'Audira lifestyle 3',
    width: '340px',
    positionStyle: { left: '10%', bottom: '12%', transform: 'rotate(-12deg)' },
  },
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
    <section ref={sectionRef} id="section4" className="min-h-screen relative" style={{ minHeight: '120vh' }}>
  {photos.map((p, i) => (
    <img
      key={p.src}
      ref={(el) => { if (el) imagesRef.current[i] = el }}
      src={p.src}
      alt={p.alt}
      style={{
        width: p.width,   // add explicit width to each photo config
        boxShadow: '0 0 30px #73442536',
        border: '10px solid #fff',
        borderRadius: '10px',
        position: 'absolute',
        ...p.positionStyle,
      }}
    />
  ))}
</section>
  )
}