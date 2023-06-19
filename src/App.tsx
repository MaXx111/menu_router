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
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </>
  );
}

export default App
