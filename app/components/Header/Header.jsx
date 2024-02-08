import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header class="bg-white border-b-2 border-[#0000001a]">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            <div class="md:flex md:items-center">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>

            <div class="hidden md:block">
              <nav aria-label="Global">
                <ul class="flex items-center gap-[3rem]">
                  <li>
                    <Link
                      class="text-gray-900 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="text-gray-900 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="text-gray-900 transition hover:text-gray-500/75"
                      href="/upload"
                    >
                      {" "}
                      Upload Files{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <Link
                  class="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/files"
                >
                  Get Started
                </Link>
              </div>

              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
