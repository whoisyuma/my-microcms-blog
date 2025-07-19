import ProfilePage from "@/app/components/Profile"
import { client } from "@/libs/microcms";
import { notFound } from "next/navigation";
import style from "./BlogDetail.module.css";

// ISRの設定
export const revalidate = 300;

// アイキャッチ画像の型指定
type Eyecatch = {
  url: string;
  height: number;
  width: number;
}

// ブログ記事の型定義
type Blog = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
  eyecatch?: Eyecatch;
};

// Propsの型定義
type PageProps = {
  params: Promise<{id: string}>
};

// 動的ルーティングのSSGのためのパラメーターの取得
export async function generateStaticParams() {
    const data = await client.getList<Blog>({endpoint: 'blogs'})

    return data.contents.map((blog) => ({
        params: {id: blog.id}
    }))
}

// 情報をmicroCSMから取得する
async function getBlogDetail(id: string): Promise<Blog | null> {
    const data = await client.get<Blog>({
        endpoint: 'blogs',
        contentId: id,
    }).catch(() => null)
    return data
}

// updatedAtの表示を変更する
function formatData(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP');
}

export default async function BlogDetail({params}: PageProps) {
    const {id} = await params;
    const data = await getBlogDetail(id)

    if (!data) return notFound();

    return (
        <main className='bg-sky-200 pt-20 px-4 min-h-screen'>
            <div className='flex flex-col md:flex-row gap-6 max-w-6xl mx-auto'>
                <section className='md:w-4/5 w-full mb-10'>
                    <img src={data.eyecatch?.url} alt="サムネイル画像" className="mt-15 rounded-md mb-6 object-cover max-h-96"/>
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">{data.title}</h1>
                    <p className="text-sm ml-1 text-gray-500 mb-10">最終更新日：{formatData(data.updatedAt)}</p>
                    <div className={style['blog-content']} dangerouslySetInnerHTML={{ __html: data.content}} />
                </section>
                
                <aside className='md:w-1/5 w-full'>
                    <ProfilePage/>
                </aside>
            </div>
        </main>
    )
}