import { cn } from "@/lib/utils";
import { BrainIcon } from "./icons";

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn("bg-white p-4", className)}>{children}</div>
}

const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn("flex items-center gap-2", className)}>{children}</div>
}

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h2 className={cn("font-medium text-lg tracking-tight", className)}>{children}</h2>
}

const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-base text-neutral-400", className)}>{children}</p>
}

const CardSkeleton = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div
    className={cn("h-40 w-full my-4 bg-gray-100",
      "bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)]",
      "[background-size:10px_10px]",
      "mask-radial-from-50%"
      , className)}>
    {children}
  </div>
}

const Grid = () => {
  return (
    <div className="min-h-screen max-w-5xl py-20 mx-auto border-x border-neutral-200 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-200">
        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLM model selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of triggers,
            tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full rounded-xl"></div>
          </CardSkeleton>
        </Card>

        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of triggers,
            tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full rounded-xl"></div>
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <BrainIcon />
            <CardTitle>Native tools intergration</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of triggers,
            tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full rounded-xl"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  )
}

export default Grid
