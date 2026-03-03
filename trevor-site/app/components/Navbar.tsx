import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="font-bold text-xl">
        Trevor Web Solutions
      </h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}