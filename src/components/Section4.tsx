const photos = [
  { src: '/images/img1.jpeg', className: 'img1', style: { maxWidth: '260px', top: '12%', left: '3%', transform: 'rotate(15deg)' } },
  { src: '/images/img2.jpeg', className: 'img2', style: { maxWidth: '470px', right: '4%', top: '22%', transform: 'rotate(14deg)' } },
  { src: '/images/img3.jpeg', className: 'img3', style: { maxWidth: '340px', left: '10%', bottom: '12%', transform: 'rotate(-12deg)' } },
]

export default function Section4() {
  return (
    <div id="section4" style={{ minHeight: '100vh', position: 'relative' }}>
      {photos.map((p) => (
        <img
          key={p.className}
          src={p.src}
          alt=""
          style={{
            border: '10px solid #fff',
            boxShadow: '0 0 30px #73442536',
            position: 'absolute',
            borderRadius: '10px',
            ...p.style,
          }}
        />
      ))}
    </div>
  )
}