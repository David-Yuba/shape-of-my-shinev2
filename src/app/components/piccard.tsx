import Image,{ StaticImageData } from "next/image";


export default function PicCard({
    children,img
  }: {
    children: React.ReactNode, img:StaticImageData
  }) {
  return (
        <div className=" bg-[--accent-primary-1] rounded-[inherit] hover:bg-[--accent-primary-2] transition-colors" style={{}}>
            <Image className=" object-contain rounded-[inherit] shadow-md shadow-[--shadow-color-1]" src={img} alt="The feeling of musics"></Image>
            <p className=" font-normal text-2xl  p-4">{children}</p>
        </div>
  )
}