

export default function InnerCont({
    children, wid
  }: {
    children: React.ReactNode, wid: number
  }) {

  return (
        <div className=" " style={{maxWidth:wid}} >
            {children}
        </div>
  )
}