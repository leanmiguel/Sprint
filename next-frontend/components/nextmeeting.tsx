import styled from 'styled-components'

const Description = styled.div`font-family: 'Cantarell', sans-serif;`

const Time = styled.div`
	p {
		font-family: 'Cantarell', sans-serif;
	}

	margin-right: 100px;
`

const Enter = styled.button`
	font-family: Rabbid Highway;
	border-radius: 7px;
	background-color: #002fd4;
	color: #ffffff;
	font-size: 24px;
	border: none;
	height: 68px;
	width: 100%;
	align-self: end;
`
const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const nextmeeting = (title: string, desc: string, start: string, duration: string) => {
	return (
		<div>
			<h2>{title}</h2>
			<Description>{desc}</Description>
			<TimeContainer>
				<Time>
					<p>Time</p>
					{start}
				</Time>
				<Time>
					<p>Duration</p>
					{duration}
				</Time>
			</TimeContainer>
			<hr />
			<Enter>Enter Meeting</Enter>
		</div>
	)
}

export default nextmeeting
