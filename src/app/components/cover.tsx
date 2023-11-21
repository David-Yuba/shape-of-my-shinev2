"use client"

import Image from "next/image";
import {useState} from "react";
import cover from "../media/photos/cover-art-Recovered.png";

import noise from "../media/photos/SVG/noise.svg"

export default function Cover() {

  const [visible,setVis]=useState(true);
  let [dis,setDis]=useState(true);

  function handlePointerDown(){
    setVis(false);
    setTimeout(()=>{setDis(false)},1000);
  }

  return (
        <div className=" h-screen  w-screen flex items-center justify-center absolute top-0 left-0 
                         cover-bg z-20 fade-out transition-all" 
                         style={{background: `radial-gradient(
                            circle at -100% 100%,
                            var(--shadow-color-1),
                            var(--cta-color-1)
                          ) 10%`, opacity:`${ visible ? "100": "0"}%`, display:`${dis ? "flex": "none"}`}}>
                <Image className=" h-5/6 w-auto drop-shadow-md hover:wiggle" onPointerDown={()=>{handlePointerDown()}}  draggable={false} src={cover} alt="Cover"></Image>
        </div>
  )
}