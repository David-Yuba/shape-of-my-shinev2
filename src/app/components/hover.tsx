
import Image from "next/image";

export default function Hover({posx,posy}) {

    
    return (
        <div className=" w-10 h-10 rounded-full absolute bg-gradient-radial from-black" style={{left:`${posx}px`, top:`${posy}px`}}>
                
        </div>
    )
}