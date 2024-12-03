'use client'
import React,{useState} from 'react'


export default function ProductsFilter({
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    loading,
    setLoading,
    className,
  }: {
    minPrice: number;
    setMinPrice: (v: number) => void;
    maxPrice: number;
    setMaxPrice: (v: number) => void;
    loading: boolean;
    setLoading: (v: boolean) => void;
    className?: string;
  }) {

    const [minPricePreview, setMinPricePreview] = useState(minPrice);
    const [maxPricePreview, setMaxPricePreview] = useState(maxPrice);
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-4">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label htmlFor="minPrice">
                        Min Price
                    </label>
                    <input type="range" name="minPrice" id="minPrice" disabled={loading} min={0} max={maxPrice} defaultValue={minPrice} step={10} onMouseUp={(e:React.MouseEvent<HTMLInputElement>) => setMinPrice(parseInt(e.currentTarget.value))} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMinPricePreview(parseInt(e.currentTarget.value))} className=" rounded-lg cursor-pointer h-2 w-full"/>
                </div>
            </div>
        </div>
    </div>
  )
}
