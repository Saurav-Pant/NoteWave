import { Client, Storage, ID } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64fab385a91bbfe6074d");

export const storage = new Storage(client);
