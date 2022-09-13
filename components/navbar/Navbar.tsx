import styles from "./Navbar.module.css";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

type MenuLinks = Links[];
type Links = {
	text: string;
	href: string;
};

const menuLinks: MenuLinks = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "About",
		href: "/about",
	},
	{
		text: "Contact",
		href: "/contact",
	},
];

const Navbar = () => {
	return (
		<nav className={styles["menu-container"]}>
			{menuLinks.map(({ text, href }) => {
				return <ActiveLink key={href} text={text} href={href} />;
			})}
		</nav>
	);
};

export default Navbar;
