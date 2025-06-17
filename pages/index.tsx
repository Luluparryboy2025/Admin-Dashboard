import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 grid gap-6 md:grid-cols-2">
        <Card title="Roblox Tools">
          <p>Control teams, view logs, and more.</p>
        </Card>
        <Card title="Discord Integration">
          <p>View logs, approvals, rank requests and other Discord data.</p>
        </Card>
        <Card title="Live Logs">
          <p>Watch live logs from Discord & Roblox as they come in.</p>
        </Card>
        <Card title="Settings">
          <p>Configure webhooks, admin users, and integrations.</p>
        </Card>
      </main>
    </>
  );
}
