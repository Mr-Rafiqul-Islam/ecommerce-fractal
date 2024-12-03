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
    const [maxPricePreview, setMaxPricePreview] = useState(minPrice);
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 my-4">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label htmlFor="minPrice" className='block text-sm font-medium text-gray-900'>
                        Min Price
                    </label>
                    <input type="range" name="minPrice" id="minPrice" disabled={loading} min={0} max={10000} defaultValue={0} step={10} onMouseUp={(e:React.MouseEvent<HTMLInputElement>) => setMinPrice(parseInt(e.currentTarget.value))} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMinPricePreview(parseInt(e.currentTarget.value))} className=" rounded-lg cursor-pointer h-2 w-full"/>
                </div>
                <div>
                    <label htmlFor="maxPrice" className='block text-sm font-medium text-gray-900'>
                        Max Price
                    </label>
                    <input type="range" name="maxPrice" id="maxPrice" disabled={loading} min={0} max={10000} defaultValue={10000} step={10} onMouseUp={(e:React.MouseEvent<HTMLInputElement>) => setMaxPrice(parseInt(e.currentTarget.value))} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMaxPricePreview(parseInt(e.currentTarget.value))} className=" rounded-lg cursor-pointer h-2 w-full"/>
                </div>
                <div className="flex col-span-2 justify-between items-center space-x-2">
                    <input type="number" readOnly value={minPricePreview} min={0} max={10000} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500' placeholder='Min Price'/>
                    <div className="shrink-0 text-sm font-medium">to</div>
                    <input type="number" readOnly value={maxPricePreview} min={0} max={10000} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500' placeholder='Max Price'/>
                </div>
            </div>
        </div>
    </div>
  )
}
