"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav>
			<Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
				Home
			</Link>
			<Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
				About
			</Link>
			<Link href="/books/1" 
				className={pathname.startsWith("/books/1") 
					? "font-bold mr-4" 
					: "text-blue-500 mr-4"
				}
			>
				Book 1
			</Link>
		</nav>
	);
};