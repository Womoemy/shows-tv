import "@/app/ui/global.css";
import { dm_sans } from "@/app/ui/fonts";

export const metadata = {
  title: "ShowsTV",
  description: "Personalised Movie Search Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
