const Project = ({ projects, motion }) => {
  return (
    <section id="projects" className="mt-20 max-w-3xl mx-auto px-4">
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-center mb-6 text-3xl font-bold mb-6 text-indigo-700">
         Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <h3 className="text-xl font-semibold text-indigo-600 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm hover:underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
