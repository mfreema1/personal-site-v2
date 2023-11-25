function NavBar() {
  return (
    <>
      <nav className="flex h-14 w-full bg-slate-200 drop-shadow-md">
        <img className="m-4" src="/favicon.ico" alt="A flower." />
        <div className="m-4 flex grow flex-row justify-end gap-4">
          <a className="font-mono" href="#">
            About
          </a>
          <a className="font-mono" href="#">
            Seminars
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
