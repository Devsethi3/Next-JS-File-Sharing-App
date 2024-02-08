const Hero = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-6xl">
              <span className="text-primary">Upload, Save</span> and Share your
              files in <span className="text-primary">one place</span>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Drag and drop your file directly on our clound and share it with
              your friends securarely with password and send it on email
            </p>

            <div className="mt-[3rem] flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#149f75] focus:outline-none focus:ring sm:w-auto"
                href="/"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-[#149f75] focus:outline-none focus:ring sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
