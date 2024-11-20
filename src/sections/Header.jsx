import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => <LinkScroll>{title}</LinkScroll>;

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex items-center max-lg:px-5">
        <a href="" className="lg:hidden flex cursor-pointer z-2">
          <img src="/images/xora.svg" alt="logo" width={115} height={55} />
        </a>

        <div className="w-full border-2 border-amber-400">
          <nav>
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="Features" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
