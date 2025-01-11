import avatar from '@/public/images/xuj_avatar.png';
import Image from 'next/image';
import Card from '../ui/card';


export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-25 overflow-hidden rounded-full sm:size-20'>
                <Image
                    src={avatar}
                    alt='JosePabloSG'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='leading-relaxed' >
                <span
                    style={{
                        background: 'linear-gradient(90deg, #FEAC62, #FDE679, #FEB4EE)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}
                >
                调味果子</span>
                    ，我是一位平面设计。就像我的名字一样，尝试给生活中加点儿不同的“味道”。我相信，设计不仅仅是视觉上的享受，它更应该像调味品一般，为人们的生活增添一抹独特的色彩。
            </p>
        </Card>
    );
}
