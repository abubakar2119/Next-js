"use client"
import { useRouter } from "next/navigation";


export default function orderProduct(){
    const router = useRouter();
    const handleClick=()=>{
        console.log("Placing the order");
        router.push("/")
    }
    return<>
     <h1>order the product</h1>
    <button onClick={handleClick} className="bg-black text-white cursor-pointer">Place order</button>
    </>
}