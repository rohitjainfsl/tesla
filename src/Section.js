import React from 'react'
import styled from 'styled-components'

function Section(props) {
	return (
		<>
			<Sec bg = {props.background}>
				<Carname>
					<h1>{props.name}</h1>
					<p>{props.para}</p>
				</Carname>
				<CTA>
					<Buttons>
						<Leftbutton href="">{props.leftbtn}</Leftbutton>
						{
							props.rightbtn && <Rightbutton href="">{props.rightbtn}</Rightbutton>
						}
						
					</Buttons>
					{
						props.arrow && <Arrow src="images/down-arrow.svg"></Arrow>
					}
					
				</CTA>
			</Sec>
		</>
	)
}

const Sec = styled.section`
	background: url(images/${props=>props.bg}) no-repeat scroll center / cover;
	height: 100vh;
	position:relative;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:space-between;

`
const Carname = styled.div`
		text-align:center;
		padding-top:5rem;

		h1{
			font-size:3rem;
		}
`;
const CTA = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

`;
const Buttons = styled.div`
	margin-bottom:4rem;
	display:flex;
	@media (max-width:450px){
		flex-direction: column;
		a{
			margin-top: 0.25rem;
			margin-bottom: 0.25rem;
		}
	}
	a{
		width: 250px;
		padding:10px 30px;
		border-radius:30px;
		text-decoration:none;
		text-align: center;
		margin-left:0.25rem;
		margin-right:0.25rem;
	}
`;
const Leftbutton = styled.a`
	background: rgba(23, 26, 32, 0.8);
	color: #fff;
`;
const Rightbutton = styled.a`
	background: #fff;
	color: #000;
`;
const Arrow = styled.img`
	width: 40px;
`;

export default Section