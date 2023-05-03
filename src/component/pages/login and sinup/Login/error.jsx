import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Navbar from '../../home/navbar/Navbar'
import errorImg from '../../../../../public/false-2061132__340.webp'

const ErrorPage = () => {
  const { error, status } = useRouteError()

  return (
    
    <div className='bg-gray-800'>
        <Navbar />
        <section className='flex items-center h-screen   text-gray-900'>
        
        <div className='container flex flex-col items-center justify-center px-5 mx-auto '>
         <img src={errorImg } alt="" />
            
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-teal-500'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl text-teal-500 font-semibold md:text-3xl mb-8'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-teal-500 text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage;