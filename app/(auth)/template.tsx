"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const navLink=[
  {name:"Reister",href:"/register"},
  {name:"Login",href:"/login"},
  {name:"ForgetPassword",href:"/forgot-password"}
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Pathname = usePathname()
  const[input,setInput] = useState("")
  return (
       <div>
        <div >
          <input value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
        {navLink.map((link)=>{
          const isActive = Pathname === link.href ||
          (Pathname.startsWith(link.href) && link.href !== "/")
          return(
            <Link 
            className={isActive? "font-bold mr-4":"text-blue-600 mr-3.5"}
            href={link.href} key={link.name}>
              {link.name}
            </Link>
          )
        })}
        {children}
       </div>
        
       
  )
}