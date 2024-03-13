import config from '../config.js'
import { Client, ID, Databases,Storage,Query } from "appwrite";

export class Service{
    clinet = new Client();
    databases;
    storage;

    constructor(){
        this.clinet
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.databases = new Databases();
        this.storage = new Storage();
    }

    async createPost({title,slug,content,featureImage,status,userID}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId.Client,
                slug,{
                    title,
                    content,
                    featureImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("Appwrite :: Service :: Error",error);
        }
    }

    async updatePost(slug,{title,content,featureImage,status}){
        try {
            return await this.databases.updateDocument(
config.appwriteDatabaseId,
config.appwriteCollectionId,
slug,{
    title,
    content,
    featureImage,
    status
}
            )
        } catch (error) {
            console.log("Appwrite :: Service :: Error",error);
        
        }
    }

    async deletePost(slug){
try {
    await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
    )
    return true
} catch (error) {
    console.log("Appwrite :: Service :: Error",error);
    return false
}
    }

    async getPost(slug){
        try {
            return await this.databases.getDocumnet(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: Service :: Error",error);
    return false
        }
    }

    async getPost(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite :: Service :: Error",error);
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            return true
        } catch (error) {
            console.log("Appwrite :: Service :: Error",error);
            return false
        }
    }

    async deleteFile(fileId){
try {
    await this.storage.deleteFile(
        config.appwriteBucketId,
        fileId
    )
    return true
} catch (error) {
    console.log("Appwrite :: Service :: Error",error);
    return false
}
    }

   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileId
    )
   }
}


const service = new Service()
export default service