// import React from 'react'
import {  Button } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { Group,TextInput,PasswordInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';


function Login() {
    // const [opened, {  close }] = useDisclosure(false);
    const form = useForm({
        mode: 'uncontrolled',
        name: 'register-form',
        initialValues: {
          
          email: '',
          password: 'secret',
        },
    
        validate: {
        
          email: isEmail('Invalid email'),
          password: (value, values) =>
            value !== values.password ? 'Passwords did not match' : null,
    
        },
      });

  return (
    <div>
       <div className="login-section w-full flex justify-center mt-44">
        
        <form className='w-96  border-2 p-7 '
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
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

<PasswordInput
          label="Password"
          placeholder="Password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />


      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>

      
      
        </div>
    </div>
  )
}

export default Login