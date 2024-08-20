import React,{useState,useEffect} from 'react'
import service from '../appwrite/config'
import { useParams,useNavigate } from 'react-router-dom'
import { Container } from '../components'
import {PostForm} from '../components/index'

function EditPost() {
    const[post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect( (slug)=> {
        if(slug)
        service.getPost(slug).then((post)=>{
          if(post){
            setPost(post)
        }else{
           navigate('/')
        }

        })
    },[slug,navigate])
    
  return post?  (
    <div className='py-8'>
        
        <Container>
            <PostForm {...post} />
        </Container>
    </div>
  ): null
}

export default EditPost