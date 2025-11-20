// CodeBlock.jsx atau CodeBlock.tsx
import React, { useEffect, useState, useRef } from 'react'
import Prism from 'prismjs'

// Import dependensi bahasa yang Anda butuhkan
// Untuk contoh ini, saya menyertakan JS, JSX, TS, TSX, dan Bash
import 'prismjs/components/prism-javascript.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-tsx.min'
import 'prismjs/components/prism-bash.min'

// Import komponen shadcn/ui
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Check, Terminal } from 'lucide-react'

/**
 * Komponen CodeBlock dengan Syntax Highlighting (Prism.js) dan Tombol Copy.
 * * @param {string} code - String kode yang akan ditampilkan.
 * @param {string} language - Bahasa kode (misal: 'tsx', 'jsx', 'bash').
 * @param {string} title - Judul yang ditampilkan di header (Opsional).
 */
type CodeBlockProps = {
   code: string
   language: string
   title?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title = 'Code Example' }) => {
   const codeRef = useRef(null)
   const [isCopied, setIsCopied] = useState(false)
   const codeString = code.trim() // Membersihkan spasi di awal/akhir
   // 1. Logika untuk Syntax Highlighting (Prism.js)
   useEffect(() => {
      if (codeRef.current) {
         Prism.highlightElement(codeRef.current)
      }
   }, [code, language]) // Jalankan ulang jika kode atau bahasa berubah

   // 2. Logika untuk Tombol Copy
   const handleCopy = () => {
      navigator.clipboard.writeText(codeString)
      setIsCopied(true)

      // Reset status 'Copied' setelah 2 detik
      setTimeout(() => {
         setIsCopied(false)
      }, 2000)
   }

   return (
      <Card className="w-full shadow-xl overflow-hidden">
         {/* Header dengan Title dan Tombol Copy */}
         <div className="flex items-center justify-between p-3 border-b bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
               <Terminal className="w-4 h-4 mr-2" />
               <span>
                  {title} ({language.toUpperCase()})
               </span>
            </div>
            <Button
               variant="ghost"
               size="sm"
               onClick={handleCopy}
               title={isCopied ? 'Copied!' : 'Copy code'}
               className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800">
               {isCopied ? (
                  <Check className="w-4 h-4 text-green-500" />
               ) : (
                  <Copy className="w-4 h-4" />
               )}
            </Button>
         </div>

         {/* Konten Kode */}
         <CardContent className="p-0 overflow-hidden">
            {/* Struktur Prism.js: <pre> dan <code> dengan kelas language-{language} */}
            {/* Kelas 'p-4' dan 'text-sm' adalah styling default untuk codeblock */}
            <pre className={`language-${language} p-4 text-sm overflow-x-auto`}>
               <code ref={codeRef} className={`language-${language}`}>
                  {codeString}
               </code>
            </pre>
         </CardContent>
      </Card>
   )
}

export default CodeBlock
