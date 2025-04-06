import Link from "next/link"

export default function Settings() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        <p>Settings Page</p>
        <Link href="/" className="w-fit underline">
          Home
        </Link>
      </div>
    </div>
  )
}
