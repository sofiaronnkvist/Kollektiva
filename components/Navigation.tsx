import Link from "next/link";

function Navigation() {
    return (
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Home</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">About Us</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Blog Post</a>
          </Link>
        </li>
      </ul>
    )
  }
  
  export default Navigation