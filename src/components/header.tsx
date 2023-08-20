import Navlink from "./navlink";

const Header = () => {
  return (
    <header className="w-full sticky absolute top-0 p-5 bg-white text-black">
      <nav>
        <ul className="flex flex-row">
          <Navlink linkName="About Me" link="/about" />
          <Navlink linkName="Contact" link="/contact" />
          <Navlink linkName="Blog (Coming Eventually)" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
