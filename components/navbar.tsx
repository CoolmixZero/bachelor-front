"use client"

import Link from "next/link"
import { ModeToggle } from "./theme-switch"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, []);

  return (
    <div className="sticky flex z-30 top-0 w-full justify-between items-center py-2 px-12 backdrop-blur bg-background/10 border-b">
      <div className="flex space-x-2">
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar