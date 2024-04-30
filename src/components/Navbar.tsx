import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="absolute top-0 left-0 bg-transparent w-full "
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className=" text-3xl text-white font-ubuntu">Blogr</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Company
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Connect
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="#">Login</Link>
          <Link href="#">SignUp</Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={<img src="/images/icon-hamburger.svg" alt="menuIcon"></img>}
        />
      </NavbarContent>
      <NavbarMenu className="bg-transparent p-5">
        <NavbarMenuItem className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg items-center  ">
          <div className="flex flex-col gap-4">
            <Link isBlock className="flex justify-center " href="#" size="lg">
              Product
            </Link>
            <Link className="flex justify-center" href="#" size="lg">
              Company
            </Link>
            <Link className="flex justify-center" href="#" size="lg">
              Connect
            </Link>
          </div>
          <div className="flex flex-col gap-3 bg-grayishBlue rounded-lg p-4 w-full">
            <Link className="flex justify-center" href="#" size="md">
              Contact
            </Link>
            <Link className="flex justify-center" href="#" size="md">
              Newsletter
            </Link>
            <Link className="flex justify-center" href="#" size="md">
              LinkedIn
            </Link>
          </div>
          <hr className="opacity-20 w-full" />
          <Link className="flex justify-center py-2" href="#" size="lg">
            Login
          </Link>
          <Button
            size="lg"
            radius="full"
            className="w-[120px] bg-gradient-to-r from-redGradStart to-redGradEnd"
          >
            <Link href="#" className="text-white">
              Sign Up
            </Link>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComp;
