/* eslint-disable react/prop-types */
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
    {title}
  </LinkScroll>
);

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
                <NavLink title="features" />
                <div className="dot" />
                <NavLink title="pricing" />
              </li>

              <li className="nav-logo">
                <LinkScroll>
                  <img
                    src="/images/xora.svg"
                    alt="logo"
                    width={160}
                    height={55}
                  />
                </LinkScroll>
              </li>

              <li className="nav-li">
                <NavLink title="faq" />
                <div className="dot" />
                <NavLink title="download" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
