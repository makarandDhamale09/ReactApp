const Navbar = () => {
  return (
    <div className="container">
      <div className="flex h-14 bg-slate-800 items-center justify-between">
        <div className="flex items-center">
          <img className="h-14 w-14 m-5" src="/assets/logo.png"></img>
          <span className="text-2xl font-bold text-white">
            Currency Exchange
          </span>
        </div>
        <span className="pr-7 text-xl text-white">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
