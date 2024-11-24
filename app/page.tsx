import ComponentGenerator from "@/src/components/ComponentGenerator";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Component Generator
      </h1>
      <ComponentGenerator />
    </main>
  );
}
