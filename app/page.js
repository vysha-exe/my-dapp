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
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
        Contract Message
      </h1>
      <MessageClient />
    </main>
  )
}
