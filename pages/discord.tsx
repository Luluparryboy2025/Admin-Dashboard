import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Discord() {
  return (
    <>
      <Navbar />
      <main className="p-6 space-y-6">
        <Card title="Discord Log Feed">
          <p>
            Live feed of Discord logs including join/leave, rank requests, and admin command usage.
          </p>
        </Card>
      </main>
    </>
  );
}
