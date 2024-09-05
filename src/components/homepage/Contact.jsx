// import React from 'react'
// import { tex } from "react-router-dom";
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

function Contact() {
  const form = useForm({
    mode: "uncontrolled",
    name: "register-form",
    initialValues: {
      name: "",
      email: "",
    },

    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Invalid email"),
    },
  });
  return (
    <div>
      <div className="contact-section flex justify-center items-center mt-10  ">
      
        <div className=" border-[1px] w-3/4 p-5 shadow-[0px_4px_4px_0px_#000000] mb-7 bg-[#FFFFFF]">
          <h2>Let’s get in touch!</h2>
          <p>
            Got questions about the reCODE? Our team is here to help. Contact us
            for quick and friendly support.
          </p>

          <div className="contact-form  flex gap-6 mt-7 ">
          <div className="phone-email">
            <p className='mt-4'>+012 345 6789</p>
            <p className='mt-4'>Hello@animaapp.com</p>
            <p className='mt-4'>Connect with us</p>
            <span className='flex mt-4'>
              <a href="">   <IconBrandInstagram /> </a>
              <a href="">    <IconBrandFacebook /></a>
             <a href="">  <IconBrandTwitter /> </a> 
             <a href="">   <IconBrandGithub /></a>
            </span>
          </div>
          <div className="form w-1/3  mt-2">
            <form
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
                key={form.key("name")}
                {...form.getInputProps("name")}
              />

              <TextInput
                withAsterisk
                label="Your email"
                placeholder="your@email.com"
                mt="md"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />

              <Group justify="flex-center" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </div>
       
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Contact;
