import { useState } from "react";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Script from "next/script";

export default function Home() {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <Head>
        <title>Manipulative Patterns</title>
        <meta
          name="description"
          content="It’s time to change the conversation around dark patterns. It’s time to call them what they are: manipulative patterns."
        />
        <html lang="en-US" />
        <Script
          src="https://cdn.usefathom.com/script.js"
          site={process.env.FATHOM}
          defer
        ></Script>
        <link rel="stylesheet" href="https://use.typekit.net/nfr2ruk.css" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👹</text></svg>"
        />
      </Head>

      <main>
        <div className="container mx-auto mb-12 mt-16 max-w-screen-md px-4 md:mt-32">
          <p>It’s time to change the conversation around dark patterns.</p>
          <p>It’s time to call them what they are.</p>
          <h1 className="my-8 font-serif text-3xl font-semibold leading-none text-red-600 md:my-16 md:pr-4 md:text-8xl md:tracking-tight lg:-ml-24">
            Manipulative patterns.
          </h1>
          <p>
            The term <strong>dark patterns</strong> was{" "}
            <a href="https://darkpatterns.org" target="_blank">
              coined by Harry Brignull
            </a>{" "}
            in 2010. It gave us much-needed language classify and talk about the
            techniques used in products and apps to trick users into doing
            things.
          </p>
          <p>
            Today, technology is more capable. It’s deeply intertwined into our
            lives in{" "}
            <a
              href="https://quinnkeast.com/writing/the-possibility-gap-its-time-to-label-this-dark-pattern/"
              target="_blank"
            >
              ways we can’t always predict
            </a>
            . And it often causes <strong>real human harm</strong>, by design.
          </p>
          <p>
            But the term “dark patterns” creates <strong>distance</strong>. It
            obscures the <strong>intent</strong> behind purposeful decisions
            made by real humans, by describing a malicious action as an abstract
            outcome. In turn, it allows companies to deny and downplay agency
            for their decisions.
          </p>
          <p>Language has power.</p>
          <p>
            Let’s start calling them what they are:{" "}
            <strong>manipulative patterns</strong>.
          </p>
          <blockquote className="my-12 border-l-2 border-solid border-gray-100 pl-6">
            <p className="mb-2 text-2xl">
              <strong>Manipulative patterns</strong> are deceptive practices in
              products and services designed to influence user behaviour or
              agency for the benefit of the manipulator.
            </p>
            {copied ? (
              <span className="success">Copied!</span>
            ) : (
              <CopyToClipboard
                text="Manipulative patterns are deceptive practices in products and services designed to influence user behaviour or agency for the benefit of the manipulator."
                onCopy={() => setCopied(true)}
                tabIndex="0"
              >
                <button className="copy">Copy to clipboard</button>
              </CopyToClipboard>
            )}
          </blockquote>
        </div>
      </main>

      <footer>
        <div className="container mx-auto mb-24 max-w-screen-md px-4">
          <p className="text-gray-400">
            <small>
              Created by{" "}
              <a href="https://quinnkeast.com" target="_blank">
                Quinn Keast
              </a>
              .
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}
