import type { CcProductItem } from "../use-cases/contracts/CcProductItem";

export const CcProduct = ({ product, index }: { product: CcProductItem, index: number }) => {
  const image = product?.image[0];
  return (
    <a
      href={`/producto/${index.toString()}`}
      className="flex flex-col lg:bg-primary rounded-xl p-5 lg:w-[300px] border border-solid border-slate-200 w-full hover:border-slate-400 transition-colors bg-white"
    >
        <div className="w-60 m-auto">
          <img src={image} className="mx-auto" loading="lazy" aria-labelledby={`producto_${index}`} /> 
          <h2 className="text-xl font-bold mt-1" id={`producto_${index}`}>
            {product?.name}
          </h2>
          <h3 className="text-lg">
            {product?.brand}
          </h3>
          <p className="text-sm">{`${product.stock} ${product.stock === 1 ? 'disponible' : 'disponibles'}`}</p>
        </div>
    </a>
  );
};
