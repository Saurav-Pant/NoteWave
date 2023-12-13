import Upload from '@/components/Upload'
import React from 'react'

type Props = {}

export const metadata = {
  title:"NoteWave | Upload"
}

const page = (props: Props) => {
  return (
    <div>
      <Upload/>
    </div>
  )
}

export default page