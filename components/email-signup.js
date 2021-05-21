import { useState } from "react";
import classNames from "classnames";

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const buttonClasses = classNames({
    "rounded px-10 py-1 text-lg text-gray-200 hover:bg-blue-700": true,
    "bg-blue-600 cursor-pointer": !submitting,
    "bg-gray-600 cursor-disabled": submitting,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setError("");

    const data = {
      email: email,
      referrer_url: window.location.href,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.BUTTONDOWN,
      },
      body: JSON.stringify(data),
    };

    fetch("https://api.buttondown.email/v1/subscribers", requestOptions)
      .then((response) => {
        setSubmitting(false);
        if (response.status !== 201) {
          setError(
            "Couldn’t subscribe you for updates. You may already be subscribed, or you may need to confirm your email to finish subscribing."
          );
          return err;
        }
        return response.json();
      })
      .then((response) => {
        setSubmitting(false);
        setSubmitted(true);
        setEmail("");
        setError("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {!submitted && (
        <>
          <label htmlFor="bd-email" className="block mb-4">
            Your email address
          </label>
          <div className="flex flex-col md:flex-row">
            <input
              name="email"
              id="bd-email"
              type="email"
              className="rounded mr-2 text-lg px-2 py-1 text-gray-200 bg-transparent border-solid border-2 border-gray-500 w-full focus:border-blue-600 mb-4 md:mb-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={buttonClasses}>
              {submitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          <p className="mt-4 mb-0 text-gray-500 text-sm">
            We won’t share your email with anyone. You can unsubscribe at any
            time.
          </p>
        </>
      )}
      {error && (
        <p className="text-red-400 block py-3 px-4 bg-red-300 text-red-900 text-base rounded leading-snug">
          {error}
        </p>
      )}
      {submitted && (
        <p className="text-green-400 block py-3 px-4 bg-green-300 text-green-900 text-base rounded leading-snug">
          🚀 <strong>All set!</strong> Check your inbox to confirm your
          subscription.
        </p>
      )}
    </form>
  );
}
