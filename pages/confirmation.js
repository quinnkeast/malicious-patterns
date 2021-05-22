import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmailSignup from "../components/email-signup";

export default function confirmation() {
  return (
    <div>
      <Head>
        <title>Manipulative Patterns</title>
        <meta
          name="description"
          content="It’s time to change the conversation around dark patterns. It’s time to call them what they are: manipulative patterns."
        />
        <html lang="en-US" />
        <script
          src="https://cdn.usefathom.com/script.js"
          site={process.env.FATHOM}
          defer
        ></script>
        <link rel="stylesheet" href="https://use.typekit.net/nfr2ruk.css" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👹</text></svg>"
        />
      </Head>

      <main>
        <div className="container max-w-screen-md mx-auto mt-16 md:mt-32 mb-12 px-4">
          <div className="rounded-lg bg-gray-800 p-8 my-4">
            <h1 className="text-2xl">✅ Email signup complete</h1>
            <p>
              Thanks for signing up! We promise to send only very infrequent,
              useful updates, and you can unsubscribe at any time.
            </p>
          </div>
          <p className="text-sm">
            <Link href="/">
              <a>← Go to home</a>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
