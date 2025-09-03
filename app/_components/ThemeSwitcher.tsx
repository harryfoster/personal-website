// app/components/ThemeSwitch.tsx
'use client'
import { SunIcon, MoonIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <QuestionMarkCircleIcon className='text-slate-200 dark:text-slate-800' />
  )

  if (resolvedTheme === 'dark') {
    return <SunIcon className='text-slate-200 dark:text-slate-800' onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <MoonIcon className='text-slate-200 dark:text-slate-800' onClick={() => setTheme('dark')} />
  }

}