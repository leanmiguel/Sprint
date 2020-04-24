import styled from "styled-components"

export const ProjectContainer = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  vertical-align: top;
  flex-direction: column;
  justify-content: start;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px;
  margin-right: 6.25vw;
  height: fill-available;
  width: 25vw;
  border-radius: 15px;
`
export const UsersContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`
export const UserIcon = styled.div`
  text-align: center;
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`
