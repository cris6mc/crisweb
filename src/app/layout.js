import { Inter } from "next/font/google";
import "./globals.css";
import { IconBase } from "react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cristian Machado",
  description: "Full stack developer",
  image: "/images/profile-photo.jpg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
          <div className="bg-gradient-to-tr from-[#0f172a] via-[#0a192f] to-[#0f172a] text-cyan-100 ">
            {children}
          </div>
          
      </body>
    </html>
  );
}
