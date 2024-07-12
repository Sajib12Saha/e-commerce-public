'use client'

import { PreviewModel } from "@/components/preview-model"
import { useEffect, useState } from "react"

export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true);
    }, [])
    if(!isMounted){
        return null;

    }

    return(
        <>
        <PreviewModel/>
        </>
    )
}