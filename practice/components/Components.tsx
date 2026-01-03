import React from 'react'
import { cn } from '@/lib/utils'

const Components = () => {
  return (
    <div className={
      cn("w-full rounded-2xl min-h-100 bg-neutral-100",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)]",
        "bg-size-[20px_20px]",
        "p-8 flex items-center justify-center"
      )
    }>
    </div>
  )
}

export default Components