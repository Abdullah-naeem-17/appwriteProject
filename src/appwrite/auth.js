import conf from '../conf/conf'
import {Client,Account,ID} from 'appwrite'


export class AuthService{
    client= new Client();
    account;

   constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client)
   }
   // we create a function for create account
    async createAccount( {name,email,password}){
        try {
         const creation=   await this.account.create(ID.unique(),name,email,password);
         if (creation) {
            // go to login page
            return this.login({email,password});
         } else {
            return creation;
         }
        } catch (error) {
            console.log("creation:error::",error);
            throw error
        }

    }
    async login({email,password}){
        try {
           return this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            console.log("getLogin:error::",error);

        }
    }
    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("getCurrent:error::",error);
        }
        // if it has not login so it return null
        return null;
    }   
    async logout(){
        try {
           return await  this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService()
export default authService