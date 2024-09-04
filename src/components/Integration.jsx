// import React from 'react'
import { IconChevronRight,IconSearch } from "@tabler/icons-react"
import Main from "./Main"
import { Input } from "@mantine/core"
import IntegrationCards from "./IntegrationCards"
function Integration() {
   

   
  return (
    <div className="relative">
        <Main />
        <div className=" overflow-hidden   absolute left-64  ">
            
            <div className="integration-section ">
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
                <p>Integrations</p>
              </li>
            </ul>
          </nav>
          {/* navbar ends */}

          <div className="all-integration-section p-5 ">
            <div className="search-bar w-52 mt-5 ">
            <Input  placeholder="search integrations" radius={"xl"} leftSection={<IconSearch/>} />
          
            </div>
            <div className="all-integration-elements ">
              <IntegrationCards/>
            </div>
          </div>
            </div>
            
        </div>
    </div>
  )
}

export default Integration