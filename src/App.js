import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'

import SideBar from './components/sidebar/SideBar'
import NavBar from './components/navbar/NavBar'

import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <div>
        <NavBar />
      </div>
      <div>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userid' element={<New />} />
            <Route path='new' element={<Single />} />
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':userid' element={<New />} />
            <Route path='new' element={<Single />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
