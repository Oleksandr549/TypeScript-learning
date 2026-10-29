import { useEffect, useReducer, useRef, useState } from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}


function CounterExample() {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1)
      }}
    >
      Clicked {count} times
    </button>
  )
}

function SelectedUserExample() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div>
      <button
        onClick={() => {
          setSelected('Anna')
        }}
      >
        Select Anna
      </button>
      <p>{selected ? `Selected: ${selected}` : 'Nobody selected'}</p>
    </div>
  )
}

function TodoExample() {
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo() {
    const todo: Todo = { id: Date.now(), text: `Task ${todos.length + 1}`, done: false }
    setTodos((prev) => [...prev, todo])
  }

  return (
    <div>
      <button onClick={addTodo}>Add task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

function FocusInputExample() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input ref={inputRef} placeholder="I get focus on mount" />
}

type CounterAction = { type: 'increment' } | { type: 'decrement' } | { type: 'set'; value: number }

function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'set':
      return action.value
  }
}

function ReducerExample() {
  const [count, dispatch] = useReducer(counterReducer, 0)

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' })
        }}
      >
        -
      </button>
      <span> {count} </span>
      <button
        onClick={() => {
          dispatch({ type: 'increment' })
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set', value: 0 })
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default function HooksDemo() {
  return (
    <div>
      <h2>08. Hooks</h2>
      <CounterExample />
      <SelectedUserExample />
      <TodoExample />
      <FocusInputExample />
      <ReducerExample />
    </div>
  )
}
