import React from "react";
import TodoImage from "../assets/img/to-do-list.png";
import {
  NoDataIcon,
  NoDataTitle,
  NoDataContainer,
} from "../assets/styledComponents/Main";
export default function NoDataFound() {
  return (
    <NoDataContainer>
      <NoDataTitle>Start your day by adding your To-Do here!</NoDataTitle>
      <NoDataIcon src={TodoImage} />
    </NoDataContainer>
  );
}
