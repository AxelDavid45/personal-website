export default function Home() {
  return (
    <main className="min-h-screen mt-5 container mx-auto">
      <section className="w-full  flex flex-col items-center justify-center p-20 ">
        <div className="mt-10 bg-emphasis rounded-md text-center w-fit mx-auto p-5 mb-6">
          <h2 className="text-black text-6xl font-light ">
            Hello, I{"'"}m Axel
          </h2>
        </div>
        <div className="text-center">
          <p className="text-black text-5xl font-light mb-6">
            a web developer with
          </p>
          <p className="font-light text-black">
            My expertise spans React, Node.js, and API development, where Ive
            created solutions that significantly improve user experiences. Im a
            strong advocate for code quality and maintainability, often leading
            refactoring efforts and integrating best practices. Collaborative by
            nature, I excel in cross-functional teams, aligning projects with
            business goals.
          </p>
        </div>
      </section>
    </main>
  );
}
