import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`
const Vertical = styled.div`
	border-left: solid 2px #000;
	height: 50px;
	margin: 20px 3px;
`

const Date = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	width: 60px;
	height: 73px;
	p {
		font-size: 14px;
		margin: 5px;
		text-align: center;
	}
	h3 {
		font-size: 48px;
		margin: 5px;
		text-align: center;
	}
`
const TitleContainer = styled.div`
	margin: 20px 5px;
	padding: 5px 0px;
`

const Nextday = (day: string, date: number, title: string) => {
	return (
		<Container>
			<Date>
				<p>{day}</p>
				<h3>{date}</h3>
			</Date>
			<Vertical />
			<TitleContainer>{title}</TitleContainer>
		</Container>
	)
}

export default Nextday
