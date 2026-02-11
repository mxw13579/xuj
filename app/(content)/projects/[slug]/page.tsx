import Container from '@/components/container';
import GridLayout from '@/components/grid-layout';
import Anchor from '@/components/ui/anchor';
import Card from '@/components/ui/card';
import { lgLayout, mdLayout, smLayout } from '@/config/project-layout';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/lib/mdx';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaX } from 'react-icons/fa6';


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

const parseProjectImages = (rawImages: string): { i: string; url: string }[] => {
    try {
        return JSON.parse(rawImages) as { i: string; url: string }[];
    } catch {
        try {
            const quote = String.fromCharCode(34);
            const normalizedImages = rawImages
                .replace(/([{,]\s*)([a-zA-Z0-9_-]+)\s*:/g, `$1${quote}$2${quote}:`)
                .replace(/:\s*'([^']*)'/g, `: ${quote}$1${quote}`);

            return JSON.parse(normalizedImages) as {
                i: string;
                url: string;
            }[];
        } catch {
            return [];
        }
    }
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

    const projectImages = project.metadata.images
        ? parseProjectImages(project.metadata.images)
        : [];

    return (
        <>
            <Script
                id='project-jsonld'
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

            {projectImages.length > 0 && (
                <GridLayout
                    lgLayout={lgLayout}
                    mdLayout={mdLayout}
                    smLayout={smLayout}
                    className='-mt-8 pb-16'>
                    {projectImages.map(
                        (image: { i: string; url: string }) => (
                            <div key={image.i}>
                                <Card className='relative'>
                                    <Image
                                        src={image.url}
                                        alt={project.metadata.title}
                                        fill
                                        objectFit='cover'
                                        quality={85}
                                        sizes='(max-width: 1200px) 100vw, 1200px'
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
