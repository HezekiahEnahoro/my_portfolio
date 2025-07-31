export default function Nav() {
  return (
    <section>
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 p-4">
        <ul className="flex justify-center space-x-8 font-semibold text-gray-600">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
