"use client"

import { useState, useRef } from "react";

import Hover from "./hover";


export default function OuterCont({
    children
  }: {
    children: React.ReactNode
  }) {

    const [posX,setPosX]= useState(0);
    const [posY,setPosY]= useState(0);

    const [scroll,setScroll]=useState(0);
    const [bar,setBar]=useState(0);
    const el=useRef(null);

    function handleScroll(e:any){
      let current=scroll
      if((current+e.deltaY)<0) {setScroll(0); setBar(0);}
      else if((current+e.deltaY)>el.current.clientHeight-window.innerHeight) {setScroll(el.current.clientHeight-window.innerHeight);setBar(1);}
      else {
        setScroll(current+e.deltaY);
        setBar(scroll/(el.current.clientHeight-window.innerHeight))
      }
    }

  return (
        <>
          <div  className=" absolute h-screen w-screen"   onPointerMove={(e)=>{setPosX(e.clientX-20); setPosY(e.clientY-20);console.log(posX,posY);}} >
              <div className=" absolute top-0 right-0 w-2 bg-[--cta-color-1] h-3 rounded-md transition-all" style={{height:`${bar*100}%`, transition:"height cubic-bezier(0.075, 0.82, 0.165, 1) 1s" }}></div>
          </div>
          <div ref={el} className="  w-full flex justify-center" onWheel={(e)=>{handleScroll(e)}} style={{ transform: `translate(0,${-scroll}px)`, transition:"transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s"}}>
            
              {children}
          </div>
          {/* <Hover posx={posX} posy={posY} ></Hover> */}
        </>
  )
}


