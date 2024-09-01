import { Carousel } from 'react-responsive-carousel'
import type { CcProductItem } from '../use-cases/contracts/CcProductItem'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CcDetail = ({ productData }: { productData: CcProductItem }) => {

  if (!productData) return null
  return (
    <div className="flex flex-col relative">
      <h1 className="md:text-5xl text-3xl mb-4 md:block md:absolute top-0 left-[400px] md:ml-6 w-full">{productData.name}</h1>
      <div className="flex flex-col md:flex-row">
        <Carousel showArrows swipeable infiniteLoop autoPlay showStatus={false} className='flex flex-col items-start w-full md:min-w-[400px] max-w-[400px] overflow-visible border border-solid border-slate-200 rounded-xl bg-white'>  
          {productData.image.map((image, index) => (
            <div>
              <img src={image} aria-label="" className='max-w-[400px]' />
            </div>
          ))}
        </Carousel>
        <div className='md:ml-10 ml-5'>
          <ul className='text-gray-800 list-disc ml-4 md:mt-20'>
            <li className='md:text-xl text-lg my-3'>Marca: {productData.brand}</li>
            <li className='md:text-xl text-lg my-3'>Categoría: {productData.category}</li>
            <li className='md:text-xl text-lg my-3'>Stock: {productData.stock}</li>
            <li className='md:text-xl text-lg my-3'>Precio: {' '}
              <span className='line-through text-base'>S/. {productData.initialPrice}</span>
              {' '}
              <span className='text-green-800 text-2xl'>S/. {productData.price}</span>
            </li>
            {productData.detail && <li className='md:text-xl text-lg my-3'>Detalles: {productData.detail}</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CcDetail