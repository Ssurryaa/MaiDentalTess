import Button from './Button';

const Navbar = () => {
  return (
    <header class="absolute top-0 flex w-full">
    <div className="navbar lg:px-20 items-center bg-white bg-opacity-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Sistem Pakar</a>
            </li>
            <li>
              <a href="/cari-dokter">Cari Dokter</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a>Tentang</a>
            </li>
            <li>
              <a href="/login">Masuk</a>
            </li>
            <li>
              <a href="/regis" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Daftar</a>
            </li>
          </ul>
        </div>
        <a href='/' className="normal-case text-xl text-sky-500">
          Mai Dental
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Sistem Pakar</a>
          </li>
          <li>
            <a href='/cari-dokter'>Cari Dokter</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a>Tentang</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="lg:mr-4">
          <a
            href="/login"
            className="rounded-full py-2 px-8 text-base font-semibold text-black transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl"
          >
            Masuk
          </a>
        </div>
        <div>
          <a
          href="/regis"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-xl"
        >
          Daftar
        </a>
        </div>
      </div>
    </div>
    </header>
  );
};
export default Navbar;
