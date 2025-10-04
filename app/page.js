import MessageClient from './MessageClient'

export default function Page() {
  return (
    <main 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000', // black background
        color: '#FFA500',        // orange text
        fontFamily: "'Orbitron', sans-serif",
        textAlign: 'center'
      }}
    >
            {/* Watermark in bottom-right */}
      <span 
        style={{
          position: 'absolute',
          bottom: '10px',  
          right: '20px',
          fontSize: '1.5rem',
          fontFamily: 'cursive',
          color: 'rgba(200,200,200,0.3)',
          userSelect: 'none'
        }}
      >
        vysha
      </span>

      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
        Contract Message
      </h1>
      <MessageClient />
    </main>
  )
}
