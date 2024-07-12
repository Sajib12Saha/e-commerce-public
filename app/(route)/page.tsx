import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { ProductList } from "./product/components/product-list";

export const revalidate = 0;

 const HomePage = async() => {
    const products = await getProducts({isFeature:true})
    const billboard = await getBillboard("599c9e75-61ba-4a67-a564-0ba446ddd217")
    return(
    
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>

       

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">

          <ProductList title={'Featured Products'} items={products}/>
            </div>
            </div>

            </Container>
         
     
    )
}

export default HomePage;