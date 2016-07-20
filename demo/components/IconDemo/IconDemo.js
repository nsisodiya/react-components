import {Icon} from "@nsisodiya/react-components";
import React from "react";

export default function () {
  return <span>
    <h2>Icon component with Tooltip</h2>
    <Icon tooltip="This is a Tooptip" icon="plus"/>
    <h2>Icon with Spin</h2>
    <Icon spin icon="plus"/>
  </span>;
}
