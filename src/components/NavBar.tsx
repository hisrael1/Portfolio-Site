import { useState, useRef, RefObject } from "react";

interface NavBarProps {
  refs: {
    homeRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

const NavBar = (props: NavBarProps) => {
  const {
    refs: { homeRef, aboutRef, projectsRef, contactRef },
  } = props;
  const [mobileMenuModalOpen, setMobileMenuModalOpen] =
    useState<boolean>(false);
  const backgroundDiv = useRef<HTMLDivElement>(null);
  const menuModal = useRef<HTMLDivElement>(null);

  interface NavItem {
    label: string;
    iconClass: string;
    ref: RefObject<HTMLDivElement>;
  }

  const navItems: NavItem[] = [
    {
      label: "Home",
      iconClass: "fa-house",
      ref: homeRef,
    },
    {
      label: "About Me",
      iconClass: "fa-user",
      ref: aboutRef,
    },
    {
      label: "Projects",
      iconClass: "fa-code",
      ref: projectsRef,
    },
    {
      label: "Contact Me",
      iconClass: "fa-phone",
      ref: contactRef,
    },
  ];

  return (
    <div className="bg-slate-600 w-full px-4 py-4 text-slate-100 flex justify-center">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <div className="dancing-script-font text-5xl">HSI</div>
        <div className="md:hidden">
          <button onClick={(): void => setMobileMenuModalOpen(true)}>
            <i className="fa-solid fa-bars text-4xl px-4 cursor-pointer text-slate-300"></i>
          </button>
          {mobileMenuModalOpen && (
            <div
              className="backdrop-blur-sm fixed top-0 left-0 w-full h-full z-2"
              ref={backgroundDiv}
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                const clickedElement = e.target as HTMLElement;
                // close modal only if click is inside background div but not modal menu
                if (
                  backgroundDiv.current?.contains(clickedElement) &&
                  !menuModal.current?.contains(clickedElement)
                ) {
                  setMobileMenuModalOpen(false);
                }
              }}
            >
              <div
                className="absolute top-0 right-0 bg-slate-600 text-xl flex flex-col items-start w-56 z-4 py-8 px-4"
                ref={menuModal}
              >
                <i
                  className="fa-solid fa-circle-xmark absolute top-4 right-4 bg-slate-700 text-slate-400 rounded-full text-3xl"
                  onClick={() => setMobileMenuModalOpen(false)}
                ></i>
                {navItems.map((navItem) => (
                  <button
                    key={navItem.label}
                    className="mx-4 cursor-pointer my-1"
                    onClick={() => {
                      setMobileMenuModalOpen(false);
                      navItem.ref.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <i className={`${navItem.iconClass} fa-solid mr-2 w-8`}></i>
                    {navItem.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="text-xl hidden md:flex">
          {navItems.map((navItem) => (
            <button
              key={navItem.label}
              className="mx-4 cursor-pointer"
              onClick={() =>
                navItem.ref.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className={`${navItem.iconClass} fa-solid mr-2`}></i>
              {navItem.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
