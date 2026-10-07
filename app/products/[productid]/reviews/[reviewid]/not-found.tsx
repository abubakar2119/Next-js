"use client";


import { usePathname } from "next/navigation"

export default function notFound(){
    const Pathname = usePathname();
    const productid = Pathname.split('/')[2]
    const reviewid = Pathname.split('/')[4]

    
    return(
        
        <div>
            <h1 className="font-extrabold ml-2.5">Review {reviewid} Not Found product {productid} </h1>
            
        </div>
    )
}