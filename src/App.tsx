import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home-page'
import DriftPage from './components/drift-page'
import TimeAttackPage from './components/time-attack-page'
import ForzaPage from './components/forza-page'
import Menu from './components/menu'

function App() {

  return (
      <>
        <Menu />
          <div className="page">
          <Routes>
            <Route path="menu_router/" element={<HomePage />} />
            <Route path="menu_router/drift" element={<DriftPage />} />
            <Route path="menu_router/timeattack" element={<TimeAttackPage />} />
            <Route path="menu_router/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </>
  );
}

export default App
