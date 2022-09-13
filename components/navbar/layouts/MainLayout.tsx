import styles from "./MainLayout.module.css";

import Head from "next/head";
import Navbar from "../Navbar";
import DarkLayout from "./DarkLayout";

type Props = {
	children?: React.ReactNode;
	title: string;
	description: string;
};

const MainLayout = ({ children, title, description }: Props) => {
	return (
		<DarkLayout>
			<div className={styles.container}>
				<Head>
					<title>{title}</title>
					<meta name="description" content={description} />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Navbar />

				<main className={styles.main}>{children}</main>
			</div>
		</DarkLayout>
	);
};

export default MainLayout;
