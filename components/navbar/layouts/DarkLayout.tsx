import React, { FC } from "react";

type Props = {
	children?: React.ReactNode;
};
const DarkLayout = ({ children }: Props) => {
	// const defaultMode =
	// 	typeof window !== "undefined" ? localStorage.getItem("DarkLayout") : false;

	// const [isDark, setIsDark] = useState (false);

	// const setLocalStorage = () => {
	// 	localStorage.setItem("DarkLayout", !isDark);
	// 	setIsDark(!isDark);
	// };

	// console.log(isDark);
	const isDark: boolean = true;

	return (
		<div>
			<h3 style={{ cursor: "pointer" }}>Dark Layout</h3>
			{children}
		</div>
	);
};

export default DarkLayout;
