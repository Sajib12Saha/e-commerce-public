'use client'

import { ShoppingBag } from "lucide-react"

import { useEffect, useState } from "react";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

 export const NavbarAction = () => {

    const [isMounted, setMounted] = useState(false);

    useEffect(()=> {
        setMounted(true);
    }, []);
    const router = useRouter()
    const cart = useCart()

    if(!isMounted){

        return null;
    }

    return(
        <div className="ml-auto flex items-center gap-x-4">
           <Button className="flex items-center rounded-full bg-black px-4 py-2" onClick={()=> router.push("/cart")}>
            <ShoppingBag size={20} color="white"/>
            <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
            </span>
           </Button>
        </div>
    )
}


