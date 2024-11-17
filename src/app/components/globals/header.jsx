"use client"
import { useState } from "react";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    CubeIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    SquaresPlusIcon,
    XMarkIcon,
    ArrowDownCircleIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, } from '@heroicons/react/20/solid'

const project = [
    { name: "Analytics", description: "How we use our data", href: '#', icon: ChartPieIcon },
    { name: "Engagement", description: "Talk to our developers", href: '#', icon: CursorArrowRaysIcon },
    { name: "Code", description: "View our whole project's code", href: '#', icon: SquaresPlusIcon },
]
const callsToAction = [
    { name: "Download", href: '#download', icon: ArrowDownCircleIcon },
    { name: "Talk to our team", href: '#', icon: PhoneIcon },
]

export default function Header() {
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    return (
        <header className="bg-white dark:bg-slate-800">
            <nav aria-label="Global" className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Velocity Browser</span>
                        <img
                            alt=""
                            src="https://raw.githubusercontent.com/PonderSlime/Velocity-Browser/refs/heads/main/Logo-small.png"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                    >
                        <span className="sr-only">Open Main Menu</span>
                        <CubeIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    
                    <a href="#stats" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        Stats
                    </a>
                    <a href="#features" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        Features
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        About
                    </a>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
                            More
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-white" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3x1 bg-white dark:bg-slate-800 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {project.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-emerald-900"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-teal-800 group-hover:bg-white dark:group-hover:bg-gray-800 ">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 dark:text-white group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-emerald-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 dark:text-white">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-slate-800">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-emerald-900"
                                    >
                                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-white group-hover:text-indigo-600" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#download" className="text-sm/6 px-5 py-2.5 rounded-full font-semibold text-gray-900 dark:text-white bg-lime-300 dark:bg-lime-800">
                        Download <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm-ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only"></span>
                            <img
                                alt=""
                                src="https://raw.githubusercontent.com/PonderSlime/Velocity-Browser/refs/heads/main/Logo-small.png"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                        >
                            <span className="sr-only">Close Menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-m-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                
                                <a href="#features" className="block px-3 py-2.5 text-base/5 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-emerald-900">
                                    Features
                                </a>
                                <a href="#" className="block px-3 py-2.5 text-base/5 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-emerald-900">
                                    About
                                </a>
                                <a href="#" className="block px-3 py-2.5 text-base/5 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-emerald-900">
                                    Stats
                                </a>
                                <Disclosure as="div" className="-mx-2">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-emerald-900">
                                        More
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-white" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...project, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-emerald-900"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#download"
                                    className="-mx-2 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-teal-800 focus:outline"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}