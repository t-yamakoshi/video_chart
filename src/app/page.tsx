import Image from 'next/image'
import Link from 'next/link'
import { auth } from 'firebase/client'
export default function Home() {
  return (
    <div className="">
      <Link href="/chart"><button className="btn btn-success">グラフ画面に移動する</button></Link>
    </div>
  )
}
