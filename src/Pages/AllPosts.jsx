import React,{useEffect,useState} from 'react'
import { PostCard,Container } from '../components/index'
import service from '../appwrite/config'

 export default function AllPosts() {
    const [posts,setPost] = useState([])
    useEffect( ()=>{service.getAllPosts([]).then( (result)=>{
      if(result){  
         setPost(result.documents)
  }   })} ,[])
    
    return (
      <div className='w-full '>
          <Container>
              <div className='flex flex-wrap'>
                  {posts.map((post) => (
                      <div key={post.$id} className='p-2 w-1/4'>
                          <PostCard {...post} />
                      </div>
 ))}
              </div>
              </Container>
      </div>
    )
  }
