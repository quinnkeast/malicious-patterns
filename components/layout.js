import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";
import EmailSignup from "../components/email-signup";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="container max-w-screen-md mx-auto px-4">
        <Header />
        <main>{children}</main>
        <EmailSignup />
        <Footer />
      </div>
    </>
  );
}
