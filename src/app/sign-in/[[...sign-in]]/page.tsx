import { SignIn } from "@clerk/nextjs";
import Back from "@/components/Back";

export const metadata = {
  title:"NoteWave | Sign-In"
}

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-800">
      <Back/>
      <div>
      <SignIn />
      </div>
    </div>
  );
}
