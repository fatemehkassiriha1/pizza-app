import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";

const About = () => {
  return (
    <main className="flex flex-col justify-center text-center">
      {/* <img
        src={multiplePizzas}
        alt="multiple Pizzas"
        className="w-full h-[80vh]"
      /> */}
      <div style={{backgroundImage:`url(${multiplePizzas})`}} className="h-[55vh] bg-cover bg-no-repeat bg-center"></div>
      <div className="px-20 lg:px-40 py-20 space-y-6">
        <h1 className="font-mono">About</h1>
        <p className="italic line-clamp-[13] lg:line-clamp-6 font-serif">
          Fateme's Pizza has turned out to be prestigious for its tremendous,
          hand-hurled Neapolitan, profound dish and Sicilian-style pizzas, every
          one of which invests some energy in a block-lined hearth stove before
          touching base at your table. A few pies are slathered in Fateme's
          signature sauce made from vine-matured San Marzano tomatoes; others
          are finished with increasingly test fixings, including one that is
          covered underneath Philly steak and peppers. Be that as it may, don’t
          give the name a chance to trick you: Fateme's Pizza really has some
          expertise in something other than pizza. To be sure, it features the
          menu here, yet you can likewise get your hands around plates of mixed
          greens, burgers, wraps, gyros, gourmet courses, and pasta, and the sky
          is the limit from there…
        </p>
      </div>
    </main>
  );
};

export default About;
