

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-0 md:mb-0">
                        <a href="https://velocity-browser.vercel.app/" className="flex items-center">
                            <img src="https://raw.githubusercontent.com/PonderSlime/Velocity-Browser/refs/heads/main/Logo-small.png" className="h-8 me-3" alt="Velocity Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Velocity Browser</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Project</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Analytics</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Engagement</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/ponderslime/velocity-browser" className="hover:underline">Code</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Data</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#stats" className="hover:underline">Stats</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#features" className="hover:underline">Features</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get The Browser</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#download" className="hover:underline">Dowload</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}