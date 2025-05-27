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
      <body className={inter.className}>
        <div className="relative group">
          <div className="absolute z-10 bottom-8 right-8">
            <button>botonnn</button>
          </div>
          <div className="relative z-0">
            {children}
          </div>
          
        </div>
          
      </body>
    </html>
  );
}
