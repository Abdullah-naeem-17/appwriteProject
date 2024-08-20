import conf from '../conf/conf'
import {Client,ID,Databases,Storage,Query} from 'appwrite'


export  class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
       this. databases = new Databases(this.client)
       this.bucket = new Storage(this.client)
}

       async createPost({title,content,featuredImage,status,slug}){
     try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
     } catch (error) {

        console.log("create post error",error)
     }   

       }

       async updatePost( slug,{title,content,featuredImage,status}){
         try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
         } catch (error) {
            console.log("update post error",error)
              return false
         }
    }
       async deletePost(slug){
         try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            )
            return true
         } catch (error) {
            console.log("delete post error",error)
             return false
         }
        
        }

        // get single post
       async getPost( slug){
         try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            );
         } catch (error) {
            console.log("get single post error",error);
              return false
         }
        }
        // we can also write queries in the try section 
       async getAllPosts( queries= [Query.equal("status","active")]){
         try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            );
         } catch (error) {
            console.log("getAll posts error",error);
return false
         }
    
        }
       // file upload funtions

       async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("file creation error::",error)
            return false
        }

       }
       // delete file

       async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("file creation error::",error)
            return false
        }
       }
       // file preview
      async getFilePeview(fileId){
       
            try{return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )}
            catch(e){
             console.log("eror found", e)
            }
            
            
      
       }
       
}


const service = new Service()

export default service