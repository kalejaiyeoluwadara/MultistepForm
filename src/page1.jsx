import React from 'react'

import { useGlobal } from './context'
function Personal() {
    const {
        controller,
      page1,
      setPage1,
      page2,
      setPage2,
      page3,
      setPage3,
      page4,
      setPage4,
    } = useGlobal();
  return (
    <div className="flex sm:h-full h-auto formbox justify-center  w-[100%] flex-col items-start gap-6">
      <div>
        <h1 className="text-[35px] font-bold opacity-80">Personal info</h1>
        <p className="opacity-60 sm:text-[19px] text-[16px] font-[400] ">
          Please provide your name,email-address, and phone number.
        </p>
      </div>
      <div className="flex h-[100%]   flex-col w-full ">
        <form>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Name</label>
            <input
              className="px-2 mb-4"
              type="text"
              placeholder="Vanessa Mint"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email Address</label>
            <input
              className="mb-4 px-2"
              type="email"
              placeholder="vanessamint@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Phone number</label>
            <input
              className="mb-4 px-2"
              type="tel"
              placeholder="+234 8137 5599 76"
              required
            />
          </div>
        </form>
      </div>

      <div className="w-[100%] flex justify-end items-end">
        <input
          type="submit"
          onClick={() => {
            controller(false, true, false, false);
          }}
          style={{
            backgroundColor: "hsl(213, 96%, 18%)",
          }}
          value={"Next Step"}
          className=" w-auto cursor-pointer px-6 py-2 h-auto text-white rounded-md  "
        />
      </div>
    </div>
  );
}

export default Personal
