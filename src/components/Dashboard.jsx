// import React from 'react'

import {
    IconArrowRight,
  IconChevronRight,
  IconCircle,
  IconCircleArrowRight,
  IconLink,
} from "@tabler/icons-react";
import Main from "./Main";
import { Button } from "@mantine/core";

function Dashboard() {
  return (
    <div className="relative">
        <Main />
      <div className="absolute left-64 w-4/5   ">
        
        <div className="rightsection  ">
          {/* navbar section */}
          <nav className="p-3 border-b-[1px]">
            <ul className="flex gap-5  ">
              <li>
                <p>21137003</p>
              </li>
              <li>
                <IconChevronRight />
              </li>
              <li>
                <p>dashboard</p>
              </li>
            </ul>
          </nav>
          {/* navbar ends */}
         
          <div className="border-[1px] m-5 p-3 rounded-lg ">
            <div className="connect-code">
              <h2>Start securing your code</h2>
              <span className="flex">
                <IconCircleArrowRight /> <p>Connect your code</p>
              </span>
              <p>
                Connect Snyk to your code to fix issues and vulnerabilities.
              </p>

              <div>
                <Button variant="filled">choose integration</Button>
              </div>
            </div>
            <div className="scanproject">
              <span className="flex">
                <IconCircle />
                <p>Add and scan your first project</p>
              </span>
              <p>
                Import your code to see how Snyk surfaces issues, problematic
                dependencies, and vulnerabilities.
              </p>
            </div>
          </div>
          <div className="invite border-[1px] m-5 p-3 rounded-lg flex justify-between items-center">
            <div className="invite-members">
                <h2>Invite team members</h2>
                <p>Collaborate on projects and build secure applications together</p>
            </div>
            <div className="button">
                <Button variant="default" leftSection={<IconLink/>}>Copy invite Link</Button>
            </div>
        </div>
        <div className="learn-more border-[1px] m-5 p-3 rounded-lg flex justify-between items-center">
            <div className="use-codereviewer">
                <h2>Use Snyk in the command line</h2>
                <p>Learn how to install our command line tool to scan your code locally</p>
            </div>
            <div className="button">
                <Button variant="default" rightSection={<IconArrowRight/>}>Learn More</Button>
            </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
