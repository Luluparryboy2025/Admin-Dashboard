import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-panel p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/games" className="hover:text-primary">Games</Link>
        <Link href="/discord" className="hover:text-primary">Discord</Link>
        <Link href="/settings" className="hover:text-primary">Settings</Link>
      </div>
    </nav>
  );
}
