import { Product } from '@/types';
import React from 'react'

export default function ProductTopBar({
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    loading,
    setLoading,
    perpages,
    setPerpages,
    filter,
    setFilter,
    page,
    maxPage,
    products,
  }: {
    minPrice: number;
    setMinPrice: (v: number) => void;
    maxPrice: number;
    setMaxPrice: (v: number) => void;
    loading: boolean;
    setLoading: (v: boolean) => void;
    perpages: number;
    setPerpages: (v: number) => void;
    filter: string;
    setFilter: (v: string) => void;
    page: number;
    maxPage: number;
    products: Product[];
  }) {
  return (
    <div className='lg:flex items-center justify-between w-full '>
        <div className="flex items-center justify-between gap-4 flex-1 w-full">
            
        </div>
    </div>
  )
}
