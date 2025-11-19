'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
const Page = () => {
   useEffect(() => {
      gsap.to('.gsap-to', {
         x: 200,
         duration: 1,
      })
   })
   return (
      <div className="p-4 space-y-3">
         <h1 className="font-bold text-2xl">Dasar GSAP </h1>

         <h2 className="text-xl font-semibold">Konsep Utama</h2>
         <p className="">1. gsap.to()</p>
         <p>Mengubah elemen dari nilai sekarang ke nilai target.</p>
         <div className="border h-[200px] w-full flex items-center p-4">
            <div className="bg-blue-600 size-16 gsap-to"></div>
         </div>
      </div>
   )
}

export default Page
