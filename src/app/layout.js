import "./homepage.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Space Exploration",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
