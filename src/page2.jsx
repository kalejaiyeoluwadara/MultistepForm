import React, { useState } from "react";
import { useGlobal } from "./context";
import { motion } from "framer-motion";

const Card = ({ name, price, img }) => {
  const { log, setLog,plan,setPlan,prize,setPrize } = useGlobal();
  const [clicked, setClicked] = useState(false);
    const addToLog = () => {
    //   const newLog = {
    //     name,
    //     price,
    //   };
    //  if (
    //    !plan.some(
    //      (item) => item.name === newLog.name && item.price === newLog.price
    //    )
    //  ) {
    //    setPlan((prevLog) => [...prevLog, newLog]);
    //  }
    };
    return (
      <div
        onClick={() => {
          setClicked(!clicked);
          // addToLog()
          setPlan(name);
          setPrize(price);
          // console.log(plan);
        }}
        className="flex card h-auto cursor-pointer flex-col"
      >
        <div
          style={{
            backgroundColor: "hsl(231, 100%, 99%)",
          }}
          className={` ${
            clicked ? "select" : "bor"
          } flex flex-col justify-between items-start px-3 py-4  rounded-md h-auto`}
        >
          <div className="flex sm:flex-col items-center gap-4 sm:items-start sm:gap-8">
            <img className="sm:h-[40px] h-[60px]" src={img} alt="" />
            <div>
              <h1
                style={{
                  color: "hsl(213, 96%, 18%)",
                }}
                className="font-[600] capitalize text-[17px]"
              >
                {name}
              </h1>
              <p className="font-[400] opacity-70 text-[17px]">${price}/mo</p>
              <p 
               style={{
                  color: "hsl(213, 96%, 18%)",
                }}
              className="sm:block font-[600]  opacity-80 text-[17px]">2 months free</p>
            </div>
          </div>
        </div>
      </div>
    );
};

function Plan() {
  const { controller,on,setOn } = useGlobal();
  

  return (
    <div className="flex h-full  sm:w-[80%] w-[100%] items-start justify-between flex-col  gap-6">
      <div>
        <h1 className="sm:text-[35px] text-[25px] font-bold opacity-80  ">
          Select your plan
        </h1>
        <p className="opacity-60 text-[18px] font-[400] ">
          You have the option of monthly or yearly billing
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col  sm:flex-row h-auto items-start gap-2 w-full ">
        <Card name={"arcade"} img={"/images/icon-arcade.svg"} price={"9"} />
        <Card
          name={"advanced"}
          img={"/images/icon-advanced.svg"}
          price={"12"}
        />
        <Card name={"pro"} img={"/images/icon-pro.svg"} price={"15"} />
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-200 py-4 gap-2">
        <p
          className="font-bold"
          style={{
            color: !on ? "hsl(213, 96%, 18%)" : "gray",
          }}
        >
          Monthly
        </p>
        <div
          onClick={() => {
            setOn(!on);
          }}
          style={{
            backgroundColor: "hsl(213, 96%, 18%)",
          }}
          className="w-[40px] relative flex items-center px-3 h-[20px] rounded-full"
        >
          <motion.div
            className={`bg-white absolute ${
              on ? "right-1" : "left-1"
            } z-10 h-[15px] w-[15px] rounded-full`}
          ></motion.div>
        </div>
        <p
          style={{
            color: on ? "hsl(213, 96%, 18%)" : "gray",
          }}
          className="font-bold"
        >
          Yearly
        </p>
      </div>

      {/* controls */}
      <div className="w-[100%] flex justify-between items-center">
        <button
          style={{
            color: "hsl(213, 96%, 18%)",
          }}
          onClick={() => {
            controller(true, false, false, false);
          }}
          className="w-auto px-6 hover:font-bold font-medium py-2 h-auto rounded-md"
        >
          Go Back
        </button>
        <button
          onClick={() => {
            controller(false, false, true, false);
          }}
          style={{
            backgroundColor: "hsl(213, 96%, 18%)",
          }}
          className="w-auto px-6 py-2 h-auto text-white rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Plan;
