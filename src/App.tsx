import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const headphoneRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current || !headphoneRef.current) return

    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 4,
      effects: true,
    })

    const hp = headphoneRef.current
    const isShortHeight = window.screen.height < 1050

    // Entrance
    gsap.from(hp, { opacity: 0, scale: 0, duration: 1, delay: 1, ease: 'power1.inOut' })

    // Scroll journey
    gsap.to(hp, {
      scrollTrigger: { trigger: '#section2', start: 'top bottom', end: 'center center', scrub: true },
      y: '85vh', x: '18vw', width: '32vw', rotate: 90, ease: 'power1.inOut', immediateRender: false,
    })
    gsap.to(hp, {
      scrollTrigger: { trigger: '#section3', start: 'top bottom', end: 'bottom bottom', scrub: true },
      y: '218vh', x: 0, width: '35vw', rotate: 35, ease: 'power1.inOut', immediateRender: false,
    })
    gsap.to(hp, {
      scrollTrigger: { trigger: '#section4', start: 'top bottom', end: 'center center', scrub: true },
      y: '308vh', width: '42vw', rotate: 0, ease: 'power1.inOut', immediateRender: false,
    })
    gsap.to(hp, {
      scrollTrigger: { trigger: '#section5', start: 'top bottom', end: 'center bottom', scrub: true },
      y: isShortHeight ? '360vh' : '344vh', width: '28vw', ease: 'power1.inOut', immediateRender: false,
    })
    gsap.to(hp, {
      scrollTrigger: { trigger: '#section5', start: 'center bottom', end: 'bottom bottom', scrub: true },
      y: isShortHeight ? '440vh' : '419vh', x: 0, width: '300px', ease: 'power1.inOut', immediateRender: false,
    })
  }, { scope: wrapperRef })

  return (
    <>
      <Header />
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">

          <div id="main" className="w-[calc(100vw-10rem)] max-w-[1440px] mx-auto overflow-hidden relative">
            <img
              ref={headphoneRef}
              src="/images/brown.png"
              alt="Audira headphone"
              className="absolute left-1/2 -translate-x-1/2 z-[9]"
              style={{
                top: '2.2%',
                width: '40vw',
                maxWidth: '660px',
                filter: 'drop-shadow(8px 35px 6px #00000025)',
                willChange: 'transform',
              }}
            />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </div>

          <Section6 />
          <Footer />
        </div>
      </div>
    </>
  )
}