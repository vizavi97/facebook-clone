import React from 'react'
import {Link} from 'react-router-dom'
import {Avatar, ListItem, Text} from "@chakra-ui/core";

interface SideBarLinkProps {
  imageSrc: string,
  label: string,
  to: string,
}


export const SideBarLink :React.FC<SideBarLinkProps> = ({...props}) => {
  return (
  <>
    <ListItem>
      <Link className="left-sidebar-link" to={props.to}>
          <Avatar w={28} h={28}  src={props.imageSrc}/>
          <Text color={"#050505"} paddingLeft={2} fontWeight={600} fontSize={16}>
            {props.label}
          </Text>
      </Link>
    </ListItem>
  </>
  )
}
