import { cn, toKebabCase } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import Anchor from './ui/anchor';
import Card from './ui/card';

// 展示页面
export default function Project({
    //展示名称
    showName,
    projectName,
    projectImage,
    backgroundColor,
}: Readonly<{
    projectName: string;
    showName?: string;
    projectImage: string | StaticImageData;
    backgroundColor: string;
}>) {
    showName = showName ?? projectName;
    return (
        <Card className={cn('group relative', backgroundColor)}>
            <Image
                src={projectImage}
                alt={toKebabCase(projectName)}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover'
                placeholder='blur'
            />
            <div className='absolute bottom-3 left-3'>
                <Anchor
                    className='cancel-drag h-11 gap-2 px-3 transition-all ease-in-out md:size-10 md:justify-end md:px-3 md:group-hover:w-full'
                    href={`/projects/${toKebabCase(projectName)}`}
                    aria-label={projectName}>
                    <span className='whitespace-nowrap text-sm md:translate-x-2 md:opacity-0 md:transition-all md:duration-300 md:ease-in md:group-hover:translate-x-0 md:group-hover:opacity-100'>
                        {showName}
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Anchor>
            </div>
        </Card>
    );
}
