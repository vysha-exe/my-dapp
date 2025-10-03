'use client'

import { useEffect, useState } from 'react'
import { getMessage, setMessage } from '../utils/contract'

export default function MessageClient() {
  const [message, setMessageState] = useState('Loading...')
  const [error, setError] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      try {
        const result = await getMessage()
        if (mounted) setMessageState(String(result))
      } catch (err) {
        console.error(err)
        if (mounted) setError(err instanceof Error ? err.message : String(err))
      }
    }
    fetchData()
    return () => { mounted = false }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await setMessage(newMessage)
      // refresh displayed message after tx
      const updated = await getMessage()
      setMessageState(String(updated))
      setNewMessage('')
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div style={{ fontSize: 18, fontWeight: 600 }}>
      <p>📜 Current Message: {message}</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="New message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ padding: 8, fontSize: 16 }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            marginLeft: 10,
            padding: '8px 16px',
            fontSize: 16,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Updating...' : 'Set Message'}
        </button>
      </form>
    </div>
  )
}
