import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    {/* Importante: Cambiar Id para la vinculacion correcta API */}
    const billboard = await getBillboard("667e1df2-746f-4aed-ba18-5ad85564ab58");
    
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Futuros productos" items={products} />
                    </div>
            </div>
        </Container>
    );
}

export default HomePage;