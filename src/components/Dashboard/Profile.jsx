// import React from 'react'
// import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { IconLink, IconLogout, IconShare ,IconPencil } from '@tabler/icons-react';

function Profile({opened,close}) {
  return (
    <div className=''>
         <Modal.Root opened={opened} onClose={close} size={'lg'}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title> 
                <div className="flex items-center gap-2">
              <span className="w-20 h-20 rounded-full flex items-center justify-center  bg-gray-300">
                RK
              </span>
              <p className="font-bold">Raja kumar paswan
              <p className='font-light mt-1'>rajakumar@gmail.com</p> </p>
              
            </div>
            <div className="pl-10">
            
            </div>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
           
            <a className='flex gap-3 mt-5 cursor-pointer'><IconLink/>account setting</a>
            <a className='flex gap-3 mt-5 cursor-pointer'><IconPencil/>notification preference</a>
            <a className='flex gap-3 mt-5 cursor-pointer'><IconShare/>share with your friend</a>
            <a className='flex gap-3 mt-5 cursor-pointer'><IconLogout/>Log out</a>
           
            
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      
    </div>
  )
}

export default Profile