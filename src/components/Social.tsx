import React from "react";
import { ISocialItem } from "../interfaces/config";
import { LinkList } from "../styles/components";

interface SocialProps {
  items: ISocialItem[];
  primary?: boolean
}

const Social: React.FC<SocialProps> = ({ items, primary = false }) => {
  return (
    <LinkList margin="20px" primary={primary}>
      {items.map((item, i) => (
        <li key={i}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </LinkList>
  );
};

export default Social;
