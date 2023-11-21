
export default function ContentCont({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
        <div className="w-fit" style={{}}>
            {children}
        </div>
  )
}