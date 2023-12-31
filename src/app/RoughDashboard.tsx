// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "@/components/Navbar";
// import { storage } from "@/db/appwrite";
// import { useClerk } from "@clerk/clerk-react";


// const Page: React.FC = () => {
//   const [Notes, setNotes] = useState<any>([]);
//   const [Images, setImages] = useState<any>([]);
//   const { user } = useClerk();

  
//   const getAllStoredImg = async () => {
//     const images = await storage.listFiles("653a7b686975f0c87a0a");
//     const previews = await Promise.all(
//       images.files.map((file: any) =>
//         storage.getFilePreview("653a7b686975f0c87a0a", file.$id)
//       )
//     );
//     setImages(previews);
//   };

//   useEffect(() => {
//     getAllStoredImg();
//   });

//   const handleDownloadClick = (fileId:any) => {
//     const result = storage.getFileDownload('653a7b686975f0c87a0a',fileId.$id);
//     window.open(result);
//   };
  
//   useEffect(() => {
//     axios
//       .get("/api/upload")
//       .then((response: any) => {
//         if (Array.isArray(response.data.Note)) {
//           setNotes(response.data.Note);
//         } else {
//           console.error("Invalid API response format:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data from the API:", error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-6 ">
//       <Navbar />
//       {Notes.map((note: any) => (
//         <div
//           key={note._id}
//           className="rounded-md p-4 mb-8 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white transition-shadow hover:shadow-white shadow-md duration-300 ease-in-out transform mt-16 h- w-full m-auto"
//         >
//           <h1 className="text-4xl font-bold mb-4">{note.notesTitle}</h1>
//           <p className="text-lg mb-2">{note.notesDescription}</p>
//           <p className="text-lg">Posted by: {user?.fullName}</p>
//           <div>
//             {/* {Images.map((image: any, index: number) => (
//               <img key={index} src={image} alt="Preview" />
//             ))} */}
//           </div>
//           <button
//             className="bg-white text-black p-3 rounded-md cursor-pointer flex justify-center items-center mt-4"
//             onClick={(fileId:any) => handleDownloadClick(fileId.$id)} 
//             >
//             Download Notes
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;


// const getAllStoredImg = async () => {
//   const images = await storage.listFiles("653a7b686975f0c87a0a");
//   const previews = await Promise.all(
//     images.files.map((file: any) =>
//       storage.getFilePreview("653a7b686975f0c87a0a", file.$id)
//     )
//   );
//   setImages(previews);
// };

// useEffect(() => {
//   getAllStoredImg();
// });

// const handleDownloadClick = (fileId:any) => {
//   const result = storage.getFileDownload('653a7b686975f0c87a0a',fileId.$id);
//   window.open(result);
// };
