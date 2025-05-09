import { Link } from "react-router-dom";

export default function NavBar({}) {
    return (
        <div className="sticky top-0 z-50 flex w-full flex-row items-center justify-start gap-8 p-6 backdrop-blur-lg">
            <Link to={"/"}>
                <h1 className="mr-6 font-serif text-2xl font-semibold">
                    Colin Hartigan
                </h1>
            </Link>

            {/* {[
                {
                    title: "career",
                    href: "/career",
                },
                {
                    title: "projects",
                    href: "/projects",
                },
                {
                    title: "resume",
                    href: "/resume",
                },
            ].map((link) => {
                return (
                    <Link to={link.href} key={link.href}>
                        <p>{link.title}</p>
                    </Link>
                );
            })} */}

            {/* <a href="/projects">projects</a>

            <a href="/resume">resume</a> */}
        </div>
    );
}
