import React from 'react'
import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from 'lucide-react'
import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from './ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import Link from 'next/link'

// Menu items.
const sidebarGroups = [
   {
      label: 'Dasar',
      defaultOpen: true,
      icon: Home,
      items: [
         { title: 'GSAP', url: '/gsap' },
         { title: 'Latihan Dasar GSAP', url: '/gsap/latihan' },
         { title: 'Three JS', url: '/three-js' },
      ],
   },
]

const AppSidebar = () => {
   return (
      <Sidebar>
         <SidebarHeader className="font-bold">Learn GSAP & Three JS</SidebarHeader>
         <SidebarContent>
            {sidebarGroups.map((group, index) => (
               <Collapsible defaultOpen={group.defaultOpen} key={index}>
                  <SidebarGroup>
                     <SidebarGroupLabel asChild>
                        <CollapsibleTrigger className="cursor-pointer">
                           <group.icon className="mr-2" />
                           <span className="font-bold ">{group.label}</span>
                           <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                     </SidebarGroupLabel>
                     <CollapsibleContent>
                        <SidebarGroupContent>
                           <SidebarMenu>
                              {group.items.map((item, index) => (
                                 <SidebarMenuItem key={index} className="cursor-pointer">
                                    <Link href={item.url}>
                                       <SidebarMenuButton>
                                          <span className="border-s ps-4">{item.title}</span>
                                       </SidebarMenuButton>
                                    </Link>
                                 </SidebarMenuItem>
                              ))}
                           </SidebarMenu>
                        </SidebarGroupContent>
                     </CollapsibleContent>
                  </SidebarGroup>
               </Collapsible>
            ))}
         </SidebarContent>
      </Sidebar>
   )
}

export default AppSidebar
