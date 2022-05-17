import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { data } from '../../data/NavbarData';

import logoP from '../../assets/logo-demon.png';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id === '/') {
			scrollTo(id);
		}
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src={logoP} alt="logo" />
						Luna Magica
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((ele, index) => (
							<NavItem key={index}>
								<NavLinks
									to={ele.to}
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									onClick={() => closeMobileMenu(ele.to, ele.id)}
								>
									{ele.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
