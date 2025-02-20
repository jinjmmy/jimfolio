import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white justify-between items-center text-green-600 min-h-screen flex flex-col">
      {/* Navigation Links */}
      <div className="justify-between items-center w-full px-8 py-4 flex">
        <Link href="/about">
          <span className="cursor-pointer hover:underline">[about me]</span>
        </Link>
        <Link href="/experience">
          <span className="cursor-pointer hover:underline">[experience]</span>
        </Link>
        <Link href="/projects">
          <span className="cursor-pointer hover:underline">[projects]</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="text-center text-green-700">
        <p className="text-3xl mb-4">welcome</p>
        <div className="md:flex-row items-center flex flex-col">
          <p className="text-7xl font-bold mb-8 md:mb-0">
            jimmy jin
            <br />
            <span className="text-4xl font-bold mb-8 md:mb-0">
              software + data
            </span>
          </p>

          <img
            alt="Yours Truly"
            src="https://placehold.co/600x400"
            className="inline-block w-96 h-auto md:ml-12"
          />
        </div>
      </div>

      {/* Contact Link */}
      <div className="w-full justify-end px-8 py-4 flex">
        <Link href="/contact">
          <span className="cursor-pointer hover:underline">[get in touch]</span>
        </Link>
      </div>
    </div>
  );
}
