
export default function CardCont({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
        <div className="flex gap-2 " style={{}}>
            {children}
        </div>
  )
}