import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home/Home'
import AppRoutes from './AppRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppRoutes />
      
    </div>
  )
}

export default App
