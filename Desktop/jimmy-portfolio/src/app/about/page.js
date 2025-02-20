import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Jimmy Jin - Software + Data" />
      </Head>

      <div className="mx-auto max-w-screen-lg">
        <header className="py-4"></header>
        <section className="py-8">
          <p className="text-3xl font-bold leading-tight">
            save the professionalism
          </p>
        </section>
        <div className="py-8 w-1/2 flex space-x-6">i like codin</div>
        <section className="py-8">
          <p className="text-xl max-w-lg">more text</p>
        </section>
        <div className="py-8 flex space-x-4">
          <div className="w-1/2">
            <div className="relative"></div>
          </div>
        </div>
      </div>
    </>
  );
}
