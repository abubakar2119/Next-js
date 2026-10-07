import Link from "next/link";

export default function Products() {
  const productid = 100;

  return (
    <div className="flex flex-col items-start text-2xl ml-3.5">
      
      <Link
        href="/"
        className="inline-block cursor-pointer text-blue-500 p-3 m-3 bg-black rounded-4xl hover:bg-gray-600"
      >
        Home
      </Link>

      <h1 className="font-bold">
        Products lists
      </h1>

      <Link
        href="/products/1"
        className="text-xl text-blue-500 p-3 m-3 bg-black rounded-4xl hover:bg-gray-600"
      >
        Products 1
      </Link>

      <Link
        href="/products/2"
        className="text-xl text-blue-500 p-3 m-3 bg-black rounded-4xl hover:bg-gray-600"
      >
        Products 2
      </Link>

      <Link
        href="/products/3"
        replace
        className="text-xl text-blue-500 p-3 m-3 bg-black rounded-4xl hover:bg-gray-600"
      >
        Products 3
      </Link>

      <Link
        href={`/products/${productid}`}
        className="text-xl text-blue-500 p-3 m-3 bg-black rounded-4xl hover:bg-gray-600"
      >
        Products {productid}
      </Link>

    </div>
  );
}