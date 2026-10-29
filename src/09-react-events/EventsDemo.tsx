import { useState } from 'react'
import type { ChangeEvent, KeyboardEvent, MouseEvent, SubmitEvent } from 'react'

export default function EventsDemo() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('user')
  const [log, setLog] = useState<string[]>([])

  function addLog(message: string) {
    setLog((prev) => [message, ...prev].slice(0, 5))
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleRoleChange(event: ChangeEvent<HTMLSelectElement>) {
    setRole(event.target.value)
  }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Escape') {
        setName('')
      }
    }

  function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    addLog(`Clicked at x=${event.clientX}, y=${event.clientY}`)
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    addLog(`Submitted: ${name || 'no name'} (${role})`)
  }

  return (
    <div>
      <h2>09. Events</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
          placeholder="Name (Esc clears)"
        />
        <select value={role} onChange={handleRoleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <button type="button" onClick={handleButtonClick}>
        Click me
      </button>

      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  )
}
