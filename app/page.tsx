import React from 'react'
// import { Button } from "@/components/ui/button";
import AppBarChart from '@/components/AppBarChart';
import AppAreaChart from '@/components/AppAreaChart';




const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test 2</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test 3</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test 4</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test 6</div>
    </div>
  )
}

export default page
