import React from 'react'
import {
  Button,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/core";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface DropDownProps {
  component: any
  icon: IconProp
}

export const DropDown :React.FC<DropDownProps> = ({component,icon}) => {
  return (
  <>
    <ListItem mx={1}>
      <Popover>
        <PopoverTrigger>
            <Button position={"relative"}  borderRadius={50}>
               <FontAwesomeIcon icon={icon}/>
            </Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverBody right={0}>{component} dasdasdas</PopoverBody>
        </PopoverContent>
      </Popover>
    </ListItem>
  </>
  )
}
