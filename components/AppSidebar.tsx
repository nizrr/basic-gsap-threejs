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
      label: 'Pengenalan',
      href: '/',
   },
   {
      label: 'Dasar',
      defaultOpen: false,
      icon: Home,
      collabsible: true,
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
         <SidebarContent className="gap-0">
            {sidebarGroups.map((group, index) =>
               group.collabsible ? (
                  <Collapsible
                     defaultOpen={group.defaultOpen}
                     className="group/collapsible"
                     key={index}>
                     <SidebarGroup>
                        <SidebarGroupLabel asChild>
                           <CollapsibleTrigger className="cursor-pointer">
                              <span className="text-sm">{group.label}</span>
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
               ) : (
                  <SidebarGroup key={index}>
                     <SidebarGroupLabel>
                        <Link href={group.href ?? '#'}>
                           <span className="text-sm">{group.label}</span>
                        </Link>
                     </SidebarGroupLabel>
                  </SidebarGroup>
               )
            )}
         </SidebarContent>
      </Sidebar>
   )
}

export default AppSidebar
