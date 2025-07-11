import HomeLink from "../HomeLink";
import Link from "../Link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="mt-12">
        <HomeLink />
      </footer>
    </>
  );
}
