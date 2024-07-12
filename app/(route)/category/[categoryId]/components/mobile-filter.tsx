'use client'

import Button from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Color, Size } from "@/type";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X} from "lucide-react";
import { useState } from "react";
import { Filter } from "./filter";

type Props = {
    sizes: Size[];
    colors: Color[];
}

export const MobileFilter = ({sizes, colors}:Props ) => {
    const [open , setOpen] = useState(false);
    
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false);

    return (
      <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus size={20}/>
      </Button>
      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>

      {/*backgroud*/}

      <div className="fixed inset-0 bg-black bg-opacity-25"/>
      {/*dialog position*/}

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

          {/*close button */}

          <div className="flex items-center justify-end px-4">

           <IconButton onClick={onClose}  icon={<X size={15} className="text-black"/>}/>
       

          </div>

          {/*render the filter */}
          
          <div className="p-4">
          <Filter valueKey="sizeId" name="Sizes" data={sizes}/>

          <Filter valueKey="colorId" name="Colors" data={colors}/>
          
             </div>

        </DialogPanel>

      </div>

      
      </Dialog>

      </>
    )
}