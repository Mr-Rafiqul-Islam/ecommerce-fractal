'use client'
import Row from '@/components/custom/Row'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import SearchBar from './SearchBar'

export default function IconGroups({openSearchBar, setOpenSearchBar}:{openSearchBar: boolean, setOpenSearchBar:(v: boolean) => void}) {
  return (
    <div>
      <Row className=''>
        <SearchBar openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}/>
        <Button variant='nostyle' size={'icon'} onClick={()=>setOpenSearchBar(!openSearchBar)}>
        <CiSearch size={40} className='hover:text-primary-700'/>
        </Button>
      </Row>
    </div>
  )
}
