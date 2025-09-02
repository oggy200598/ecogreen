export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`);
  const data = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">API status: {data.status}</h1>
    </main>
  );
}
