// import React from 'react';
import {
  IconBrandCodesandbox,
  IconArrowsDiff,
  IconHome,
  IconUserSearch,
  IconWebhook,
  IconUsersGroup,
  IconSettingsCog,
  IconCaretDown,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Profile from "./Profile";

const links = [
  { name: "dashboard", icon: <IconHome /> },
  { name: "projects", path: "/projects", icon: <IconUserSearch /> },
  { name: "integrations", icon: <IconWebhook /> },
  { name: "members", icon: <IconUsersGroup /> },
  { name: "setting", icon: <IconSettingsCog /> },
];

function Main() {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className="">
      <div className="sidebar fixed w-64 p-3   z-20 bg-purple-950">
        <div className="top  w-full flex justify-between items-center text-white">
          <span className="flex items-center">
            <IconBrandCodesandbox size={40} />
            <p className="text-lg font-bold">CodeReviewer</p>
          </span>
          <span>
            <Burger color="#FFFFFF"
              
            />
          </span>
        </div>
        <div className="orgainization w-full text-gray-400 text-lg  mt-2">
          <p>organization</p>
        </div>
        <div className="profile-section w-full mt-2">
          <div className="profile flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-full flex items-center justify-center  bg-gray-300">
                RK
              </span>
              <p className="  text-white">2113&003</p>
            </div>

            <span className="iconwala text-white">
              <IconArrowsDiff />
            </span>
          </div>
        </div>
        <div className="sidebar-links w-full mt-2">
          {links.map((link, index) => (
            <a
              className="flex flex-row items-center capitalize py-2 text-white "
              key={index}
              href={link.name}
            >
              <span className="mr-2 text-gray-400">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="sidebar-bottom mt-52 w-full ">
          <div className="profile flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-300">
                RK
              </span>
              <p className="  text-white">Raja kumar paswan</p>
            </div>

            <span className="iconwala text-white">
              <IconCaretDown onClick={open} />
            </span>

            <Profile opened={opened} close={close}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
