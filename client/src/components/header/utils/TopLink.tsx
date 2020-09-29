import React from 'react'
import {NavLink as Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ListItem} from "@chakra-ui/core";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface TopLinkProps {
  route: string,
  icon: IconProp
}

export const TopLink: React.FC<TopLinkProps> = ({route, icon}) => {


  return (
      <ListItem pos={'relative'} className='top-link' >
        <Link to={route} exact activeStyle={{color: "#1877f2"}}>
              <FontAwesomeIcon icon={icon}/>
          </Link>
      </ListItem>
  )
}
