'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    activeClassName?: string;
    defaultClassName?: string;
};

export default function NavLink({ href, children, activeClassName = 'font-bold', defaultClassName = 'text-gray-800 border-b-2 border-transparent hover:border-blue-400' }: NavLinkProps) {
    const pathname = usePathname();
    // 現在のパスとリンクのパスを比較して、イコールならtrueを返してisActiveを設定
    const isActive = pathname === href;

    return (
        <Link
        href={href}
        className={`${defaultClassName} ${isActive ? activeClassName : ''} transition duration-100`}
        >
        {children}
        </Link>
    );
}