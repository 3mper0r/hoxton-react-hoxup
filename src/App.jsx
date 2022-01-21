import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./login-page"
import MainApp from "./main-app"
import modal from "./modal"
import NotFound from "./notfound"
import './styles/index.css'
import './styles/reset.css'

export default function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [modal, setModal] = useState('')

  const navigate = useNavigate()
  function logIn(user) {
    setCurrentUser(user)
    navigate('/logged-in')
  }
  function logOut() {
    setCurrentUser(null)
  }

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))
  }, [])
  return (

    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to={'/login'} />} />
        <Route path='/login' element={<Login users={users} setModal={setModal} modal={modal} logIn={logIn} logOut={logOut} />} />
        <Route path='/logged-in' element={<MainApp currentUser={currentUser} logOut={logOut} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
