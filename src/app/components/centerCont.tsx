
export default function CenterCont({
    children
}:{
    children: React.ReactNode
}) {
    return (
            <div className=" flex justify-center content-center" style={{}}>
                {children}
            </div>
    )
  }