import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Protected({children,authentication=true}) {
    const [loading,setLoading]= useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector( (state) => state.auth.status)
    useEffect( ()=>{
        if(authentication && authentication!== authStatus){
            navigate('/Login')
        }else if(!authentication && authentication !== authStatus){
            navigate("/")
        }
        setLoading(false)
    },[navigate,authStatus,authentication])
  return (
    loading ? <h1>Loading....</h1> : <>{children}</>
  )
}

export default Protected