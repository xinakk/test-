import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">My Simple Webpage</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Webpage</h2>
          <p className="text-gray-700 mb-4">
            This is a simple webpage.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Click Me
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Simple Webpage. All rights reserved.</p>
      </footer>
    </div>
    </main>
  );
}
