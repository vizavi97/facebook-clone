import React from 'react'
import {List} from "@chakra-ui/core";
import {SideBarLink} from "./SideBarLink";
import me from '../../../assets/images/me.jpg'

interface LeftSideBarProps {

}


export const LeftSideBar :React.FC<LeftSideBarProps> = () => {
  return (
  <>
    <List px={2}>
      <SideBarLink imageSrc={me} label={"Fayziev Timur"} to='/404'/>
      <SideBarLink imageSrc={me} label={"COVID-19: Центр информации"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Поиск друзей"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Группы"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Друзья"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Мероприятния"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Сохраненное"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Страницы"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Вакансии"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Игры"} to='/404'/>
      <SideBarLink imageSrc={me} label={"COVID-19: Центр информации"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Поиск друзей"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Группы"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Друзья"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Мероприятния"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Сохраненное"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Страницы"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Вакансии"} to='/404'/>
      <SideBarLink imageSrc={me} label={"Игры"} to='/404'/>
    </List>
  </>
  )
}
