"use client"
import React from 'react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Dashboard from '@/components/Dashboard';
export default function Print() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
  return (
    <>
    <Dashboard ref={componentRef}/>
    <button onClick={handlePrint}>Print this out!</button>
    </>
   
  )
}
