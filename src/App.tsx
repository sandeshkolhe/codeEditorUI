
import './App.scss'
import AppLayout from './components/AppLayout'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
     <div className="app-container">
      <Sidebar />
    <MainContent/>
    </div>
    </>
  )
}

export default App
