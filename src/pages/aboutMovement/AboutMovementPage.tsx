"use client";

import { NavPanel } from "@/src/shared/ui/navpanel/NavPanel";
import AboutMovement from "./section/movement/AboutMovement";
import Mission from "./section/mission/Mission";
import Law from "./section/law/Law";

const AboutMovementPage = () => {
  return (
    <>
      <NavPanel items={[{ label: "О движении", href: "/about-movement" }]} />
      <AboutMovement />
      <Mission />
      <Law />
    </>
  );
};

export default AboutMovementPage;
