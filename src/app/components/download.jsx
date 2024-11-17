import { faLinux, faWindows } from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MotionFadeIn } from "./components.jsx"

const downloads = [
    { title: ' Linux', href: 'https://github.com/PonderSlime/Velocity-Browser/releases/download/v0.0.1-alpha/linux-main', icon: faLinux, },
    { title: ' Windows', href: 'https://github.com/PonderSlime/Velocity-Browser/archive/refs/heads/main.zip', icon: faWindows},
    { title: ' Source Code', href: 'https://github.com/PonderSlime/Velocity-Browser/archive/refs/heads/main.zip', icon: faCode},
]

export default function Downloads() {
    return (
        <div id="download" className="bg-slate-500 dark:bg-violet-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-8 lg:px-8">
                <MotionFadeIn className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-pretty text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">Download</h1>
                </MotionFadeIn>
                <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-8 gap-y-16 border-t border-gray-200 dark:border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {downloads.map((platform) => (
                        <div key={platform.title} className="flex max-w-full flex-col items-start items-center justify-between">
                            <div className="divide-y divide-gray-500/10">
                                <div className="block px-3 py-2.5 text-center text-xl font-semibold">
                                    <MotionFadeIn>
                                        <FontAwesomeIcon icon={platform.icon} />
                                        {platform.title}
                                    </MotionFadeIn>
                                </div>
                                <div className="block px-3 py-2.5">
                                    <MotionFadeIn>
                                        <a href={platform.href} className="text-sm/6 px-5 py-2.5 mt-5 rounded-full font-semibold text-gray-900 dark:text-white bg-lime-300 dark:bg-lime-800">
                                            Download for {platform.title}
                                        </a>
                                    </MotionFadeIn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}