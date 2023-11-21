export default function VideoDesc({
    children, title
  }: {
    children: React.ReactNode, title: React.ReactNode
  }) {

  return (
        <div className=" p-8 ">
            <h1 className=" font-semibold text-4xl pb-4">{title}</h1>
            <div className=" text-lg flex-col">
              {children}
            </div>
        </div>
  )
}