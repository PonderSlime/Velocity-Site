import "../output.css"
import { ClockIcon, CpuChipIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { MotionFadeIn } from "./components.jsx"
export default function BrowserFeaturesListWithImageSidebar() {
    return (
        <div id="features" className="relative isolate overflow-hidden bg-white dark:bg-slate-800 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-fixed">
            <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-t from-slate-400 to-white dark:from-teal-950 dark:to-slate-800" />
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <MotionFadeIn>
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-indigo-600">Currently featuring PyQT</p>
                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                                    Current Features
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-100">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas.
                                </p>
                            </div>
                        </MotionFadeIn>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <MotionFadeIn>
                        <img
                            alt="browser pic"
                            src="https://cloud-esspko1ea-hack-club-bot.vercel.app/0velocity-browser.png"
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        />
                    </MotionFadeIn>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 dark:text-gray-50 lg:max-w-lg">
                            <MotionFadeIn>
                                <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id.
                                </p>
                            </MotionFadeIn>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-100">
                                <MotionFadeIn>
                                    <li className="flex gap-x-3">
                                        <ClockIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            <strong className="font-semibold text-gray-900 dark:text-gray-200">Highly Performant</strong> At the current stage of development, the browser loads in nearly 103 milliseconds!
                                        </span>
                                    </li>
                                </MotionFadeIn>
                                <MotionFadeIn>
                                    <li className="flex gap-x-3">
                                        <CpuChipIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            <strong className="font-semibold text-gray-900 dark:text-gray-200">Low Memory Usage</strong> Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </span>
                                    </li>
                                </MotionFadeIn>
                            </ul>
                            <MotionFadeIn>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                </p>
                            </MotionFadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}