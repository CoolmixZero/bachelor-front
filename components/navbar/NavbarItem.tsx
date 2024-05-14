"use client"

interface NavbarItemProps {
  label: string
}

const NabvarItem = ({
  label
} : NavbarItemProps) => {
  return (
    <div
        className="
            hidden
            sm:block
            text-sm
            font-semibold
            border-x-[1px]
            flex-1
            text-center
            
            px-6
            py-2
            rounded-full
            shadow-sm
            shadow-purple-400
            hover:shadow-md
            hover:shadow-purple-600
            transition
            cursor-pointer
        "
      >
        {label}
      </div>
  )
}

export default NabvarItem;