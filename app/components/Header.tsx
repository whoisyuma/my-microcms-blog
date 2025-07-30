import { client } from "@/libs/microcms";
import Link from "next/link"
import NavLink from "./NavLink";

type Category = {
    id: string;
    name: string;
}

async function getCategories(): Promise<Category[]> {
    const data = await client.getList<Category>({
        endpoint: 'categories',
    })
    return data.contents;
}

export default async function Header() {
    const categories = await getCategories();

    return (
        <header className="bg-white w-full shadow fixed top-0 left-0 z-50">
            <div className="mx-auto max-w-5xl flex justify-between items-center px-5 py-5">
                <div className="text-2xl font-bold text-gray-800">
                    マイブログ
                </div>
                <nav aria-label="グローバルナビゲーション" className="flex space-x-8">
                    <NavLink href="/">
                        Home
                    </NavLink>
                    {categories.map((category) => (
                        <NavLink
                            key={category.id}
                            href={`/categories/${category.id}`}
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}