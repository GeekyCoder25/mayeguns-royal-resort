'use client';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

const Footer = () => {
	const pathname = usePathname();
	const navigation = useRouter();
	const handleAbout = (e: any) => {
		if (pathname !== '/') {
			e.preventDefault();
			navigation.push('/');
			setTimeout(() => {
				// @ts-ignore
				document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
			}, 300);
		} else {
			e.preventDefault();
			// @ts-ignore
			document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
		}
	};
	const whatsappNo = '+2349043999871';
	return (
		<footer className={styles.footer}>
			<section>
				<section>
					<div className={styles.img}>
						<img src={'/images/logo.svg'} alt={''} />
					</div>
					<div>
						<h3>Quick Links</h3>
						<Link href={'/about'} onClick={e => handleAbout(e)}>
							About us
						</Link>
						<Link href="/why-choose-us">Why choose us</Link>
						<Link href="/gallery">Gallery</Link>
						<Link href="/contact">Contact us</Link>
					</div>
					<div>
						<h3>Legal</h3>
						<Link href="/legal-policies">Legal & Policies</Link>
						{/* <Link href="/terms&conditions">Terms & Conditions </Link> */}
					</div>
					<div>
						<h3>Contact</h3>
						<a href="mailto:Infomayegunsresort@gmail.com">
							Infomayegunsresort@gmail.com
						</a>
						<a href={`https://wa.me/${whatsappNo}`} target="_blank">
							Contact on Whatsapp
						</a>
					</div>
				</section>
				<div>
					<h5>
						&copy; {new Date().getFullYear()} Mayegun Royal Resort. All rights
						reserved.
					</h5>
					<span>
						<a
							href="https://www.instagram.com/mayegunroyalresortltd"
							target="_blank"
						>
							<Image
								width={30}
								height={30}
								src="/images/instagram.svg"
								alt="instagram"
							/>
						</a>
						<a href="/">
							<Image
								width={30}
								height={30}
								src="/images/facebook.svg"
								alt="facebook"
							/>
						</a>
						<a href="/">
							<Image
								width={30}
								height={30}
								src="/images/twitter.svg"
								alt="twitter"
							/>
						</a>
					</span>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
