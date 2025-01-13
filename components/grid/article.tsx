import { getEmailLatestPost } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../ui/card';
import Anchor from '../ui/anchor';

export default function Article() {
    const post = getEmailLatestPost();

    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2
                className='truncate font-calistoga text-2xl'
                title={post.metadata.title}>
                <Link href={`/posts/${post.slug}`} className='cancel-drag'>
                    {post.metadata.title}
                </Link>
            </h2>
            <p className='text-sm line-clamp-4 leading-relaxed max-md:line-clamp-4 max-sm:line-clamp-2'>
                {post.metadata.description}
            </p>
            {/*<p className='line-clamp-3 leading-relaxed max-md:line-clamp-4 max-sm:line-clamp-2'>*/}
            {/*<p className='line-clamp-3 leading-relaxed max-md:line-clamp-4 max-sm:line-clamp-2 cursor-pointer underline hover:opacity-70'>*/}
            {/*    {post.metadata.email}*/}
            {/*</p>*/}
            <div className='inline-flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between'>
                <Anchor
                    className='cancel-drag px-4 py-2'
                    href={`/posts/${post.slug}`}>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />{' '}
                    阅读更多
                    <span className='sr-only'>{post.metadata.title}</span>
                </Anchor>
                <small className='text-gray-600 dark:text-gray-400 '>
                    {formatDate(post.metadata.date)}
                </small>
            </div>
        </Card>
    );
}
