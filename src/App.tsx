import Header from './components/Header'


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
        
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App