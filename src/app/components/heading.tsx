

export default function Heading({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
        <div className=" font-semibold text-5xl m-4" style={{}}>
            {children}
        </div>
  )
}