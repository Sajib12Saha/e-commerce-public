import { cn } from "@/lib/utils"
import Button from "./button"
import { MouseEventHandler } from "react"

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;

}

export const IconButton  = ({onClick,
    className,
    icon
}:Props) => {
    return(
      <Button onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}>

      {icon}
      </Button>
    )
}