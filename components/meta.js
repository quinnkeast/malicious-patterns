import Head from "next/head";

export default function Meta() {
  return (
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
  );
}
