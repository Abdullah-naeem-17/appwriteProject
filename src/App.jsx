
import './App.css'
import { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import authService  from './appwrite/auth'
import { login, logout } from './Store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'



function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  
  
  useEffect( ()=>{
    authService.getCurrentUser()
    .then( (userData)=>{

      if (userData) {
        dispatch(login(userData))

      } else {
          dispatch(logout(userData))        
      }
    })
    .finally(
      setLoading(false)
    )
  
  })
  return (
    < div className='w-full'>
    <Header  />
       <Outlet />
     <Footer />      
    </div>
  )
}

export default App
