import Link from "next/link"

export default function Home(){
  
  return <div >
  <h1>Home page</h1>
  <br />
  <Link href="/blog">Blog</Link>
  <br />
  <Link href="/products">Products</Link>
  <br />
  <Link href="/articles/breaking-new-123?lang=en">Read in English</Link>
  <br />
  <Link href="/articles/breaking-new-123?lang=fr">Read in Franch</Link>
  
  </div>
}