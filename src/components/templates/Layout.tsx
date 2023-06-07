// import Navbar from "./Navbar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen bg-white">
      <div className="flex flex-1 flex-col bg-white">
        {/* <header className="flex-shrink-0">
          <Navbar />
        </header> */}
        <main className="flex-1">
          <div className="py-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
