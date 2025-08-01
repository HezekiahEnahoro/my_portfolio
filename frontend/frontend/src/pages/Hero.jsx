const Hero = ({ profile, motion }) => {
  return (
    <section id="hero" className="mt-0">
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-start pt-25">
        <motion.h1
          className="text-4xl font-bold text-center text-indigo-600 mb-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          My Portfolio
        </motion.h1>

        {profile && (
          <motion.div
            className="bg-white shadow-xl p-6 rounded-2xl max-w-xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <section
              id="hero"
              className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-4 py-10">
              {/* Profile Image */}
              <img
                src={profile.img}
                alt="Profile Pic"
                className="w-32 h-32 rounded-full mb-6 border-3 border-indigo-500 shadow-lg"
              />

              <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">
                Hi, I'm Hezekiah 👋
              </h1>

              <h2 className="text-2xl sm:text-3xl text-gray-800 font-medium mb-4">
                Full-Stack Developer and Machine Learning Enthausiast
              </h2>

              <p className="max-w-xl text-gray-600 text-base sm:text-lg mb-6">
                I build fast, modern, and scalable web apps using React, Flask,
                and Python. I focus on clean code, UI/UX, and backend automation
                that solves real problems.
              </p>

              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition">
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded shadow hover:bg-indigo-50 transition">
                  Contact Me
                </a>
              </div>
            </section>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
