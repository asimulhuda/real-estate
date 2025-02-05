import {
  Avatar,
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../public/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import userImage from "../assets/user.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>
      {user && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-semibold text-base"
        >
          <NavLink to="/properties" className="flex items-center">
            Properties
          </NavLink>
        </Typography>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base"
      >
        <NavLink to="/about" className="flex items-center">
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base"
      >
        <NavLink to="/contact" className="flex items-center">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="max-w-[1200px] mx-auto sticky top-0">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-0 lg:py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img className="w-32" src={logoImage} alt="" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-2">
              {user ? (
                <>
                  <Avatar
                    variant="circular"
                    size="md"
                    className="border border-gray-900 p-0.5 cursor-pointer"
                    src={user.photoURL ? user.photoURL : userImage}
                  />
                  <Button
                    onClick={handleLogOut}
                    variant="gradient"
                    size="lg"
                    className="hidden lg:inline-block"
                  >
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <Button
                      variant="outlined"
                      size="lg"
                      className="hidden lg:inline-block"
                    >
                      Register
                    </Button>
                  </Link>

                  <Link to="/login">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="hidden lg:inline-block"
                    >
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-2">
            {user ? (
              <Button
                onClick={handleLogOut}
                fullWidth
                variant="gradient"
                size="md"
                className=""
              >
                LogOut
              </Button>
            ) : (
              <>
                <Link to="register" className="w-full">
                  <Button fullWidth variant="outlined" size="md" className="">
                    Register
                  </Button>
                </Link>
                <Link to="/login" className="w-full">
                  <Button fullWidth variant="gradient" size="md" className="">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
