import type { ReactNode } from 'react'

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

interface BadgeProps {
  label: string
  color?: 'green' | 'red' | 'gray'
}

function Badge({ label, color = 'gray' }: BadgeProps) {
  return <span style={{ color }}>{label}</span>
}

interface CardProps {
  title: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <section style={{ border: '1px solid #ccc', padding: 12, marginBottom: 12 }}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}

interface User {
  id: number
  name: string
  isAdmin: boolean
}

interface UserListProps {
  users: User[]
  onSelect: (user: User) => void
}

function UserList({ users, onSelect }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <button
            onClick={() => {
              onSelect(user)
            }}
          >
            {user.name}
          </button>{' '}
          {user.isAdmin && <Badge label="admin" color="green" />}
        </li>
      ))}
    </ul>
  )
}

const users: User[] = [
  { id: 1, name: 'Anna', isAdmin: true },
  { id: 2, name: 'Piotr', isAdmin: false },
]

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />

      <Card title="Optional props and union types">
        <Badge label="Default color" />
        <Badge label="Red badge" color="red" />
      </Card>

      <Card title="Arrays of objects and function props">
        <UserList
          users={users}
          onSelect={(user) => {
            console.log('Selected:', user.name)
          }}
        />
      </Card>
    </div>
  );
}
