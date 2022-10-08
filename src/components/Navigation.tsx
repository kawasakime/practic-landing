import React from "react";
import { config } from "../configs/config";
import { LinkList } from "../styles/components";

const Navigation: React.FC = () => {
  return (
    <LinkList margin="23px">
      {config.navigation.map((item, i) => (
        <li key={i}>
          <a href={`#section-${i+2}`}>{item}</a>
        </li>
      ))}
    </LinkList>
  );
};

export default Navigation;
