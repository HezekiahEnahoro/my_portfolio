
export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 px-4 text-gray-800 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">About Me</h2>

        <p className="text-lg mb-6">
          I'm a full-stack developer passionate about clean UI, robust backend
          architecture, and data-driven problem solving. I work across the stack
          to build scalable apps, implement machine learning models, and perform
          data cleaning that powers intelligent features.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "Python",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Flask",
            "REST APIs",
            "MongoDB",
            "PostgreSQL",
            "GitHub Actions",
            "Vercel/Render",
            "Machine Learning",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow">
              {skill}
            </span>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition">
          Download Resume
        </a>
      </div>
    </section>
  );
}
