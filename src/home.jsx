import React from 'react'
import Nav from './nav'
import Plan from './page2'
import Addons from './page3'
import Summary from './page4'
import Personal from './page1'
import { useGlobal } from './context'
function Home() {
    const{page1,page2,page3,page4} = useGlobal()
  return (
    <div className="cont py-6 sm:px-4 shadow-xl px-6 gap-[50px]  ">
      <Nav />
      <div className="w-[100%]  box h-[100%] ">
        {page1 && <Personal />}
        {page2 && <Plan />}
        {page3 && <Addons />}
        {page4 && <Summary />}
      </div>
    </div>
  );
}

export default Home
