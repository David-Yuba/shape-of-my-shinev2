import Heading from "./heading"

export default function DropDown({
    children
}:{
    children: React.ReactNode
}) {
    return (
        <div className=" bg-[--accent-primary-1] rounded-[1.5rem] mb-1">
            <div className="py-2 px-4">
                <h1 className="text-xl py-2 font-medium">{children}</h1>
                <p>
                    The beginer salsa and bachata workshops need no previous dance knowladge.
                </p>
            </div>
        </div>
    )
  }
  