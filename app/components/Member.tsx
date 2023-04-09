'use client';
import {useEffect, useState} from 'react';
import styles from '../styles/member.module.scss';
import CustomHeader from './CustomHeader';
import {membershipLevel} from '../utils/dataStorage';
import {usePathname, useRouter} from 'next/navigation';
interface MembershipLevelType {
	title: string;
	price: string;
	range: string;
	content: string[];
}

const Member = () => {
	const pathname = usePathname();
	return (
		<section
			className={styles.memberBg}
			style={{background: pathname === '/become-a-member' ? '#fff' : '#f2f7f6'}}
		>
			<section className={styles.member}>
				<CustomHeader
					title={pathname !== '/become-a-member' ? 'Become a Member' : ''}
					content="You can only be our client through membership"
				/>
				<section className={styles.memberCardContainer}>
					{membershipLevel.map((level: MembershipLevelType) => (
						<MembershipLevelCompnent key={level.title} level={level} />
					))}
				</section>
			</section>
		</section>
	);
};

export const MembershipLevelCompnent = ({level}: any) => {
	const [showMore, setShowMore] = useState(false);
	const pathname = usePathname();
	const navigation = useRouter();
	useEffect(() => {
		pathname === '/become-a-member' && setShowMore(true);
	}, [pathname]);
	const handleClick = (e: any) => {
		navigation.push('/subscribe');
		sessionStorage.setItem('levelSelected', e.title);
	};
	return (
		<div>
			<div>
				<h2>₦{level.price}</h2>
				<p>{level.range}</p>
				<ul>
					{level.content
						.slice(0, showMore ? level.content.length : 4)
						.map((item: string) => (
							<li key={item}>{item}</li>
						))}
					{!showMore && (
						<button onClick={() => setShowMore(true)} className={styles.more}>
							{level.content.length > 4 && 'More...'}
						</button>
					)}
				</ul>
			</div>
			<button onClick={() => handleClick(level)}>Subscribe now</button>
		</div>
	);
};
export default Member;
