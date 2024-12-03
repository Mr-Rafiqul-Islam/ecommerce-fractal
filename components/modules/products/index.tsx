'use client'
import Container from '@/components/custom/Container'
import Row from '@/components/custom/Row'
import React, { useState } from 'react'
import ProductsSidebarLeft from './ProductsSidebarLeft'
import ProductsMainContent from './ProductsMainContent'

export default function Products() {
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(10000);
const [loading, setLoading] = useState(false);
  return (
    <section>
        <Container>
            <Row className='gap-12 items-start'>
                {/* filtering sidebar */}
                <ProductsSidebarLeft minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} loading={loading} setLoading={setLoading} className="hidden lg:block"/>
                {/* main content */}
                <ProductsMainContent minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} loading={loading} setLoading={setLoading} className="flex-1 lg:flex flex-col gap-4 justify-start h-full"  />
            </Row>
        </Container>
    </section>
  )
}
