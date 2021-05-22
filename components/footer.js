import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container max-w-screen-md mx-auto mt-16 mb-24">
      <p className="text-gray-400">
        <small>
          Created by{" "}
          <a href="https://quinnkeast.com" target="_blank">
            Quinn Keast
          </a>
        </small>
      </p>
    </footer>
  );
}
