import HomeLink from "./HomeLink";
import Link from "./Link";
import { serif } from "./fonts";
import "./global.css";

export const metadata = {
  metadataBase: new URL("https://moshekatz.dev"),
};

const Activity: any = Symbol.for("react.activity");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.className}>
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
        <header className="mb-14 flex flex-row place-content-between">
          <HomeLink />
          {/* <span className="relative top-[4px] italic">by Moshe Katz</span> */}
        </header>
        <main>
          <Activity mode="visible">{children}</Activity>
        </main>
        <footer className="mt-12">
          This site is highly inspired by Dan Abramov's work at{" "}
          <Link
            target="_blank"
            href="https://overreacted.io"
            style={{ textDecoration: "underline" }}
          >
            overreacted.io
          </Link>
        </footer>
      </body>
    </html>
  );
}
