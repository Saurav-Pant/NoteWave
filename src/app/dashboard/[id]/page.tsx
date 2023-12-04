import EditTopicFrom from "../../../components/EditTopicForm";

const getTopicById = async (id:any) => {
  try {
    const URL=process.env.URL;
    console.log(URL)
    const res = await fetch(`https://notesswave.vercel.app/api/upload/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Notes");
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching topic:", error);
    throw error;
  }
};

"use  client"
export default async function EditTopic({ params }:any) {
  try {
    const { id } = params;
    console.log(id);
    const { Note } = await getTopicById(id);
    const { notesTitle, notesDescription } = Note;
    console.log("Received data:", Note);

    return <EditTopicFrom id={id} title={notesTitle} description={notesDescription} />;
  } catch (error) {
    console.error("Error in EditTopic:", error);
  }
}
