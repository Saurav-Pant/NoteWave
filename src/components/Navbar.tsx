import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-4">
    <div className="text-white text-xl font-bold">
      <Link href={"/"}>NoteWave</Link>
    </div>
    <div className="flex space-x-4">
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full">
        <Link href={"/Login"}>Login</Link>
      </button>
      <button className="hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full">
        <Link href={"/Register"}>Register</Link>
      </button>
    </div>
  </div>
  )
}

export default Navbar