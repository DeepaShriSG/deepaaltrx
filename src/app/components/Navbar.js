"use client";
import { useState } from "react";
import { Dialog, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ChevronRightIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const products = [
    { name: "Management Team", href: "#", icon: ChevronRightIcon },
    { name: "Media", href: "#", icon: ChevronRightIcon },
    { name: "Industry Recognition", href: "#", icon: ChevronRightIcon },
    { name: "Advisory Board", href: "#", icon: ChevronRightIcon },
  ];

  return (
    <>
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto shadow-md border-b border-gray-200 flex max-w-8xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            {/* Logo Section */}
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AltDrx</span>
              <Image alt="Logo" src="/logo.svg" width={50} height={50} className="mx-auto block" style={{ width: "150px", height: "auto" }} priority />
            </a>
          </div>

          {/* Toggle section */}
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-orange-600">
              <span className="sr-only">Open main menu</span>
              <Image alt="Logo" src="/menu-icon.svg" width={50} height={50} className="mx-auto block" style={{ width: "50px", height: "auto" }} priority />
              
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-5 hover:text-orange-600">
            <PopoverGroup className="hidden lg:flex lg:gap-x-8 justify-end items-center">
              <Popover className="relative">
                <PopoverButton className="flex items-center whitespace-nowrap lg:text-sm cursor-pointer font-sans uppercase gap-x-1 hover:text-orange-800 text-blue cursor-pointer">
                  ABOUT
                  <PlusIcon aria-hidden="true" className="h-5 w-5 flex-none text-blue rotate-180" />
                </PopoverButton>
                <PopoverPanel className="absolute right-0 z-10 mt-4 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="p-3 w-64">
                    {products.map((item) => (
                      <div key={item.name} className="group p-2 relative flex items-end gap-x-2 rounded-lg text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-6 w-6 flex-none items-start justify-start rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold lg:text-sm cursor-pointer font-sans text-blue">
                            {item.name}
                            <span className="fixed inset-0 z-40" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              <a href="#" className="hover:text-orange-800 whitespace-nowrap text-blue lg:text-sm cursor-pointer font-sans cursor-pointer">
                PRIVATE OPPORTUNITY
              </a>
              <Popover className="relative">
                <PopoverButton className="flex uppercase whitespace-nowrap items-center lg:text-sm cursor-pointer font-sans uppercase gap-x-1 hover:text-orange-800 text-blue cursor-pointer">
                  Invest
                  <PlusIcon aria-hidden="true" className="h-5 w-5 flex-none text-blue rotate-180" />
                </PopoverButton>
                <PopoverPanel className="absolute right-0 z-10 mt-4 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="p-3 w-64">
                    <div className="group p-2 relative flex items-end gap-x-2 rounded-lg text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-6 w-6 flex-none items-start justify-start rounded-lg bg-gray-50 group-hover:bg-white">
                        <ChevronRightIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <a href="" className="block font-semibold lg:text-fs14 cursor-pointer font-sans text-blue">
                          TradeX(Beta)
                          <span className="fixed inset-0 z-40" />
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
              <a href="#" className="hover:text-orange-800 whitespace-nowrap text-blue lg:text-base cursor-pointer font-sans cursor-pointer">
                FAQS
              </a>
            </PopoverGroup>
            <li className="block">
              <v-button id="signin" className="buttonhover lg:text-base cursor-pointer font-sans">
                <a href="#" className="inline-block whitespace-nowrap rounded-full bg-black px-6 py-2 text-white font-semibold text-fs-14">
                  SIGN UP | SIGN IN
                </a>
              </v-button>
            </li>
          </div>
        </nav>
        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75" />
          <Dialog.Panel className="fixed inset-0 z-20 w-full h-full bg-white flex flex-col justify-center items-center px-6 py-6">
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 rounded-full bg-black p-2 text-white">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="flex flex-col items-center space-y-8 text-center mt-12 text-lg font-semibold text-gray-900">
              <a href="#" className="hover:text-orange-600 font-sans">
                ABOUT US +
              </a>
              <a href="#" className="hover:text-gray-800 font-sans">
                PRIVATE OPPORTUNITY
              </a>
              <a href="#" className="hover:text-gray-800 font-sans">
                INVEST +
              </a>
              <a href="#" className="hover:text-gray-800 font-sans">
                FAQS
              </a>
            </div>
            <div className="mt-12">
              <a href="#" className="inline-block rounded-full bg-black px-6 py-2 text-white font-semibold">
                SIGN UP | SIGN IN
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
