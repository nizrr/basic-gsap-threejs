'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function Home() {
   useEffect(() => {
      gsap.from('.title', {
         y: 100,
         opacity: 0,
         duration: 1,
         ease: 'elastic.out(1, 0.5)',
      })
   })
   return (
      <div className="flex justify-center items-center h-screen">
         <h1 className="text-7xl font-bold title">Animate It!</h1>
      </div>
   )
}
