import React from "react";
import {
  TodoItem,
  TodoIcon,
  IconButton,
  TodoTextWrapper,
} from "../assets/styledComponents/Main";
import DeleteIcon from "../assets/img/delete.png";
import Edit from "../assets/img/editing.png";

export default function Todo() {
  return (
    <TodoItem>
      <TodoTextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium
      </TodoTextWrapper>
      <IconButton type="button">
        <TodoIcon src={Edit} />
      </IconButton>
      <IconButton type="button">
        <TodoIcon src={DeleteIcon} />
      </IconButton>
    </TodoItem>
  );
}
