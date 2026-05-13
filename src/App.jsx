const skills = [
  "Python",
  "Flask",
  "MySQL",
  "Machine Learning",
  "NLP",
  "Naive Bayes",
  "HTML",
  "CSS",
  "JavaScript",
  "GitHub",
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-bold">Abbashalom Radja</h1>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Portfolio
        </p>
      <img
        src="/profile.jpeg"
        alt="Profile"
        className="mb-8 h-32 w-32 rounded-full border-4 border-blue-500 object-cover shadow-lg"
/>
        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, saya Abbashalom Radja
        </h2>

        <p className="mt-4 text-xl text-slate-300">
          Fresh Graduate Teknik Informatika
        </p>

        <p className="mt-6 max-w-2xl text-slate-400">
          Saya memiliki minat pada pengembangan web, machine learning, dan natural language processing.
          Berpengalaman membangun sistem analisis sentimen berbasis web menggunakan Flask, MySQL, dan Naive Bayes.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/AbbashalomRadja"
            target="_blank"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
          >
            GitHub
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-slate-600 px-5 py-3 font-medium transition hover:bg-slate-800"
          >
            Lihat Project
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-6 max-w-3xl text-slate-400">
          Saya adalah fresh graduate Teknik Informatika yang tertarik pada pengembangan aplikasi berbasis web,
          pengolahan data, dan penerapan machine learning untuk menyelesaikan permasalahan nyata.
          Saat ini saya sedang membangun portofolio project untuk meningkatkan kemampuan teknis dan kesiapan karier.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
  <h2 className="text-3xl font-bold">Projects</h2>

  <div className="mt-10 grid gap-8 md:grid-cols-2">

    {/* Project 1 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <img
        src="/projects/dashboard.png"
        alt="Sentiment Analysis"
        className="mb-6 rounded-xl border border-slate-800"
      />

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        Featured Project
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Sentiment Analysis Naive Bayes
      </h3>

      <p className="mt-4 text-slate-400">
        Sistem analisis sentimen berbasis web menggunakan NLP dan metode Naive Bayes
        untuk mengklasifikasikan opini publik menjadi positif, netral, dan negatif.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Python", "Flask", "MySQL", "NLP", "Scikit-learn"].map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href="https://github.com/AbbashalomRadja/sentiment-analysis-naive-bayes"
          target="_blank"
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
        >
          Repository
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <img
        src="/projects/puella.png"
        alt="PuellaStudio"
        className="mb-6 rounded-xl border border-slate-800"
      />

      <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
        Frontend Project
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        PuellaStudio
      </h3>

      <p className="mt-4 text-slate-400">
        Modern nail art studio website dengan AI nail art idea generator,
        responsive layout, dan aesthetic UI menggunakan React dan Tailwind CSS.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["React", "Tailwind CSS", "Frontend", "UI/UX"].map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com/AbbashalomRadja/puella-studio"
          target="_blank"
          className="rounded-xl bg-pink-500 px-5 py-3 font-medium transition hover:bg-pink-600"
        >
          Repository
        </a>

        <a
          href="https://puella-studio.vercel.app/"
          target="_blank"
          className="rounded-xl border border-slate-700 px-5 py-3 font-medium transition hover:bg-slate-800"
        >
          Live Demo
        </a>
      </div>
    </div>

  </div>
</section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-slate-400">
          Tertarik untuk berdiskusi atau melihat project saya lebih lanjut?
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
  <a
    href="mailto:shalomradjaa@gmail.com"
    className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
  >
    Email
  </a>

  <a
    href="https://github.com/AbbashalomRadja"
    target="_blank"
    className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/abbashalom-radja-015726331/"
    target="_blank"
    className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
  >
    LinkedIn
  </a>
</div>
      </section>
    

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Abbashalom Radja. All rights reserved.
      </footer>
    </main>
  )
}

export default App