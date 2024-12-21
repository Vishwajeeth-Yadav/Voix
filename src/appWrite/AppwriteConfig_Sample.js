import { Client, Account, Databases, Storage } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client
    .setEndpoint('APPWRITE END POINT here')
    .setProject('PROJECT ID here ')

// Initialize the Account object
const account = new Account(client);
const databases =new Databases(client);
const storage =new Storage(client);
const blogCollection = 'BLOF COLLECTION ID here';

export { client, account,databases,storage,blogCollection };
