import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Characters from './pages/Characters/Characters'
import Home from './pages/Home/Home'
import CharacterByName from './pages/CharcterByName/CharacterByName'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/characters' element={<Characters></Characters>}></Route>
        <Route
          path='/characters/:name'
          element={<CharacterByName></CharacterByName>}
        ></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
