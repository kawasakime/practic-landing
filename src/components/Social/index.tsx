import React from "react";
import { SocialItem } from "../../interfaces/config";

import * as C from "../../styles/components";

interface SocialProps {
  items: SocialItem[];
}

const Social: React.FC<SocialProps> = ({ items }) => {
  return (
    <C.Social>
      {items.map((item, i) => (
        <li key={i}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </C.Social>
  );
};

export default Social;
