// import React from 'react';
import { IconBrandCodesandbox, IconArrowsDiff, IconHome,IconUserSearch,IconWebhook,IconUsersGroup,IconSettingsCog } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const links = [
  { name: "dashboard", icon: <IconHome /> },
  { name: "projects", path:'/projects', icon: <IconUserSearch /> },
  { name: "integrations", icon: <IconWebhook /> },
  { name: "members", icon: <IconUsersGroup /> },
  { name: "setting", icon: <IconSettingsCog /> },
];

function Main() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className="">
      <div className="sidebar w-64 p-3 bg-purple-950">
        <div className="top  w-full flex justify-between items-center text-white">
          <span className="flex items-center">
            <IconBrandCodesandbox size={40} />
            <p className="text-lg font-bold">CodeReviewer</p>
          </span>
          <span>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </span>
        </div>
        <div className="orgainization w-full text-gray-400 text-lg  mt-2">
            <p>organization</p>
          </div>
        <div className="profile-section w-full mt-2">
         
          <div className="profile flex items-center justify-between">
            <div className="flex items-center gap-2">

            <span className="w-10 h-10 rounded-full flex items-center justify-center  bg-gray-300">RK</span>
            <p className="  text-white">2113&003</p>
            </div>
            
            <span className="iconwala text-white">
              <IconArrowsDiff />
            </span>
          </div>
        </div>
        <div className="sidebar-links w-full mt-2">
          {links.map((link, index) => (
            <a  className="flex flex-row items-center capitalize py-2 text-white " key={index} href={link.name}>
              <span className="mr-2 text-gray-400">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="sidebar-bottom mt-52 w-full ">

          ewfbuabeihfsdin
        </div>
      </div>
    </div>
  );
}

export default Main;
