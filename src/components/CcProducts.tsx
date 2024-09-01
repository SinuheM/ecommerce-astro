import type { CcProductItem } from "../use-cases/contracts/CcProductItem";
import { CcProduct } from "./CcProduct";

export const CcProducts = ({ products }: { products: CcProductItem[] }) => {
  return (
    <div className="mt-10">
      <h1 className="md:text-5xl text-3xl mb-10">Listado de productos a la venta</h1>
      <div className="flex flex-wrap gap-5">
        {products?.map((product: CcProductItem, index: number) => (
					<CcProduct product={product} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
