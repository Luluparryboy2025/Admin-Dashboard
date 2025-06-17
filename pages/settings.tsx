import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Settings() {
  return (
    <>
      <Navbar />
      <main className="p-6 space-y-6">
        <Card title="Webhook Configuration">
          <p>Set your Roblox and Discord webhook URLs here.</p>
        </Card>
        <Card title="Admin Access">
          <p>Manage who can access this dashboard. Admin login setup coming soon.</p>
        </Card>
      </main>
    </>
  );
}
