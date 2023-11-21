"use client"
import { FormEvent, MouseEventHandler, useState } from "react";
import Image from "next/image";
import checkMark from "../media/photos/SVG/check_circle_FILL0_wght400_GRAD0_opsz24.svg";

export default function Form() {
    const [checked,setChecked]=useState({
        "FirstName":"",
        "LastName":"",
        "DanceExperience":"",
        "PhoneNumber":"",
        "eMail":"",
        "BeginnerSalsa":false,
        "BeginnerBachata":false,
        "AdvancedSalsa":false,
        "AdvancedBachata":false
    });

    async function onSubmit(){
        let data = new Blob([JSON.stringify(checked,null,2)],{type:"application/json"})
        const response = await fetch("../api",{
            method : "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body : data,
        })
        console.log(data);
    }
    
    return (
            <>
                <div className=" m-2 px-4 py-2 col-span-2 flex">
                    <div className=" pr-4">
                        <label className="text-xl py-2 font-medium" htmlFor="">First name:</label>
                        <input value={checked.FirstName} onChange={(e)=>{setChecked({...checked,FirstName:e.target.value});}} name="FirstName" className="rounded-[1.5rem] mb-2 ml-2 mr-2 shadow-inner shadow-[--accent-primary-1] px-3 w-full" type="text" />
                    </div>
                    <div className=" pl-4">
                        <label className="text-xl py-2 font-medium" htmlFor="">Last name:</label>
                        <input value={checked.LastName} onChange={(e)=>{setChecked({...checked,LastName:e.target.value});}} name="LastName" className="rounded-[1.5rem] mb-2 ml-2 mr-2 shadow-inner shadow-[--accent-primary-1] px-3 w-full" type="text" />
                    </div>
                </div>
                <div className=" m-2 col-span-2 px-4 py-2">
                    <label className="text-xl py-2 font-medium" htmlFor="">Dance experience:</label><br />
                    <input value={checked.DanceExperience} onChange={(e)=>{setChecked({...checked,DanceExperience:e.target.value});}} name="Experience" className="rounded-[1.5rem] mb-2 ml-2 mr-2 shadow-inner shadow-[--accent-primary-1] px-3 w-full" type="text" />
                </div>
                <div className=" m-2 px-4 py-2">
                    <label className="text-xl py-2 font-medium" htmlFor="">Phone number:</label><br /> 
                    <input value={checked.PhoneNumber} onChange={(e)=>{setChecked({...checked,PhoneNumber:e.target.value});}} name="PhoneNumber" className="rounded-[1.5rem] mb-2 ml-2 mr-2 shadow-inner shadow-[--accent-primary-1] px-3 w-full" type="text" />
                </div>
                <div className=" m-2 px-4 py-2">
                    <label className="text-xl py-2 font-medium" htmlFor="">e-Mail:</label><br /> 
                    <input value={checked.eMail} onChange={(e)=>{setChecked({...checked,eMail:e.target.value});}} name="eMail" className="rounded-[1.5rem] mb-2 ml-2 mr-2 shadow-inner shadow-[--accent-primary-1] px-3 w-full" type="text" /><br />
                </div>
                <h5 className=" m-2 text-xl px-4 pt-2 font-medium col-span-2">Choose workshops:</h5>
                <div className=" m-2 text-xl px-4 font-medium col-span-2 flex justify-center">
                    <div className=" grid grid-cols-2 w-3/5 items-center justify-center aspect-square gap-4">
                        <label className="text-xl font-medium" htmlFor="BeginnerSalsa">
                            <div onClick={(e)=>{if(checked.BeginnerSalsa)setChecked({...checked,BeginnerSalsa:false}); else setChecked({...checked,BeginnerSalsa:true});}} className=" bg-[--accent-primary-1] hover:opacity-80 rounded-xl w-full aspect-square flex items-center justify-center">
                                {checked.BeginnerSalsa ? <div className=" object-contain w-full h-full bg-black bg-opacity-30 shadow-inner shadow-[--shadow-color-1] rounded-xl flex justify-center items-center" >
                                    <Image className=" absolute max-h-16 max-w-[4rem] aspect-square " style={{opacity:"70%"}} src={checkMark} alt="checked"></Image>
                                    <h1 className=" opacity-50">Beginner Salsa</h1>
                                </div> : 
                                <h1>Beginner Salsa</h1>}
                            </div>
                        </label>
                        {/* <input name="BeginnerSalsa" id="BeginnerSalsa" type="checkbox" hidden/> */} 

                        <label className="text-xl font-medium" htmlFor="BeginnerBachata">
                            <div onClick={(e)=>{if(checked.BeginnerBachata)setChecked({...checked,BeginnerBachata:false}); else setChecked({...checked,BeginnerBachata:true});}} className=" bg-[--accent-primary-1] hover:opacity-80 rounded-xl w-full aspect-square flex items-center justify-center">
                                {checked.BeginnerBachata ? <div className=" object-contain w-full h-full bg-black bg-opacity-30 shadow-inner shadow-[--shadow-color-1] rounded-xl flex justify-center items-center" >
                                    <Image className=" absolute max-h-16 max-w-[4rem] aspect-square " style={{opacity:"70%"}} src={checkMark} alt="checked"></Image>
                                    <h1 className=" opacity-50">Beginner Bachata</h1>
                                </div> : 
                                <h1>Beginner Bachata</h1>}
                            </div>
                        </label>
                        {/* <input name="BeginnerBachata" id="BeginnerBachata" type="checkbox" hidden />  */}

                        <label  className="text-xl font-medium" htmlFor="AdvancedSalsa">
                            <div onClick={(e)=>{if(checked.AdvancedSalsa)setChecked({...checked,AdvancedSalsa:false}); else setChecked({...checked,AdvancedSalsa:true});}} className=" bg-[--accent-primary-1] hover:opacity-80 rounded-xl w-full aspect-square flex items-center justify-center">
                                {checked.AdvancedSalsa ? <div className=" object-contain w-full h-full bg-black bg-opacity-30 shadow-inner shadow-[--shadow-color-1] rounded-xl flex justify-center items-center" >
                                    <Image className=" absolute max-h-16 max-w-[4rem] aspect-square " style={{opacity:"70%"}} src={checkMark} alt="checked"></Image>
                                    <h1 className=" opacity-50">Advanced Salsa</h1>
                                </div> : 
                                <h1>Advanced Salsa</h1>}
                            </div>
                        </label>
                        {/* <input name="AdvancedSalsa" id="AdvancedSalsa" type="checkbox" hidden />  */}

                        <label className="text-xl font-medium" htmlFor="AdvancedBachata">
                            <div onClick={(e)=>{if(checked.AdvancedBachata)setChecked({...checked,AdvancedBachata:false}); else setChecked({...checked,AdvancedBachata:true});}} className=" bg-[--accent-primary-1] hover:opacity-80 rounded-xl w-full aspect-square flex items-center justify-center">
                                {checked.AdvancedBachata ? <div className=" object-contain w-full h-full bg-black bg-opacity-30 shadow-inner shadow-[--shadow-color-1] rounded-xl flex justify-center items-center" >
                                    <Image className=" absolute max-h-16 max-w-[4rem] aspect-square " style={{opacity:"70%"}} src={checkMark} alt="checked"></Image>
                                    <h1 className=" opacity-50">Advanced Bachata</h1>
                                </div> : 
                                <h1>Advanced Bachata</h1>}
                            </div>
                        </label>
                        {/* <input name="AdvancedBachata" id="AdvancedBachata" type="checkbox" hidden />  */}
                    </div>
                </div>
                <div className=" m-2 col-span-2 px-4 flex justify-center">
                    <button onClick={()=>{onSubmit()}} className="bg-[--accent-secondary-3] p-3 rounded-xl shadow shadow-[--accent-primary-1] mx-4 my-2" type="button">Submit</button>
                </div>
            </>
    )
}