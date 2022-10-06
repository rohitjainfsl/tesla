import React, {useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [headerDark, setHeaderDark] = useState(false);

	return (
		<Head className={headerDark ? 'dark' : ''}>
			<Logo>
				<a href=''>
					<img src="images/logo.svg" alt="Logo" />
				</a>
			</Logo>
			<CenterMenu>
				<li><a href="">Model S</a></li>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model X</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panel</a></li>
			</CenterMenu>
			<RightMenu>
				<li><a href="">Shop</a></li>
				<li><a href="">Account</a></li>
				<li><a href="#" onClick={() => setMenuOpen(true)}>Menu</a></li>
			</RightMenu>
			<SideMenu menu={menuOpen}>
				<Cross onClick={()=>setMenuOpen(false)}></Cross>
				<li><a href="">Model S</a></li>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model X</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panel</a></li>
				<li><a href="">Existing Inventory</a></li>
				<li><a href="">Used Inventory</a></li>
				<li><a href="">Trade In</a></li>
				<li><a href="">Test Drive</a></li>
				<li><a href="">Powerwall</a></li>
				<li><a href="">Commercial Energy</a></li>
			</SideMenu>
		</Head>
	)
}

const Head = styled.header`
	position: fixed;
	width: 100%;
	height: 60px;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 3rem;
	padding-right: 3rem;
	z-index:9999;

		ul{
			list-style: none;
			display: flex;

			a{
				text-decoration: none;
				color: #000;
				font-weight: 500;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				margin-left: 0.25rem;
				margin-right: 0.25rem;
			}		
		}


`;

const SideMenu = styled.ul`
	background: #fff;
	position: fixed;
	right: ${props=>props.menu ? 0 : '-300px' };
	top: 0;
	z-index: 9999;
	width: 300px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding-top: 4rem;
	padding-left: 2rem;
	padding-bottom: 2rem;
	transition: all 0.5s ease-in;

		a{
			display: inline-block;
			padding: 0.5rem 0;
		}
`

const Cross = styled(CloseIcon)`
	position: absolute;
	right: 1rem;
	top: 1rem;
	cursor: pointer;
	transition: transform 0.5s !important;
	&:hover{
		transform: rotate(180deg) scale(1.2);
		}
`

const Logo = styled.div``

const CenterMenu = styled.ul`
	@media (max-width: 1000px){
		display: none !important;
	}
`

const RightMenu = styled.ul`
	@media (max-width: 1000px){
		li:first-of-type, li:nth-of-type(2){
			display: none;
		} 
	}
`

export default Header