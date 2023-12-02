import "./globals.css";

export const metadata = {
  title: "Keep Clone|next.js",
  description: "A simple google keep clone I made to learn some things.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
