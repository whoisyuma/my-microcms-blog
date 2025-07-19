import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-white w-full shadow fixed top-0 left-0 z-50">
            <div className="mx-auto max-w-5xl flex justify-between items-center px-5 py-4">
                <div className="text-2xl font-bold text-gray-800">
                    マイブログ
                </div>
                <nav aria-label="グローバルナビゲーション">
                    <Link href="/" className="border-transparent text-gray-800 hover:border-b-2 hover:border-blue-400 py-1 transition duration-100">ホーム</Link>
                </nav>
            </div>
        </header>
    )
}