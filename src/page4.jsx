import React from 'react'

import { useGlobal } from './context';
function Summary() {
    const { controller,log,plan,on,prize } = useGlobal();
     const totalPrice = log.reduce(
       (total, item) => total + parseFloat(item.price.replace("$", "")),
       0
     );
    //  console.log(totalPrice);
 return (
   <div className="flex h-full w-[100%] sm:w-[80%] justify-between flex-col items-start gap-1">
     <div>
       <h1 className="text-[35px] font-bold opacity-80  ">Finishing up</h1>
       <p className="opacity-60 font-[400] ">
         Double check everything looks OK before confirming.
       </p>
     </div>

     {/* table */}
     <div className="bg-gray-200 w-full h-auto gap-2 px-6 py-6 mt-5 rounded-md ">
       {/* row1 */}
       <div className="flex justify-between mb-1 items-center pb-6 bottom">
         <div>
           <p
             className="font-[600] capitalize"
             style={{
               color: "hsl(213, 96%, 18%)",
             }}
           >
             {plan} ({!on ? "Monthly" : "Yearly"})
           </p>
           <p
             onClick={() => {
               controller(false, true, false, false);
             }}
             className="font-[400] hover:underline cursor-pointer text-blue-800 "
           >
             Change
           </p>
         </div>
         <p
           className="font-[500]"
           style={{
             color: "hsl(213, 96%, 18%)",
           }}
         >
           ${prize}/mo
         </p>
       </div>

       {/* row2 */}
       {log.map((d, id) => {
         return (
           <div key={id} className="flex justify-between mb-4 items-center">
             <div>
               <p className="font-[400] opacity-80">{d.name}</p>
             </div>
             <p
               className="font-[400]"
               style={{
                 color: "hsl(213, 96%, 18%)",
               }}
             >
               ${d.price}/mo
             </p>
           </div>
         );
       })}

       {/* row3 */}
       {/* <div className="flex justify-between items-center">
         <div>
           <p className="font-[400] opacity-80">Larger storage</p>
         </div>
         <p
           className="font-[400]"
           style={{
             color: "hsl(213, 96%, 18%)",
           }}
         >
           $2/mo
         </p>
       </div> */}
     </div>
     <div className="flex w-full px-8 justify-between mb-4 items-center">
       <div>
         <p className="font-[500] text-[17px] sm:text-[20px] opacity-80 ">
           Total(per month)
         </p>
       </div>
       <p className="font-[500] text-blue-700 text-[17px] sm:text-[20px] ">
         +${parseFloat(totalPrice) + parseFloat(prize)}/mo
       </p>
     </div>
     {/* controlls */}
     <div className="w-[100%] flex justify-between items-center">
       <button
         style={{
           color: "hsl(213, 96%, 18%)",
         }}
         onClick={() => {
           controller(false, false, true, false);
         }}
         className=" w-auto px-6 hover:font-bold font-medium py-2 h-auto  rounded-md  "
       >
         Go Back
       </button>
       <button
         onClick={() => {
           controller(true, false, false, false);
         }}
         style={{
           backgroundColor: "hsl(213, 96%, 18%)",
         }}
         className=" w-auto px-6 py-2 h-auto text-white rounded-md  "
       >
         Confirm
       </button>
     </div>
   </div>
 );
}

export default Summary
