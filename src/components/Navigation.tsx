import React from "react";
import { config } from "../configs/config";
import { LinkList } from "../styles/components";

interface NavigationProps {
  margin?: string;
  direction?: string;
  marginBottom?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  direction,
  margin = "23px",
  marginBottom = "0px",
}) => {
  return (
    <LinkList
      className="navigation"
      margin={margin}
      direction={direction}
      marginBottom={marginBottom}
    >
      {config.navigation.map((item, i) => (
        <li key={i}>
          <a href={`#section-${i + 2}`}>{item}</a>
        </li>
      ))}
    </LinkList>
  );
};

export default Navigation;
