import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="flex md:flex-row flex-col pt-60 gap-x-8">
      <div className="lg:w-1/2 mt-4">
        <div className="relative flex flex-col h-full flex-wrap bg-secondary/20 p-5 rounded-xl">
          <div className="mb-2">
            <h2 className="text-primary text-3xl font-bold">Open Source</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-5xl">
              Progressively reinvent models and niche revolutionary benefits for
              integrated niches.{" "}
            </p>
          </div>
          <div className="mt-auto">
            <Link
              href="/request-demo"
              className="btn btn-outline-primary btn-sm"
            >
              Start For Free
            </Link>
          </div>
          <div className="absolute right-0 bottom-0 md:w-40">
            <Image
              width={223}
              height={223}
              src="/feature1.png"
              alt="cta"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mt-4">
        <div className="relative flex flex-col h-full flex-wrap bg-secondary/20 p-5 rounded-xl">
          <div className="mb-2">
            <h2 className="text-primary text-3xl font-bold">Open Source</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-5xl">
              Progressively reinvent models and niche revolutionary benefits for
              integrated niches.{" "}
            </p>
          </div>
          <div className="mt-auto">
            <Link
              href="/request-demo"
              className="btn btn-outline-primary btn-sm"
            >
              Start For Free
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              width={223}
              height={223}
              src="/feature1.png"
              alt="cta"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
