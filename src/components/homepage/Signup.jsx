// import React from 'react'
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Signup() {
    
    const form = useForm({
        mode: 'uncontrolled',
        name: 'register-form',
        initialValues: {
          name: '',
          email: '',
        },
    
        validate: {
          name: isNotEmpty('Name is required'),
          email: isEmail('Invalid email'),
        },
      });
  return (
    <div>
        <div className="signup-section flex justify-center items-center w-full">
       
        
        <form className='w-96 border-2 p-5 mt-44'
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>

      
        </div>
        
    </div>
  )
}

export default Signup