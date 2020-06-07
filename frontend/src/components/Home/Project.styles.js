import styled from 'styled-components'

export const ProjectContainer = styled.div`
	display: inline-flex;
	vertical-align: top;
	flex-direction: column;
	justify-content: start;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	box-sizing: border-box;
	padding: 20px;
	margin: 2.5%;
	width: 28%;
	height: 25%;
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
