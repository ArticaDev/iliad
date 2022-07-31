import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import TextEditor from "../components/ui/TextEditor";
import Drawer from "react-modern-drawer";
import { DrawerButton } from "../components/ui/DrawerButton";
import "react-modern-drawer/dist/index.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="container mt-10 grid w-full items-center justify-center">
        <TextEditor />
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" customIdSuffix="a">
        <div className="grid h-full grid-flow-row items-center bg-slate-900 text-center">
          <DrawerButton text="Universe" />
          <DrawerButton text="Story" />
          <DrawerButton text="Characters" />
          <DrawerButton text="Locations" />
          <DrawerButton text="Items" />
          <DrawerButton text="Quests" />
          <DrawerButton text="Events" />
          <DrawerButton text="Notes" />
        </div>
      </Drawer>
    </div>
  );
}