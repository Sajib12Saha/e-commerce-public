import { create } from "zustand";
import { Product } from "@/type";

type Props = {

    isOpen : boolean;
    data?: Product;
    onOpen: (data:Product) => void;
    onClose: () => void;
}

const usePreviewModel = create<Props>((set)=>({
   isOpen:false,
   data:undefined,
   onOpen:(data:Product)=>set({data, isOpen:true}),
   onClose:() => set({isOpen:false})
}));

export default usePreviewModel;