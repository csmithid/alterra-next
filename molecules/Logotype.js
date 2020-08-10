import Nav from "../molecules/Nav";

const Logotype = () => (
  <div className="font-display font-bold flex flex-col items-center mb-12">
    <h1 className="text-4xl sm:text-6xl text-gray-800 tracking-wider leading-none">
      ALTERRA
    </h1>
    <h2 className="text-xs sm:text-lg text-gray-800 font-medium tracking-normal">
      CONSTRUCTION MANAGEMENT{" "}
      <span className="hidden sm:inline-block">LLC</span>
    </h2>
    <hr className="w-48 my-4" />
    <Nav />
  </div>
);

export default Logotype;
