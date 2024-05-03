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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";

const ArrowLight = () => {
  return <img src="./images/icon-arrow-light.svg" alt="arrow" />;
};

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
          <p className=" text-3xl text-white font-ubuntu ">Blogr</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="start"
        className="hidden sm:flex gap-4 items-center justify-center"
      >
        <NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                  radius="sm"
                  variant="light"
                  endContent={<ArrowLight />}
                >
                  Product
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Product"
              itemClasses={{
                base: "gap-2",
              }}
            >
              <DropdownItem key="overveiw">Overveiw</DropdownItem>
              <DropdownItem key="Pricing">Pricing</DropdownItem>
              <DropdownItem key="MarketPlace">MarketPlace</DropdownItem>
              <DropdownItem key="Features">Features</DropdownItem>
              <DropdownItem key="Integrations">Integrations</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                  radius="sm"
                  variant="light"
                  endContent={<ArrowLight />}
                >
                  Company
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Product"
              itemClasses={{
                base: "gap-2",
              }}
            >
              <DropdownItem key="overveiw">About</DropdownItem>
              <DropdownItem key="Pricing">Team</DropdownItem>
              <DropdownItem key="MarketPlace">Blog</DropdownItem>
              <DropdownItem key="Features">Careers</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                  radius="sm"
                  variant="light"
                  endContent={<ArrowLight />}
                >
                  Contact
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Product"
              itemClasses={{
                base: "gap-2",
              }}
            >
              <DropdownItem key="overveiw">Contact</DropdownItem>
              <DropdownItem key="Pricing">Newsletter</DropdownItem>
              <DropdownItem key="MarketPlace">LinkedIn</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-4 px-6">
          <Link href="#" className="text-white">
            Login
          </Link>
          <Button radius="full" className="bg-white w-[100px] text-lightRed">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={
            isMenuOpen ? (
              <img src="/images/icon-close.svg" alt="menuIcon"></img>
            ) : (
              <img src="/images/icon-hamburger.svg" alt="menuIcon"></img>
            )
          }
        />
      </NavbarContent>
      <NavbarMenu className="bg-transparent p-5">
        <NavbarMenuItem className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg items-center  ">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-2">
              <Link href="#" size="lg">
                Product
              </Link>
              <img src="/images/icon-arrow-dark.svg" alt="arrow" />
            </div>

            <div className="flex justify-center items-center gap-2">
              <Link href="#" size="lg">
                Company
              </Link>
              <img src="/images/icon-arrow-dark.svg" alt="arrow" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <Link href="#" size="lg">
                Connect
              </Link>
              <img
                src="/images/icon-arrow-dark.svg"
                alt="arrow"
                className="transform rotate-180"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-grayishBlue/30 rounded-lg p-4 w-full">
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
