import React ,{useEffect,useState} from 'react'
import service from '../appwrite/config'
import { PostCard,Container } from '../components/index'


function Home() {
    const[post,setPost] = useState([])

    useEffect( ()=>{
        service.getPost().then( (post)=>{
            if(post)    setPost(post.documents)
        })
    },[])

    if(post.length === 0 ){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )

    }
    else{
        return (
            <div className='py-8 w-full'>
                <Container>
                <div className='flex flex-wrap'>
        
                    {post.map( ()=>{
                        <div className='py-8 w-1/4' key={post.$id}>
                            <PostCard {...post} />
                             </div>
                    })}
        
                </div>
                </Container>
            </div>
          )
    }
 
}

export default Home