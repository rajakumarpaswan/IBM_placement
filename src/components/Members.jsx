// import React from 'react'

import { Button,Input,Table } from "@mantine/core"
import Main from "./Main"
import { IconChevronRight, IconFilter,IconLink,IconSearch, IconTrash,IconCaretUpDownFilled } from "@tabler/icons-react"

const elements = [
    {  name: 'Raja kumar paswan' ,auth :"goggle",role:"org admin", date_joined:"04 sep 2024" ,email:"rajakumar@gmial.com"},
    {  name: 'naresh' ,auth :"goggle",role:"org admin", date_joined:"04 sep 2024",email:"rajakumar@gmial.com"},
    {  name: 'asritha' ,auth :"goggle",role:"org admin", date_joined:"04 sep 2024",email:"rajakumar@gmial.com"},
    {  name: 'radhika' ,auth :"goggle",role:"org admin", date_joined:"04 sep 2024",email:"rajakumar@gmial.com"},
    {  name: 'nitu' ,auth :"goggle",role:"org admin", date_joined:"04 sep 2024",email:"rajakumar@gmial.com"},

  
   
  ];
function Members() {
    const rows = elements.map((element,index) => (
        <Table.Tr key={index} >
          <Table.Td className=""><p className="font-bold">{element.name}</p><p>{element.email}</p></Table.Td>
          <Table.Td>{element.auth}</Table.Td>
          <Table.Td>{element.role}</Table.Td>
          <Table.Td>{element.date_joined}</Table.Td>
          <Table.Td><IconTrash/></Table.Td>

         

          
        </Table.Tr>
      ));
  return (
    <div className="relative">
        <Main/>
        <div className="absolute left-64 w-4/5">
        <div className="members-section ">
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

{/* search-filter-addbtn section starts */}
          <div className="filter-section w-full mt-10 p-3">
            <div className="filterbtn-searchInput-addbtn w-full flex gap-5 ">
                <div className="">
                    <Button variant="default"><IconFilter/></Button>
                </div>
                <div className="search-section w-4/5  ">
            <Input width={100} className="" radius={"none"} placeholder="search emails, names, authid...."  leftSection={<IconSearch/>} />

                </div>
                <div className="add-members-btn">
                <Button variant="filled" color="cyan">add members</Button>

                </div>
            </div>
          </div>
{/* search-filter-addbtn section ends */}

{/* table -section starts */}
<div className="members-details-section p-3">
    <div className="inviting-section flex justify-between">
        <div className="total-members">
            <span className="flex gap-1 items-center"><p>1 of 1 members</p> | <a className="hover:underline text-blue-400 cursor-pointer">Revoke pending invites</a></span>
        </div>
        <div className="invitinglink">
            <Button className="hover:underline" variant="transparent" leftSection={<IconLink/>}>Copy invite link</Button>
        </div>
        
    </div>
    <div className="members-info-table">
        <Table stickyHeader  withTableBorder stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th className="flex items-center gap-3">Name</Table.Th>
          <Table.Th >Auth </Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th>Date Joined </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody >{rows}</Table.Tbody>
     
    </Table>
        </div>
</div>
{/* table -section ends */}

        </div>
        </div>
    </div>
  )
}

export default Members