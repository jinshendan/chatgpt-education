/*这一行引入了一个全局CSS文件。这个文件中的样式将应用于所有使用此布局的页面。 */
import "./globals.css";

export const metadata = {
  title: "ChatGPT Education",
  description: "Your personal ChatGPT Education Chat Bot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}