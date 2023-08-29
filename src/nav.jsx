import React from 'react'
import { useGlobal } from './context';
const Pages = ({num,label1,label2,page}) =>{
    const { page1,page2,page3,page4 } = useGlobal();
    const check = () =>{
        if(page === 'page1' && page1){
            return true
        }
        if (page === "page2" && page2) {
          return true;
        }
        if (page === "page3" && page3) {
          return true;
        }
        if (page === "page4" && page4) {
          return true;
        }
    }
    return (
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center justify-center font-bold id ${
            check() ? "bg-green-200 text-black border-none" : "text-white"
          } rounded-full border border-white `}
        >
          <p>{num}</p>
        </div>
        <div className="text-white uppercase">
          <p className=" font-[100] lab text-[12px]  opacity-[0.9] ">
            {label1}
          </p>
          <p className="font-[500] lab text-[15px]">{label2}</p>
        </div>
      </div>
    );
}

function Nav() {
  return (
    <div className="rounded-md py-8 px-6 nav">
      <div className="flex innerNav gap-5 ">
        <Pages num={1} label1={"step 1"} page={'page1'} label2={"your info"} />
        <Pages num={2} label1={"step 2"} page={'page2'} label2={"select plans"} />
        <Pages num={3} label1={"step 3"} page={'page3'} label2={"add-ons"} />
        <Pages num={4} label1={"step 4"} page={'page4'} label2={"summary"} />
      </div>
    </div>
  );
}

export default Nav
