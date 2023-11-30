export default async function getUser(id:any) {
  const response = await fetch(`http://localhost:3000/api/upload/${id}`);
  if (!response.ok) {
    throw new Error("Could Not Get User");
  }
  return response.json();
}
