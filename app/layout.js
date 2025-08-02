import "./globals.css";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
});

export const metadata = {
  title: "Kitty The Mechanic | Solana",
  description: "Kity is forever on Solana",
  icons: {
    icon: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F87b1db0643374fe69850443dd80506a7%2Ff9c0af44e9f948bfa7967ad809320291?format=webp&width=32",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F87b1db0643374fe69850443dd80506a7%2Ff9c0af44e9f948bfa7967ad809320291?format=png&width=32",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "https://cdn.builder.io/api/v1/image/assets%2F87b1db0643374fe69850443dd80506a7%2Ff9c0af44e9f948bfa7967ad809320291?format=png&width=32",
    apple: "https://cdn.builder.io/api/v1/image/assets%2F87b1db0643374fe69850443dd80506a7%2Ff9c0af44e9f948bfa7967ad809320291?format=png&width=180",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable}`}>{children}</body>
    </html>
  );
}
