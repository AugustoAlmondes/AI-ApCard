import Header from "../../components/Header";
import About from "./About";
import Preview from "./Preview";
import Welcome from "./Welcome";

export default function Home() {
    return (
        <>
            <Header />
            <Welcome />
            <About />
            <Preview />
        </>
    );
}