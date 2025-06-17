import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Games() {
  return (
    <>
      <Navbar />
      <main className="p-6 space-y-6">
        <Card title="Game Manager">
          <p>
            View all Roblox games connected to your dashboard. Add or remove games, and review player logs.
          </p>
        </Card>
      </main>
    </>
  );
}
