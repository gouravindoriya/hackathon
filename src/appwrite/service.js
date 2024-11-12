// authentication service
import { Account,Client,ID,Databases,Storage,Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) 
                   .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    // async createPost({title,slug,content,featureimage,status,userId}) {
    //     try {
    //         return await this.databases.createDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug,
    //             {
    //                 title,
    //                 content,
    //                 featureimage,
    //                 status,
    //                 userId,
    //                 slug
    //             }
    //         )
    //     } catch (error) {
    //         console.log("appwrite service :: createPost ::",error);
    //     }
    // }

   


    // async deleteproduct(slug) {
    //     try {
    //          await this.databases.deleteDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug
    //         )
    //         return true;
    //     } catch (error) {
    //         console.log("appwrite service :: deletepost ::",error);
    //         return false;
    //     }
    // }
    async getproduct(productId) {  // provide product id
        try {
           return  await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionProductId,
                productId
            )
            
        } catch (error) {
            console.log("appwrite service :: getpost ::",error);
            return false;
        }
    }
    async getproducts(queries=[]) {
        try {
           return  await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionProductId,
                queries
                
            )
            
        } catch (error) {
            console.log("appwrite service :: getposts ::",error);
            return false;
        }
    }







    // address service
    async addaddress({userId,address,pincode,state,name,phone}) {
        try {
             await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionAddressId,
                userId,
                {
                    userId,address,pincode,state,name,phone
                }

             )
        } catch (error) {
            console.log("appwrite service :: addaddress ::",error);
        }
    }
    async getaddress({userId}) {
        try {
             await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionAddressId,
                [
                    Query.equal('userId', userId)
                ]

             )
        } catch (error) {
            console.log("appwrite service :: getaddress ::",error);
        }
    }
    async updateaddress({userId,address,pincode,state,name,phone}) {
        try {
             await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionAddressId,
                userId,
                (
                    userId,address,pincode,state,name,phone   
                )

             )
        } catch (error) {
            console.log("appwrite service :: getaddress ::",error);
        }
    }



    // carts service 
    // add in cart
    // remove in cart

   


    async getcarts(userId) {
        try {
          return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdCart,
                [
                    Query.equal('userId', userId)
                ]

             )   
        } catch (error) {
            console.log("appwrite service :: addincart ::",error);
        }
    }
    // async addincarts({userId,productIds}) {
    //     try {

    //          await this.databases.createDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionIdCart,
    //             userId,
    //             {
    //                 productIds
    //             }

    //          )
    //     } catch (error) {
    //         console.log("appwrite service :: addincart ::",error);
    //     }
    // }




}


const service=new Service();
export default service;