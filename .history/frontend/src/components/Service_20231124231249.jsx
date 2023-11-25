import OneService from './OneService'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {
  Bars3Icon
} from '@heroicons/react/20/solid'




export default function Service({workerId}) {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7230/Salons/ServicesWithWorkerId/'+workerId)
      .then((res) => res.json())
      .then((result) => {
        setService(result);
        console.log(result)
      });
  }, [])

  return (
    <div className=''>
    {services.map((service) => (
    <div className="lg:flex lg:items-center lg:justify-between w-1/2 mx-auto p-1 border-slate-200 border-b">
      <OneService service={service}/>
      <div className="mt-1 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
    ))}
    </div>
  )
}
