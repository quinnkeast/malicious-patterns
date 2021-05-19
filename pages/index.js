import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manipulative Patterns</title>
        <meta
          name="description"
          content="It’s time to change the conversation around dark patterns. It’s time to call them what they are. Manipulative patterns."
        />
        <html lang="en-US" />
        <script
          src="https://cdn.usefathom.com/script.js"
          site={process.env.FATHOM}
          defer
        ></script>
      </Head>

      <main>
        <div className="container max-w-screen-md mx-auto mt-16 md:mt-32 mb-12 px-4">
          <p>It’s time to change the conversation around dark patterns.</p>
          <p>It’s time to call them what they are.</p>
          <h1 className="text-3xl md:text-8xl text-red-600 font-serif my-8 md:my-16 leading-none font-semibold lg:-ml-24">
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
          <blockquote className="my-12 pl-6 border-l-2 border-gray-100 border-solid">
            <p className="text-2xl font-serif">
              <strong>Manipulative patterns</strong> are deceptive practices in
              products, apps, and services designed to influence user behaviour
              or agency for the benefit of the manipulator.
            </p>
          </blockquote>
          <p>—</p>
        </div>
      </main>

      <footer>
        <div className="container max-w-screen-md mx-auto mb-24 px-4">
          <p className="text-gray-500">
            <small>
              Created by{" "}
              <a href="https://quinnkeast.com" target="_blank">
                Quinn Keast
              </a>{" "}
              at{" "}
              <a href="https://caribou.co" target="_blank">
                Caribou
              </a>
              .
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}
