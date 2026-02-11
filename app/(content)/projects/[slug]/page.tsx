import Container from '@/components/container';
import GridLayout from '@/components/grid-layout';
import { CustomMDX } from '@/components/mdx';
import Anchor from '@/components/ui/anchor';
import Card from '@/components/ui/card';
import { lgLayout, smLayout } from '@/config/project-layout';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/lib/mdx';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaArrowRight, FaX } from 'react-icons/fa6';
import laifen from '@/public/images/laifenChristmas.png';


type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () =>
    getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const project = getAllProjects().find((project) => project.slug === slug);
    if (!project) return;

    const { title, description } = project.metadata;

    return {
        title: `${title} — Projects`,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${siteConfig.url}/projects/${project.slug}`,
            authors: 'JosePabloSG',
        },
        github: {
            title,
            description,
        },
        alternates: {
            canonical: `${siteConfig.url}/projects/${project.slug}`,
        },
    };
};

const ProjectPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const project = getAllProjects().find((project) => project.slug === slug);

    if (!project) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.metadata.title,
        description: project.metadata.description,
        author: [
            {
                '@type': 'Person',
                name: 'JosePabloSG',
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <Script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Container className='py-8'>
                <header className='flex items-center justify-center pb-10'>
                    <Anchor
                        className='inline-flex hover:mb-6 hover:scale-125'
                        href='/'>
                        <FaX />
                        <div className='sr-only'>Close</div>
                    </Anchor>
                </header>
                <h1 className='font-poppins text-3xl leading-relaxed'>
                    {project.metadata.title}
                </h1>
            </Container>

            {project.metadata.images && (
                <GridLayout
                    lgLayout={lgLayout}
                    mdLayout={lgLayout}
                    smLayout={smLayout}
                    className='-mt-8 pb-16'>
                    {JSON.parse(project.metadata.images).map(
                        (image: { i: string; url: string }) => (
                            <div key={image.i}>
                                <Card className='relative'>
                                    <Image
                                        src={image.url}
                                        alt={project.metadata.title}
                                        fill
                                        objectFit='cover'
                                        quality={100}
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                </Card>
                            </div>
                        )
                    )}
                </GridLayout>
            )}

            <Container className='py-8'>
                <header className='flex items-center justify-center pb-10'>
                    <Anchor
                        className='inline-flex hover:mb-6 hover:scale-125'
                        href='/'>
                        <FaX />
                        <div className='sr-only'>Close</div>
                    </Anchor>
                </header>
            </Container>
        </>
    );
};

export default ProjectPage;
