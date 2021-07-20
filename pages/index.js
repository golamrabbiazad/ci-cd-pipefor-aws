import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      <Link href="/blog">
        <a>Blog page</a>
      </Link>
    </div>
  );
}
