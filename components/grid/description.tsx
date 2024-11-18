import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../ui/card';

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                <Image
                    src={profile}
                    alt='JosePabloSG'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='text-balance leading-relaxed'>
                Hi, I'm{' '}
                <span className='font-calistoga text-xl'>José Pablo</span>, a
                web development student living in Costa Rica. My goal is to
                become a Frontend Developer.{' '}
                <span className='hidden md:inline'>
                    I love Next.js, Tailwind CSS, TypeScript, Astro, NestJS, and C#.
                </span>
            </p>
        </Card>
    );
}
