import React from "react"
import { cn } from "@/lib/utils"

const Components = () => {
  return (
    <div
      className={cn(
        "w-full min-h-[400px] rounded-2xl",
        "bg-neutral-100",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "bg-[length:20px_20px]",
        "p-8 flex items-center justify-center",
        "group"
      )}
    >
      <div
        className={cn(
          "relative size-40 rounded-2xl",
          "bg-neutral-100 border border-neutral-200",
          "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
          "bg-[length:10px_10px]",
          "shadow-2xl",
          "perspective-distance transition-colors duration-300",
          "group-hover:bg-neutral-300 group-hover:border-neutral-300"
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60"
          alt="Avatar"
          className={cn(
            "h-full w-full object-cover rounded-2xl",
            "transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
            "will-change-transform",
            "[transform:rotateX(20deg)_rotateY(-20deg)_rotateZ(20deg)_translateZ(20px)]",
            "group-hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_translateZ(0px)]",
            "group-hover:scale-85"
          )}
        />
      </div>
    </div>
  )
}

export default Components
