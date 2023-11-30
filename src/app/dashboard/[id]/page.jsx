import EditTopicFrom from "../../../components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/upload/${id}`, {
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

export default async function EditTopic({ params }) {
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
