import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DashboardRoutes } from './router/DashboardRoutes';
import { VideoProvider } from './context';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <VideoProvider>
        <DashboardRoutes />
      </VideoProvider>
    </div>
  )
}

export default App
