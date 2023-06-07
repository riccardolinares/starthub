import Navbar from "./Navbar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen bg-gray-300">
      <div className="flex flex-1 flex-col bg-gray-300">
        <header className="flex-shrink-0">
          <Navbar />
        </header>
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
