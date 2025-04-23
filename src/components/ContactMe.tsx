import { useState, forwardRef, ForwardedRef } from "react";

const ContactMe = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div ref={ref} className="contact-me bg-slate-200 text-slate-600 w-full flex justify-center py-12">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="text-4xl text-black font-bold px-4 text-center">
          Connect with Harrison
        </div>
        <form className="flex flex-col w-96 px-4"
          action="https://formspree.io/f/mjkgoyzj"
          method="POST"
        >
          <input
            id="name"
            name="name"
            aria-label="name"
            value={name}
            type="text"
            className="bg-white rounded-lg px-4 py-2 text-xl mt-8 mb-2"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            id="email"
            name="email"
            aria-label="email"
            value={email}
            type="text"
            className="bg-white rounded-lg px-4 py-2 text-xl my-2"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            id="message"
            name="message"
            aria-label="message"
            value={message}
            rows={5}
            placeholder="message"
            className="bg-white rounded-lg px-4 py-2 text-xl my-2"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button className="bg-black text-white px-4 py-2 rounded-md mt-8 hover:bg-white hover:text-black cursor-pointer" type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
});

export default ContactMe;
