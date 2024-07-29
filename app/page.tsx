import Image from "next/image";
import PageHeader from "./components/header";
import HomePage from "./mainpage/page";
import Footer from "./components/footer";

export default function Home() {
	return (
		<main>
			<PageHeader />
			<HomePage />
			<Footer/>
		</main>
	);
}
