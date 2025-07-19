import Link from "next/link"

export default function ProfilePage() {
    return (
        <div className="mt-10 w-full">
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-400 pb-2">プロフィール</h2>
            <div className="flex flex-col justify-center items-center mt-8">
                <div>
                    <img src="/my-icon.png" alt="プロフィール画像" className="w-32 h-32"/>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-700 mt-2">佐藤湧真</h3>
                    <Link href='https://github.com/whoisyuma' target="_blank" rel="noopener noreferrer" className="hover:underline text-sm hover:decoration-gray-500 text-gray-700">whoisyuma</Link>
                    <Link href='mailto:whoisyuma.0913@gmail.com' className="hover:underline hover:decoration-gray-500 text-sm text-gray-700">whoisyuma.0913@gmail.com</Link>
                    <div className="text-gray-700 mt-7 text-sm mb-5">
                        <div className="text-left mb-3">
                            <h3 className="mb-1 font-semibold">自己紹介</h3>
                            <p className="p-1 leading-relaxed">
                                海外での生活経験を通して、多様な価値観に触れながら成長してきました。現在はWebエンジニアを目指して、個人開発を中心に日々学習に取り組んでいます。自分のアイデアを形にすることが好きで、デザインから実装まで一貫して行うのが得意です。
                            </p>
                        </div>
                        <div className="text-left mb-3">
                            <h3 className="mb-1 font-semibold">使う技術</h3>
                            <p className="p-1 leading-relaxed">HTML / CSS (Tailwind CSS) / JavaScript (React, Next.js) / TypeScript / PHP / MySQL</p>
                        </div>
                        <div className="text-left mb-3">
                            <h3 className="mb-1 font-semibold">今やっている事</h3>
                            <p className="px-1 leading-relaxed">Next.jsやTypeScriptを中心に、モダンな技術を使ったWebアプリ開発を進めています。</p>
                            <p className="px-1 pb-1 leading-relaxed">SupabaseやmicroCMSなど新しいスキルにもチャレンジしながら、様々なサービスを制作・改善中です。実装だけでなく、UI設計や情報設計なども含めて、より使いやすいプロダクトを目指しています。</p>
                        </div>
                        <div className="text-left mb-3">
                            <h3 className="mb-1 font-semibold">今後やりたいこと</h3>
                            <p className="p-1 leading-relaxed">より実用的なアプリを作るだけでなく、チーム開発やOSSにも挑戦しながら、技術と経験の幅を広げていきたいです。将来的には海外でWebエンジニアとして働くことを目標にしています。</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}