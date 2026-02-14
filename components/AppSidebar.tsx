"use client";
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarSeparator,
  SidebarGroupAction,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";

import { 
  DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";


// import { useSidebar } from "@/components/ui/sidebar";
import Link from 'next/link';
import Image from 'next/image';

//lucide icons
import { Home, Inbox, Calendar, Search, Settings, User2, ChevronUp, LogOut, Plus, Projector } from "lucide-react";


const items = [
    {
        title: "Home",
        url: "/",
        icon: <Home />,
    },
    {
        title: "Inbox",
        url: "/inbox",
        icon: <Inbox />,
    },
    {
        title: "Calender",
        url: "/calender",
        icon: <Calendar />,
    },
    {
        title: "Search",
        url: "#",
        icon: <Search />,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: <Settings />,
    }

];

const AppSidebar = () => {

  // const {
  //   state,
  //   open,
  //   setOpen,
  //   openMobile,
  //   setOpenMobile,
  //   isMobile,
  //   toggleSidebar,
  // } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/Logo.svg" alt="Logo" width={20} height={20} />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            {
              items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="list-none">
                    <Link href={item.url} >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox"&& 
                  <SidebarMenuBadge variant="destructive">17</SidebarMenuBadge>
                }
                </SidebarMenuItem>
              ))
            }
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
            {/* collapsible */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">New Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/"> <Projector /> See All Projects</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/"> <Plus /> Add Project</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

            {/* sidebar footer */}
      <SidebarFooter>
        <SidebarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> John Doe <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User2 /> Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
