/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import '../styles/globals.css';
import Button from './Button';
import {useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';

interface Metadata {
	metadata: {
		title: string;
		description: string;
	};
}
const whiteBgNav = [
	'/contact',
	'/become-a-member',
	'/privacy-policy',
	'/legal-policies',
	'/subscribe',
	'/congrats',
	'/terms&conditions',
];
const navLinks = [
	{url: '/', text: 'Home'},
	{url: '/about', text: 'About Us', hash: true},
	{url: '/why-choose-us', text: 'Why Choose Us'},
	{url: '/gallery', text: 'Gallery'},
	{url: '/contact', text: 'Contact'},
];
const Navbar = ({metadata}: Metadata) => {
	const [showSideBar, setShowSideBar] = useState(false);
	const pathname = usePathname();
	const navigation = useRouter();
	useEffect(() => {
		setShowSideBar(false);
	}, [pathname]);
	const handleSidebar = () => {
		setShowSideBar(prev => !prev);
	};
	const handleAbout = (e: any) => {
		if (pathname !== '/') {
			e.preventDefault();
			navigation.push('/');
			setTimeout(() => {
				// @ts-ignore
				document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
			}, 500);
		} else {
			e.preventDefault();
			// @ts-ignore
			document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
			setShowSideBar(false);
		}
	};
	return (
		<header
			className={`${whiteBgNav.includes(pathname) ? 'navBg' : undefined}`}
		>
			<nav className="max-page-width nav">
				<Link href={'/'}>
					<img src={'/images/logo.svg'} alt={metadata.title} />
				</Link>
				<span
					className={`navlinks ${showSideBar ? 'navlinksShown' : undefined}`}
				>
					<i className="fas fa-xmark xmarkIcon" onClick={handleSidebar}></i>
					<ul>
						{navLinks.map(link =>
							link.hash ? (
								<li key={link.text}>
									<Link href={'/about'} onClick={e => handleAbout(e)}>
										About
									</Link>
								</li>
							) : (
								<NavLink link={link} key={link.text} />
							)
						)}
					</ul>
					<Button
						type="submit"
						title="Become a member"
						width={250}
						onClick={() => navigation.push('/become-a-member')}
					/>
				</span>
				<i className="fas fa-bars barIcon" onClick={handleSidebar}></i>
			</nav>
			{showSideBar && <div className="overlay" onClick={handleSidebar}></div>}
		</header>
	);
};

export default Navbar;

export const NavLink = ({link}: any) => {
	const pathname = usePathname();
	return (
		<li>
			<Link
				href={link.url}
				className={link.url === pathname ? 'active' : undefined}
			>
				{link.text}
			</Link>
		</li>
	);
};
