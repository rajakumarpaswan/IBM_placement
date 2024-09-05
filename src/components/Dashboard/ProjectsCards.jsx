// import React from 'react'
import { Button, Card,Group,Text } from "@mantine/core"
const projectsInfo = [
    {
        title:"Monitor deployed apps",
        description : ["Test apps for vulnerable dependencies" ,"Get notifications about new vulnerabilities"],
        links :"Browse integration"

    },
    {
        title:"Protect your source code",
        description : ["Test apps for vulnerable dependencies","Create pull requests with fixes and patches","Flag fix pull requests that add new vulnerabilities" ,"Get notifications for new vulnerabilities"],
        links :"add projects"
        
    },
    {
        title:"Monitor local projects",
        description : ["Install our CLI tool to monitor local projects for known vulnerabilities:" ,"npm install -g snyk cd ~/projects/my-project/ snyk onitor"],

        links :"Full documentation for Cli"
        
    }
]
function ProjectsCards() {
  return (
    <div className="flex gap-3 m-4">

{
    projectsInfo.map((project,index)=>{
        return    <Card key={index} withBorder className="h-3/5 w-3/5" shadow="sm" radius="md" >
      <Card.Section withBorder inheritPadding >
        <Group justify="space-between">
          <Text fw={500}>{project.title}</Text>
         
        </Group>
      </Card.Section>
     <Card.Section  className="p-6" >
        <Group >
        {
            project.description.map((desc,index)=>{
                return <Text   key={index}><ul>
                    <li className={`list-disc leading-5 `}>{desc}</li></ul></Text>

            })
        }
       </Group>
      </Card.Section>
      <hr />
   <Button>{project.links}</Button>
    
    </Card>
        
    
    })
}


    </div>
  )
}

export default ProjectsCards