import laifen from '@/public/images/laifenChristmas.png';
import Project from '@/components/project';


export default function LaifenChristmas() {
    // return (
    //     <Card className='flex flex-col justify-center gap-4 p-0'>
    //         <div className='relative w-full h-full'>
    //             <Image
    //                 src={laifen}
    //                 alt='laifenChristmas'
    //                 fill
    //                 sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    //                 placeholder='blur'
    //                 priority
    //                 style={{ objectFit: 'cover' }}
    //             />
    //         </div>
    //     </Card>
    // );
    return <Project projectName="Human Resources Management" projectImage={laifen} backgroundColor="" />;

}
