import { useState, forwardRef, ForwardedRef } from "react";

const ContactMe = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div ref={ref} className="bg-white text-black w-full flex justify-center py-32 px-6">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="text-6xl md:text-7xl font-bold text-black mb-8 text-center tracking-tight">
          Let's Connect
        </div>
        <p className="text-xl md:text-2xl text-gray-700 text-center mb-16 max-w-2xl font-light">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
        
        <form 
          className="flex flex-col w-full max-w-lg space-y-6"
          action="https://formspree.io/f/mjkgoyzj"
          method="POST"
        >
          <div>
            <input
              id="name"
              name="name"
              aria-label="name"
              value={name}
              type="text"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          
          <div>
            <input
              id="email"
              name="email"
              aria-label="email"
              value={email}
              type="email"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          
          <div>
            <textarea
              id="message"
              name="message"
              aria-label="message"
              value={message}
              rows={6}
              placeholder="Your Message"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </div>
          
          <button 
            className="w-full bg-black text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform flex items-center justify-center" 
            type="submit"
          >
            <i className="fa-solid fa-paper-plane mr-3"></i>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
});

export default ContactMe;
