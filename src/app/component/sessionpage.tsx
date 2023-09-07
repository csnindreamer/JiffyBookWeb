'use client'
import React, { Fragment, useState } from 'react';
import { Dialog,Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import {FaExclamationTriangle} from 'react-icons/fa'
    const SessionPage = () => {
  let [isOpen, setIsOpen] = useState(true)
  const router = useRouter()
  function closeModal() {
    setIsOpen(false)
    router.push('/')





  }

  function openModal() {
    setIsOpen(true)
  }

  return (

    <div>
   
   <div className="center-container" >
   <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-lightyellow w-full max-w-md transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-xl transition-all">
                  
               
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
      <div className ="flex items-center">
<FaExclamationTriangle className="h-6 w-6 text-red" aria-hidden="true" /> 
<span className="ml-2">Session Expired</span>
                    </div>       
                    
                      </Dialog.Title>
                  <div className="mt-2">



                    <p className="text-sm text-black">
                      Your session has expired.
                      <br/>
                      You will be redirected to the login Page
                    </p>


                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-black hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


   </div>
    
      


    </div>









  )



  }
  export default SessionPage;