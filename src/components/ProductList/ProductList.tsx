import Skeleton from "../../pages/Home/Promotion/components/Skeleton/Skeleton";
import ProductBox from "../ProductBox/ProductBox";
import { Product } from "../../types/product.type";

interface ProductListProps {
  productList: Product[];
  isLoading: boolean;
}

export default function ProductList(props: ProductListProps) {
  const { productList, isLoading } = props;

  return (
    <>
      <div className="bg-white rounded-lg">
        <div className="mx-auto pt-1 pb-10 rounded-lg px-4 lg:max-w-10xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-12 gap-4">
            {isLoading && productList.length === 0 ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              productList.map((item) => (
                <ProductBox key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
