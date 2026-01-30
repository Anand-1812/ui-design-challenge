import { cn } from "@/lib/utils"

const Card = () => {
  return (
    <div className={cn(
      "w-[20rem] min-h-[26rem] h-[26rem] rounded-xl",
      "shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
      "p-4 flex flex-col"
    )}>
      <h2 className="font-bold text-[20px]">Card Components</h2>
      <p className="text-neutral-400 mt-2 text-[15px]">A collection of beautiful UI components, let's get on with it.</p>
      <div className="text-bold text-3xl">This is a new div</div>
    </div>
  )
}

export default Card
