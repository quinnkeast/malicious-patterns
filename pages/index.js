import { useState } from "react";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Layout from "../components/layout";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="md:mt-16 mb-12">
        <p>It’s time to change the conversation around dark patterns.</p>
        <p>It’s time to call them what they are:</p>
        <h1 className="title text-3xl md:text-8xl md:tracking-tight md:pr-4 font-serif text-red-600 my-8 md:my-16 font-semibold lg:-ml-12">
          Manipulative Patterns.
        </h1>
        <p>
          The term <strong>dark patterns</strong> was{" "}
          <a href="https://darkpatterns.org" target="_blank">
            coined by Harry Brignull
          </a>{" "}
          in 2010. It gave us much-needed language classify and talk about the
          techniques used in products and apps to trick users into doing things.
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
          obscures the <strong>intent</strong> behind purposeful decisions made
          by real humans, by describing a malicious action as an abstract
          outcome. In turn, it allows companies to deny and downplay agency for
          their decisions.
        </p>
        <p>Language has power.</p>
        <p>
          Let’s start calling them what they are:{" "}
          <strong>manipulative patterns</strong>.
        </p>
        <blockquote className="my-12 pl-6 border-l-2 border-gray-100 border-solid">
          <p className="text-2xl mb-2">
            <strong>Manipulative patterns</strong> are deceptive practices in
            products and services designed to influence user behaviour or agency
            for the benefit of the manipulator.
          </p>
          {copied ? (
            <span className="success">Copied!</span>
          ) : (
            <CopyToClipboard
              text="Manipulative patterns are deceptive practices in products and services designed to influence user behaviour or agency for the benefit of the manipulator."
              onCopy={handleCopy}
              tabIndex="0"
            >
              <button className="copy">Copy to clipboard</button>
            </CopyToClipboard>
          )}
        </blockquote>
      </div>
    </Layout>
  );
}
