import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { storage } from 

export default function Home() {
  return (
    // <div className="">
    //   <Link href="/chart"><button className="btn btn-success">グラフ画面に移動する</button></Link>
    // </div>
    <div className="h-screen w-screen flex justify-center items-center">
      <input name="file" type='file' className="file-input file-input-bordered file-input-primary w-full max-w-xs" accept='videos/*'></input><br />
      <input type="button" value="Submit" className="btn btn-outline btn-primary"></input> 
    </div>
  )
}
