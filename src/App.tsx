
import './App.scss'
import MainContent from './components/mainComp/MainContent'
import Sidebar from './components/Sidebar/Sidebar'
import SurfaceTagCard from './comp2/SurfaceTagCard'

function App() {


  return (
    <>
     <div className="app-container">
      <Sidebar />
      <MainContent/>
      {/* <SurfaceTagCard/> */}
    </div>
    </>
  )
}

export default App
