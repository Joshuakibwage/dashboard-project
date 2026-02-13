import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button variant="destructive" size="lg" className="rounded-full cursor-pointer hover:translate-y-1 hover:scale-110 transition-all duration-300">
        Hello world
        
      </Button>
    </div>
  )
}

export default page
