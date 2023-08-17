import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import Button from "../components/Base/Button";
import { AiOutlineClose } from "react-icons/ai";

const Contact = () => {
  const [thankfulFeedback, setThankfulFeedback] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    setThankfulFeedback(true);
  };

  const handleClose = () => {
    setThankfulFeedback(false)
  };
  return (
    <>
    <main className=" relative flex sm:flex-row flex-col h-auto sm:h-[90vh] sm:gap-3">
      <section className="sm:w-2/5 h-[260px] sm:h-[90vh] w-full">
        <div
          style={{ backgroundImage: `url(${PizzaLeft})` }}
          className="bg-no-repeat bg-cover bg-center h-full"
        ></div>
      </section>
      <section className="p-10 sm:p-20 flex flex-col flex-grow">
        <h2 className="font-serif">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          action="#"
          className="flex flex-col gap-3 p-7"
        >
          <label htmlFor="name">Full Name</label>
          <input
            className="mb-6 placeholder:italic border-[1px] border-zinc-300 
            w-full rounded-md py-1 px-3 shadow-sm focus:outline-none focus:ring-zinc-400 
            focus:shadow-lg focus:ring-2 focus:ring-offset-1"
            name="name"
            type="text"
            placeholder="Enter full name..."
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="mb-6 placeholder:italic border-[1px] border-zinc-300 w-full 
            rounded-md py-1 px-3 shadow-sm focus:outline-none focus:ring-zinc-400 
            focus:shadow-lg focus:ring-2 focus:ring-offset-1"
            name="email"
            type="email"
            placeholder="Enter email..."
          />

          <label htmlFor="message">Message</label>
          <textarea
            className="mb-6 border-[1px] border-zinc-300 w-full rounded-md py-3 px-4 
            shadow-sm focus:outline-none focus:ring-zinc-400 focus:shadow-lg focus:ring-2 
            focus:ring-offset-1"
            name="message"
            id="1"
            rows="6"
            required
          ></textarea>

          <div className="w-1/2 ">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </section>
      <aside
        className={`absolute top-[-25px] right-0 left-0 mx-auto z-50 max-w-sm h-[10vh] shadow-md shadow-stone-400 transition duration-300  ${
          !thankfulFeedback && "hidden"
        }`}
      >
          <div className="flex justify-between bg-white p-6 rounded-md ">
            <h3>thanks for your Feedback. :)</h3>
            <AiOutlineClose className="cursor-pointer text-zinc-600 rounded-b-md " onClick={handleClose} size={"20px"} />
            
        </div>
      </aside>
    </main>
      </>
  );
};

export default Contact;
