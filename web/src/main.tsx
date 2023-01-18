import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Habit } from './components/Habit'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
    <App />
    <Habit completed = {2} />
    <Habit completed = {30} />
    <Habit completed = {22} />
    <Habit completed = {21} />
    </div>
  </React.StrictMode>,
)
