import React from 'react'
import { cn } from '@/lib/utils'

const Components = () => {
  return (
    <div className={
      cn("w-full rounded-2xl min-h-100 bg-neutral-100",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)]",
        "bg-size-[20px_20px]",
        "p-8 flex items-center justify-center group"
      )
    }>
      <div className={cn(
        "size-40 rounded-2xl bg-neutral-100 border border-neutral-200",
        "bg-[radial-gradient(var(--color-neutral-300)_1px,_transparent_1px)]",
        "bg-size-[10px_10px]",
        "shadown-2xl relative perspective-distant"
      )}>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?
          w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
          className={cn(
            "transition-transform duration-500 ease-in-out",
            "h-full w-full object-cover rounded-2xl",
            "transform rotate-x-20 rotate-z-20 -rotate-y-20 translate-z-20",
            "group:hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0"
          )}
        />
      </div>
    </div>
  )
}

export default Components