import MessageClient from './MessageClient'

export default function Page() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Contract Message Viewer</h1>
      <MessageClient />
    </main>
  )
}
