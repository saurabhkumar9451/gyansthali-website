// 'use client'

// import { Moon, Sun } from 'lucide-react'
// import { useTheme } from 'next-themes'

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <button
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       className="
//         rounded-full
//         p-2
//         transition
//         hover:bg-slate-700
//       "
//     >
//       {theme === 'dark' ? (
//         <Sun className="h-5 w-5 text-yellow-400" />
//       ) : (
//         <Moon className="h-5 w-5 text-white dark:text-black" />
//       )}
//     </button>
//   )
// }

'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

if (!mounted) {
  return (
    <button className="rounded-full p-2">
      <Moon className="h-5 w-5 text-white" />
    </button>
  )
}
  return (
    <button
      onClick={() => {
        console.log('Theme button clicked')
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className="rounded-full p-2 hover:bg-slate-700"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-white" />
      )}
    </button>
  )
}