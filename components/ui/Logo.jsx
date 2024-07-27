import Link from "next/link"
import Image from "next/image"


const Logo = () => {
  return <Link href='/' className="flex items-center justify-center gap-x-1">
    <Image src='/al-folio.svg' width={54} height={54} alt="" priority/>
    <h1 className="h3 text-[#15A34A]">al-folio</h1>
  </Link>
}

export default Logo