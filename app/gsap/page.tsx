'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CodeBlock from '@/components/CodeBlocks'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
const Page = () => {
   const animationRef = useRef<gsap.core.Tween | null>(null)
   const tsxCode = `
      useEffect(() => {
         gsap.to('.gsap-to', {
            x: 200,
            duration: 1,
         })
      })
      `.trim()

   useEffect(() => {
      const animation = gsap.to('.gsap-to', {
         x: 200,
         duration: 1,
         paused: true,
      })

      animationRef.current = animation
      gsap.set('.gsap-to', {
         x: 0,
      })
      animationRef.current.play()
      return () => {
         if (animationRef.current) {
            animationRef.current.kill()
         }
      }
   }, [])

   // 5. Fungsi yang dipanggil saat tombol Replay ditekan
   const handleReplay = () => {
      if (animationRef.current) {
         // Restart: Kembali ke detik 0 (awal) dan putar lagi
         animationRef.current.restart()

         // Jika Anda hanya ingin mengulang dari posisi akhir:
         // animationRef.current.reverse(); // putar balik
      }
   }
   return (
      <div className="p-4 space-y-3">
         <h1 className="font-bold text-2xl">Dasar GSAP </h1>

         <h2 className="text-xl font-semibold">Konsep Utama</h2>
         <p className="">1. gsap.to()</p>
         <p>Mengubah elemen dari nilai sekarang ke nilai target.</p>
         {/* Tombol Replay */}
         <Button onClick={handleReplay} className="bg-transparent text-white border border-white">
            <PlayCircle className="w-4 h-4 mr-2" /> Replay Animation
         </Button>
         <div className="border h-[200px] w-full flex items-center p-4">
            <div className="bg-blue-600 size-16 gsap-to"></div>
         </div>
         <CodeBlock code={tsxCode} language="js" title="gsap.to()" />
      </div>
   )
}

export default Page
