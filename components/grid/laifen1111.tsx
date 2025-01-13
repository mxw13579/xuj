import Image from 'next/image';
import laifen from '@/public/images/laifen1111.png';
import Card from '@/components/ui/card';

export default function Laifen1111() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-0'>
            <div className='relative w-full h-full'>
                <Image
                    src={laifen}
                    alt='laifen618'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </Card>
    );
}