import { Client, Storage, ID } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("653a60c73c8de136e434");

export const storage = new Storage(client);
