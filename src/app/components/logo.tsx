import Image, { StaticImageData } from "next/image";

export default function Logo({
    logo
  }:{
    logo:StaticImageData
  }) {
  return (
        <div className="flex justify-center content-center h-screen flex-wrap gap-16" style={{}}>
            <Image src={logo} alt="logo"></Image>
            <p className=" align-top italic text-lg font-light ">Dance workshops by David</p>
        </div>
  )
}


