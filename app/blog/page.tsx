

import { Metadata } from "next"
import Link from "next/link"


export const metadata :Metadata={
  title:{
    absolute:"Blog"
  }
}

export default async function Blog(){
  const result = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("International delay")
    },2000)
  })
  console.log(result);
  
  
  return <>
  <h1>Blog page</h1>
    <Link href="/" >
    <p className="inline-block cursor-pointer
   text-blue-500 p-3 m-3 bg-black rounded-4xl
    hover:bg-gray-600">Home</p>
    </Link>
    </>
}