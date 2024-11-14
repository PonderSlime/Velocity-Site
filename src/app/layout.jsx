import localFont from "next/font/local";
import "./output.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Velocity Web Browser",
    description: "The site for the latest open-source web browse",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
    </html>
    );
}
