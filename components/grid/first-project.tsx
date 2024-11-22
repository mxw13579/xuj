import projectImage from '@/public/projects/landing-page.png';
import Project from '../project';

export default function FirstProject() {
    return (
        <Project
            projectName='Landing Page'
            projectImage={projectImage}
            backgroundColor=''
        />
    );
}