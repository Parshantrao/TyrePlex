import React from 'react'
import { Container } from 'react-bootstrap'
import ShopDetails from '../../components/dealersComponent/ShopDetails'
import TyreBrands from '../../components/dealersComponent/TyreBrands'
import Services from '../../components/dealersComponent/Services'
import PaymentMode from '../../components/dealersComponent/PaymentMode'
import QueryComponent from '../../components/queryComponent/QueryComponent'
import SoldTyres from '../../components/dealersComponent/SoldTyres'

function ReferencePage() {
  return (
    <div className='w-full h-full'>

      <Container className='relative p-0'>
        <ShopDetails />
        <TyreBrands />
        <Services />
        <SoldTyres />
        <PaymentMode />
        <QueryComponent />
      </Container>
    </div>
  )
}

export default ReferencePage