"use client"
import { MotionFadeIn, BrowserFeaturesListWithImageSidebar, Header, BrowserSpecs, Downloads,Footer } from "./components/components.jsx"

import "./output.css"

export default function App() {
  return (
    <body>
      <Header />
      <section className="relaive isolate px-6 pt-14 lg:px-8 bg-blue-600 bg-fixed bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] to-teal-300 from-pink-600 overflow-hidden">
        <div className="mx-auto max-w-2x1 py-32 sm:py-48 pg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <MotionFadeIn>
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Indev.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Visit Repo
                </a>
              </div>
            </MotionFadeIn>
          </div>
          <div className="text-center">
            <MotionFadeIn>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white" data-aos="fade-up">
                Meet the newest open-source web browser
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 dark:text-white sm:text-x1/8" data-aos="fade-up">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat.
              </p>
            </MotionFadeIn>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>

            </div>
          </div>
        </div>
      </section>
      
      <section className="relative isolate overflow-hidden bg-white dark:bg-slate-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <MotionFadeIn>
              <blockquote className="text-center text-xl/8 font-semibold text-gray-900 dark:text-slate-50 sm:text-2xl/9">
                <p>
                  "My most ambitious project to date."
                </p>
              </blockquote>
            </MotionFadeIn>
            <MotionFadeIn>
              <figcaption className="mt-10">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/174149291"
                  className="mx-auto size-10 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900 dark:text-slate-50">PonderSlime</div>
                  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900 dark:fill-slate-50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-900 dark:text-slate-50">Lead Developer</div>
                </div>
              </figcaption>
            </MotionFadeIn>
          </figure>
        </div>
      </section>
      <BrowserFeaturesListWithImageSidebar />
      <BrowserSpecs />
      <Downloads />
      <Footer />
    </body>
  );
}
