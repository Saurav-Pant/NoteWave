import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title:"NoteWave | Register"
}
 
export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-800">
      <SignUp />;
    </div>
  );
}