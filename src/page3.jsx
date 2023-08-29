import React from 'react'
import { useGlobal } from './context';
import { motion } from "framer-motion";
const Single = ({name,lab1,price}) =>{
  const { controller,log,setLog } = useGlobal();
  const [clicked,setClicked] = React.useState(false)
    const addToLog = () => {
      const newLog = {
        name,
        price,
      };
      if (
        !log.some(
          (item) => item.name === newLog.name && item.price === newLog.price
        )
      ) {
        setLog((prevLog) => [...prevLog, newLog]);
      }
    };
    return (
      <div
        onClick={() => {
          setClicked(!clicked);
          addToLog();
          console.log(log);
        }}
        style={{
          border: clicked
            ? "1px solid hsl(213, 96%, 18%)"
            : "1px solid rgba(0, 0, 0, 0.053)",
        }}
        className={`w-[100%] cursor-pointer slot rounded-md items-center flex justify-between sm:py-3 px-2 py-[10px] h-auto  `}
      >
        {/* check mark */}
        <div className="flex gap-2 items-center">
          {!clicked ? (
            <div className="check"></div>
          ) : (
            <div className="check bg-blue-500 flex items-center justify-center border-none ">
              <img src="/images/icon-checkmark.svg" alt="" />
            </div>
          )}
          <div>
            <p
              style={{
                color: "hsl(213, 96%, 18%)",
              }}
              className="font-bold text-[18px] sm:text-[20px] capitalize"
            >
              {name}
            </p>
            <p className="opacity-[0.7] text-[16px] sm:text-[20px] ">{lab1}</p>
          </div>
        </div>
        <div className="text-blue-800 font-[500] ">+${price}/mo</div>
      </div>
    );
}
function Addons() {
    const { controller } = useGlobal();
  return (
    <div className="flex h-full  sm:w-[80%] w-[100%] justify-between flex-col items-start gap-6">
      <div>
        <h1 className="sm:text-[35px] text-[26px] font-bold opacity-80  ">
          Pick add-ons
        </h1>
        <p className="opacity-60 text-[17px] sm:text-[20px] font-[400] ">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      {/* slots */}
      <div className="w-[100%] flex flex-col gap-4 ">
        <Single
          name={"Online service"}
          price={"1"}
          lab1={"Access to multiplayer games"}
        />
        <Single
          name={"Larger storage"}
          price={"2"}
          lab1={"Extra 1TB of cloud save"}
        />
        <Single
          name={"customizable profile"}
          price={"2"}
          lab1={"Custom theme on your profile"}
        />
      </div>

      {/* controlls */}
      <div className="w-[100%] flex justify-between items-center">
        <button
          style={{
            color: "hsl(213, 96%, 18%)",
          }}
          onClick={() => {
            controller(false, true, false, false);
          }}
          className=" w-auto px-6 hover:font-bold font-medium py-2 h-auto  rounded-md  "
        >
          Go Back
        </button>
        <button
          onClick={() => {
            controller(false, false, false, true);
          }}
          style={{
            backgroundColor: "hsl(213, 96%, 18%)",
          }}
          className=" w-auto px-6 py-2 h-auto text-white rounded-md  "
        >
          Next Step
        </button>
      </div>
    </div>
  );

}

export default Addons
