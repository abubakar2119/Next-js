import { Metadata } from "next"


type props ={
    params:Promise<{productid:string}>
}

export const generateMetadata = async ({params}
:props):Promise<Metadata> => {
    const id = (await params).productid
    const title = await new Promise  ((resolve)=>{
       setTimeout(()=>{
        resolve(`iPhone ${id}`)
       },100)
    })
    return{
        title:`product ${title}`
    }
}

export default async function ProductId({params}:{
    params:Promise<{productid:string}>
}) {
    const productid = (await params).productid
    

    return<>
    <h1 >Details about Product {productid}</h1>
    </> 
    
}