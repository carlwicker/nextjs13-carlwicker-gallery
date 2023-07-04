import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-black w-full h-[80px] text-white flex items-center justify-center gap-4">
      <Link href="/" className="hover:text-red-400">
        Home
      </Link>{" "}
      |
      <Link href="/prints" className="hover:text-red-400">
        C-Type Prints
      </Link>{" "}
      |
      <Link href="/portraiture" className="hover:text-red-400">
        Portraiture
      </Link>{" "}
      |
      <Link href="/contact" className="hover:text-red-400">
        Contact
      </Link>
    </div>
  );
}
