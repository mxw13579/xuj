import socials from '@/config/socials';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../ui/card';
import Anchor from '@/components/ui/anchor';
import { formatDate } from '@/lib/utils';

export default function Contacto() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='font-calistoga text-2xl max-md:text-center'>
                期待与你成为朋友
            </h2>
            <p className='leading-relaxed max-md:hidden'>
                很高兴认识你！这是我的邮箱，我期待着与你分享有趣的想法，探讨无穷的可能，共同创造生活独特的色彩！
            </p>
            <p className='line-clamp-3 leading-relaxed max-md:line-clamp-4 max-sm:line-clamp-2 cursor-pointer underline hover:opacity-70'>
                1063235314@qq.com
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <a
                    className='cancel-drag group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 px-4 py-2 outline-none ring-2 ring-gray-200/45 transition-all duration-300 focus-within:outline-none focus-within:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30'
                    href='mailto:suarezgomezjosepablo03@gmail.com'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    点击复制
                </a>
                <div className='inline-flex gap-6'>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className='cancel-drag'
                            aria-label={`Mi ${social.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            {<social.icon size='1.3rem' />}
                        </a>
                    ))}
                </div>
                {/*<div className='inline-flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between'>*/}
                {/*    <Anchor*/}
                {/*        className='cancel-drag px-4 py-2'*/}
                {/*        href={`/posts/${post.slug}`}>*/}
                {/*        <FaArrowRight*/}
                {/*            className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />{' '}*/}
                {/*        Read More*/}
                {/*        <span className='sr-only'>{post.metadata.title}</span>*/}
                {/*    </Anchor>*/}
                {/*    <small className='text-gray-600 dark:text-gray-400'>*/}
                {/*        {formatDate(post.metadata.date)}*/}
                {/*    </small>*/}
                {/*</div>*/}
                    <small className='text-gray-600 dark:text-gray-400'>
                        祝你每天好心情☀️
                    </small>
            </div>
        </Card>
    );
}
