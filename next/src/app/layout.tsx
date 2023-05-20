import { Inter } from "next/font/google";
import { Html } from "./styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Natalie Davis",
  description: "Software Engineer specializing in front end applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <body className={inter.className}>{children}</body>
    </Html>
  );
}
