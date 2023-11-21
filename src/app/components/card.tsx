"use client"

import {useState,useRef} from "react";
import {createPortal} from "react-dom";
import Image, { StaticImageData } from "next/image";
import PicCard from "./piccard";


import VideoDesc from "./videodesc";

export default function Card({
    children,vid,im,t
  }: {
    children: React.ReactNode, vid?: string, im?: StaticImageData, t: any
  }) {

  const [foc,setFoc]=useState(false);
  const vidRef=useRef(null);
  
  if(im){
    if(foc){
      return createPortal(
      <div className=" absolute top-0 left-0 w-screen h-screen bg-[black] bg-opacity-60 px-32 py-10" onPointerDown={()=>{setFoc(false)}} onWheel={(e)=>{e.stopPropagation()}}>
        <div className=" h-full w-full flex bg-[--accent-primary-1] rounded-[1.5rem]" style={{}}>
          <div className="min-w-[50%] flex rounded-[inherit] shadow-md shadow-[--shadow-color-1] aspect-square focus:outline-none">
            <Image className=" z-10 object-contain rounded-[inherit] shadow-md shadow-[--shadow-color-1] focus:outline-none" src={im} alt=""></Image>
          </div>
          <VideoDesc title={children}>
            <div className=" py-2">{t.par1}</div>
            <div>{t.par2}</div>
          </VideoDesc>
        </div>
      </div>
      ,document.body)
  }
  return (
    <div onClick={()=>{setFoc(true)}} className=" basis-0 grow shrink bg-[--accent-primary-1] rounded-[1.5rem] hover:bg-[--accent-primary-2] transition-colors" style={{}}>
      <PicCard img={im}>{children}</PicCard>
    </div>
  )
  }
  else{
  if(foc){
      return createPortal(
      <div className=" absolute top-0 left-0 w-screen h-screen bg-[black] bg-opacity-60 px-32 py-10" onPointerDown={()=>{setFoc(false)}} onWheel={(e)=>{e.stopPropagation()}}>
        <div className=" h-full w-full flex bg-[--accent-primary-1] rounded-[1.5rem]" style={{}}>
          <video ref={vidRef} autoPlay onPointerDown={(e)=>{e.stopPropagation(); if(vidRef.current.paused) vidRef.current.play(); else vidRef.current.pause();}} className=" z-10 max-h-[100%] object-contain rounded-[inherit] shadow-md shadow-[--shadow-color-1] focus:outline-none" loop muted  src={vid}></video>
          <VideoDesc title={children}>
            <div className=" py-2">{t.par1}</div>
            <div>{t.par2}</div>
          </VideoDesc>
        </div>
      </div>
      ,document.body)
  }

  

  return (
        <div onPointerEnter={()=>{/* vidRef.current.play() */}} onClick={()=>{setFoc(true)}} onPointerLeave={()=>{vidRef.current.pause()}} className=" basis-0 grow shrink  bg-[--accent-primary-1] rounded-[1.5rem] hover:bg-[--accent-primary-2] transition-colors" style={{}}>
            <video ref={vidRef} className="  rounded-[inherit] shadow-md shadow-[--shadow-color-1] grow shrink focus:outline-none" loop muted  src={vid}></video>
            <p className=" font-normal text-2xl  p-4">{children}</p>
        </div>
  )
  }
}