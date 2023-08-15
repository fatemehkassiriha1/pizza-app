import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Base/Button";
import pizza from "../assets/pizza.jpeg";

const Home = () => {
  return (
    <main
      style={{ backgroundImage: `url(${pizza})` }}
      className="bg-no-repeat bg-cover"
    >
      <div className="h-[90vh] w-full flex py-40 ">
        <div className="mr-auto flex flex-col pl-16 gap-10">
          <h1 className=" font-mono">Fateme's Pizzeria</h1>
          <p className="italic whitespace-nowrap font-semibold text-xl mb-10">
            PIZZA TO FIT ANY TASTE
          </p>
          <Link to="/menu">
            <Button type="button">ORDER NOW</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
