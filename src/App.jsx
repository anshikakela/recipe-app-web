import { Outlet } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import Search from './components/Search'

function App() {
  return (
    <>
      <div className="wrapper">
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}> 
          <h2>Recipe App</h2>
          <Search />
        </div>
        <Categories />
        <Outlet />
      </div>
    </>
  )
}

export default App
