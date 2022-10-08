import React from "react";
import { SocialItem } from "../interfaces/config";
import { LinkList } from "../styles/components";

interface SocialProps {
  items: SocialItem[];
}

const Social: React.FC<SocialProps> = ({ items }) => {
  return (
    <LinkList margin="20px">
      {items.map((item, i) => (
        <li key={i}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </LinkList>
  );
};

export default Social;
