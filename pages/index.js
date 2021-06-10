import Head from "next/head";
import { HomeLayout } from "../layout/HomeLayout";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeLayout />
			<h1>Hola Hesagui</h1>
		</div>
	);
}
