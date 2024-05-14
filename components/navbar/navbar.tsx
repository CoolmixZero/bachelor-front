"use client"

import Link from "next/link"
import { ModeToggle } from "../theme-switch"
import { useEffect, useState } from "react"
import NavbarMenu from "./NavbarMenu"
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button"
// import SelectModel from "./SelectModel"

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedModel, setModel] = useState("resnet18")
  
  const { isSignedIn } = useAuth();

  useEffect(() => {
    setIsMounted(true)
  }, []);

  

  return (
    <div className="sticky flex z-50 top-0 w-full justify-between items-center py-2 px-12 backdrop-blur bg-background/10 border-b">
      <Link href="/">
        <h2 className="text-xl font-extrabold">Heroeville</h2>
      </Link>
      <NavbarMenu />
      <div className="flex space-x-2">
        {/* <SelectModel 
          selectedModel={selectedModel}
          setModel={setModel}
        /> */}
        <ModeToggle />
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar