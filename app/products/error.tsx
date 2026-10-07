"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({error,reset}:{
    error:Error;
    reset:()=>void
}){
    const router = useRouter();
    const reload= ()=>{
        startTransition(()=>{
            router.refresh()
            reset()

        })
    };
    return (

        <div>
        <p>{error.message}</p>
        <button onClick={()=>reload()}
         className="bg-blue-500 px-4 py-2 text-white rounded cursor-pointer">Try again</button>
    </div>
    )
}