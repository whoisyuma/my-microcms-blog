import { client } from '@/libs/microcms';
import Link from 'next/link';
import ProfilePage from './components/Profile';

// ISR設定
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

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Blog[]> {
  const data = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: {
      limit: 20,
    },
  });
  return data.contents;
}

// updatedAtの表示を変更する
function formatData(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP');
}

// HTMLタグを取り除く
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

// 文字数を制限
function contentLength(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main className='bg-sky-200 pt-20 px-4 min-h-screen'>
      <h1 className='text-2xl font-bold text-gray-800 mt-15 mb-6 border-b-2 border-gray-300 pb-2 max-w-6xl mx-auto'>
        ブログ記事一覧
      </h1>

      <div className='flex flex-col md:flex-row gap-6 max-w-6xl mx-auto'>
        {posts.length !== 0 ? (
          <section className='md:w-4/5 w-full'>
            <div>
              <ul className='space-y-6'>
                {posts.map((post) => (
                  <li key={post.id} className='mb-3 mx-5 rounded flex py-5 border-b border-gray-300'>
                    <div className='md:w-1/3 overflow-hidden w-full rounded md:aspect-video h-48'>
                      <img src={post.eyecatch?.url} alt="サムネイル画像" className='w-full h-full object-cover'/>
                    </div>

                    <div className='md:w-2/3 w-full p-4'>
                      <Link href={`/blog/${post.id}`}>
                        <h2 className='font-semibold text-lg pb-2 text-gray-800 border-b border-gray-300'>
                          {post.title}
                        </h2>
                      </Link>
                      <p className='text-sm text-gray-500 ml-1 mt-2'>{formatData(post.updatedAt)}</p>
                      <p className='mt-3 text-gray-600 text-base ml-1'>{contentLength(stripHtml(post.content), 100)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>) : (
          <p className='md:w-4/5 w-full'>まだ投稿がありません。</p>
        )}

        <aside className='md:w-1/5 w-full'>
          <ProfilePage/>
        </aside>
      </div>
    </main>
  );
}