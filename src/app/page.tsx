"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import {app} from '@/app/functions/client'


export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) {console.log("null")}
    else {
      const file = e.target.files[0]
      setFile(file)
    }
  }

  const uploadCloudStorage = async () => {
    console.log(file)
    if (file == null) {window.alert("file is null")}
    else {
      const storage = getStorage(app)
      const movieRef = ref(storage, "movies.mp4")
      await uploadBytes(movieRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!")
      })
    }
  }

  const clickFunction = () => {
    console.log("click function")
    if (inputRef.current) {
      console.log("click function", inputRef.current.files)
      inputRef.current.click()
    }
  }

  const testfunction = () => {
    alert("test")
  }

  // const inputRef = Ref<HTMLInputElement>(null)
  return (
    // <div className="">
    //   <Link href="/chart"><button className="btn btn-success">グラフ画面に移動する</button></Link>
    // </div>
    <div className="h-screen w-screen flex justify-center items-center">
      <input name="file" type='file' ref={inputRef} className="file-input file-input-bordered file-input-primary w-full max-w-xs" accept='videos/*' onChange={(e) => uploadFile(e)}></input>
      <button className="btn btn-primary" type="submit" onClick={() => { uploadCloudStorage() }}>upload</button>
    </div>
  )
}
