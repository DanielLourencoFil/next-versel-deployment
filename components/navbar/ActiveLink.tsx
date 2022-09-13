import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const activeStyle: CSSProperties = {
	color: "blue",
	textDecoration: "underline",
};

type Props = {
	text: string;
	href: string;
};

function ActiveLink({ text, href }: Props) {
	const { route } = useRouter();

	return (
		<Link href={href}>
			<a style={route === href ? activeStyle : undefined}>{text}</a>
		</Link>
	);
}

export default ActiveLink;
