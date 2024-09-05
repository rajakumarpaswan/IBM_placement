// import React from 'react'
import { Card,Group,Text,Button } from "@mantine/core"
import { IconWand,IconBrandSlack,IconConfetti, IconArrowRight } from "@tabler/icons-react"

const faeturesInfo =[
    {
        icon :<IconWand stroke={.3}  className="border-[1px] p-2 rounded-2xl bg-[#efa59c] text-[#FF6250] "  size={100}/> ,title :"Automated code analysis" ,about :"Identifies potential issues such as bugs, security vulnerabilities, and code quality problems."
    },
    {
        icon :<IconBrandSlack stroke={.3}   className="border-[1px] p-2 rounded-2xl bg-[#a2efe1] text-[#009379] "  size={100}/> ,title :"Real-time feedback" ,about :"Provides instant feedback on code changes, helping developers identify and fix issues early."
    },
    {
        icon :<IconConfetti stroke={.5}  className="border-[1px] p-2 rounded-2xl bg-[#f9e4b3] text-[#F8D57E]" size={100}/> ,title :"GitHub integration" ,about :"Seamlessly integrates with GitHub repositories for easy access and analysis."
    },
]

function Features() {
  return (
    <div>

        <div className="faetures-section bg-[#F8F9FF] mt-10 p-2">
            <h1 className="flex justify-center items-center text-4xl font-bold" >Features</h1>
            <p className="flex justify-center items-center text-xl font-semibold mt-5" >These are just a few features you’ll get using reCODE’s AI abilities </p>

            <div className="features-cards flex justify-center w-full items-center gap-10">
                {
                    faeturesInfo.map((feature,index)=>{
                        return   <Card key={index} className=" mt-10 w-72 shadow-[0px_4px_4px_0px_#000000] " shadow="sm"  p={"xl"} radius="md" withBorder>
                        <Card.Section  className="   ">
                         <span className="      flex justify-center items-center ">{feature.icon}</span>
                        </Card.Section>
                  
                        <Group justify="space-between" mt="md" mb="xs">
                          <Text fw={500}>{feature.title}</Text>
                        </Group>
                  
                        <Text size="sm" c="dimmed">
                          {feature.about}
                        </Text>
                  
                        <Button rightSection={<IconArrowRight/>} color="blue" fullWidth mt="md" radius="md">
                          learn more 
                        </Button>
                      </Card>
                    })
                }
           
            </div>

        </div>
    </div>
  )
}

export default Features