import Footer from './components/Footer'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'

function App() {

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="main" className="w-full overflow-hidden">
            <img
              src="/images/brown.png"
              alt="Headphone"
              id="headphone"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '2.2%',
                width: '40vw',
                maxWidth: '660px',
                filter: 'drop-shadow(8px 35px 6px #00000025)',
                willChange: 'transform',
                zIndex: 9,
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

export default App