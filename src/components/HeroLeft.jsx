import React from "react";
import HeroImg from "../img/heroimg.jpg";

const HeroLeft = () => {
  return (
    <main className=" w-3/5 ">
      <header className=" mb-5">
        <img src={HeroImg} alt="" />
      </header>
      <div className=" flex justify-between gap-12 items-center">
        <div className=" text-4xl font-bold">
          {" "}
          The Bright Future of Web 3.0?
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            distinctio quis in, corrupti nulla corporis quo asperiores aperiam
            ipsam placeat exercitationem adipisci omnis reiciendis consequatur
            recusandae aspernatur magnam quos illo!
          </p>
          <button className="mt-5 p-3 bg-yellow-500"> READ MORE</button>
        </div>
      </div>
    </main>
  );
};

export default HeroLeft;
