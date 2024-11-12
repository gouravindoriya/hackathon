
const conf ={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionAddressId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ADDRESS_ID),
    appwriteCollectionIdCart:String(import.meta.env.VITE_APPWRITE_COLLECTION_CART_ID),
    appwriteCollectionProductId:String(import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCT_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    rteapikey:String(import.meta.env.VITE_RTE_API_KEY)
}

export default conf