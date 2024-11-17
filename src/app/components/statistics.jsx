"use client"
import { faChrome, faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons"
import { myVelocityBrowserIcon } from "../assets/myVelocityBrowserIcon.ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MotionFadeIn } from "./components.jsx"
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react"

const browsers = [
    { key:1, title: ' Firefox', href: 'https://www.mozilla.org/en-US/firefox/', icon: faFirefoxBrowser,
        jetstream_stats: {
        score: "76.413", score_bar: "58.8%",
        Stdlib: "0.937", Stdlib_bar:"74.1%",
        },
        motionmark_stats: {
            score: "310.75", score_bar: "72.5%",
            device: "Desktop",
            device_fps: "60fps",
        }
    },
    { key:2, title: ' Chromium', href: 'https://www.google.com/chrome/', icon: faChrome,
        jetstream_stats: {
        score: "129.950", score_bar: "100%",
        Stdlib: "1.118", Stdlib_bar: "88.5%",
        },
        motionmark_stats: {
            score: "428.14", score_bar: "100%",
            device: "Desktop",
            device_fps: "60fps",
        }
    },
    { key:3, title: ' Velocity', href: 'https://velocity-browser.vercel.app/', icon: myVelocityBrowserIcon, 
        jetstream_stats: {
            score: "84.189", score_bar: "64.785%",
            Stdlib: "1.263", Stdlib_bar: "100%",
        },
        motionmark_stats: {
            score: "218.43", score_bar: "51%",
            device: "Desktop",
            device_fps: "60fps",
        }
    },
]

export default function BrowserSpecs() {
    return (
        <div id="stats" className="bg-gradient-to-t from-slate-500 to-slate-400 dark:from-violet-950 dark:to-teal-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <MotionFadeIn className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">Browser Specs</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-100">Learn how it compares to more common browsers</p>
                </MotionFadeIn>
                <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-8 gap-y-16 border-t border-gray-200 dark:border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {browsers.map((item) => (
                        <div key={item.title} className="flex max-w-full flex-col items-start justify-between">
                            <MotionFadeIn className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-gray-100">
                                    <a href={item.href} className="text-2xl">
                                        <span className="absolute inset-0" />
                                        <FontAwesomeIcon icon={item.icon} stx="0 0 103 112" xmlns="http://www.w3.org/2000/svg" className="text-3xl" />
                                        {item.title}
                                    </a>
                                </h3>
                            </MotionFadeIn>
                            <Disclosure as="div" className="mt-5 w-full max-w-15 border-t border-gray-200">
                                <MotionFadeIn>
                                    <DisclosureButton>
                                        <h1 className="mt-5 text-lg/9 text-gray-900 font-semibold dark:text-slate-200">JetStream2</h1>
                                    </DisclosureButton>
                                </MotionFadeIn>
                                <Transition
                                    enter="transition ease-out duration-200"
                                    enterFrom="transform opacity-0 translate-y-1"
                                    enterTo="transform opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="transform opacity-100 translate-y-0"
                                    leaveTo="transform opacity-0 translate-y-1"
                                >
                                    <DisclosurePanel>
                                        <h1 className="mt-5 text-lg/8 text-gray-900 font-semibold dark:text-gray-200">Score</h1>
                                        <h1 className="mt-2 text-lg/6 text-gray-700 dark:text-gray-100">{item.jetstream_stats.score}</h1>
                                        <div className="mt-2 w-full max-w-15 bg-gray-200 rounded-full h-2.5 dark:bg-slate-500">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: item.jetstream_stats.score_bar}} />
                                        </div>
                                        <h1 className="mt-5 text-lg/8 text-gray-900 font-semibold dark:text-gray-200">Stdlib</h1>
                                        <h1 className="mt-2 text-lg/6 text-gray-700 dark:text-gray-100">{item.jetstream_stats.Stdlib}</h1>
                                        <div className="mt-2 w-full max-w-15 bg-gray-200 rounded-full h-2.5 dark:bg-slate-500">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: item.jetstream_stats.Stdlib_bar}} />
                                        </div>
                                    </DisclosurePanel>
                                </Transition>
                            </Disclosure>
                        
                        
                            <Disclosure as="div" className="mt-5 block w-full max-w-15 border-t border-gray-200">
                                <MotionFadeIn>
                                    <DisclosureButton>
                                        <h1 className="mt-5 text-lg/9 text-gray-900 font-semibold dark:text-slate-200">MotionMark</h1>
                                    </DisclosureButton>
                                </MotionFadeIn>
                                <Transition
                                    enter="transition ease-out duration-200"
                                    enterFrom="transform opacity-0 translate-y-1"
                                    enterTo="transform opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="transform opacity-100 translate-y-0"
                                    leaveTo="transform opacity-0 translate-y-1"
                                >
                                    <DisclosurePanel>
                                        <h1 className="mt-5 text-lg/8 text-gray-900 font-semibold dark:text-gray-200">Score</h1>
                                        <h1 className="mt-2 text-lg/6 text-gray-700 dark:text-gray-100">{item.motionmark_stats.score}</h1>
                                        <div className="mt-2 w-full max-w-15 bg-gray-200 rounded-full h-2.5 dark:bg-slate-500">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: item.motionmark_stats.score_bar}} />
                                        </div>
                                        <h1 className="mt-5 text-lg/8 text-gray-900 font-semibold dark:text-gray-200">Device</h1>
                                        <div className="mt-2 text-lg/7 text-gray-700 dark:text-gray-100">{item.motionmark_stats.device}</div>
                                        <h1 className="mt-5 text-lg/8 text-gray-900 font-semibold dark:text-gray-200">Device FPS</h1>
                                        <div className="mt-2 text-lg/7 text-gray-700 dark:text-gray-100">{item.motionmark_stats.device_fps}</div>
                                    </DisclosurePanel>
                                </Transition>
                            </Disclosure>
                            
                        </div>
                    ))}
                </div>
                <MotionFadeIn>
                    <div className="mx-auto mt-8 border-t border-gray-200 text-center">
                        <a href="https://browserbench.org/" className="text-pretty text-2 tracking-tight text-gray-500 mt-32">Tested using BrowserBench's Toolkits</a>
                    </div>
                </MotionFadeIn>
            </div>
        </div>
    )
}