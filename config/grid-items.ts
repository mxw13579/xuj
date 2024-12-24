import * as GridComponents from '@/components/grid';

export interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'article', component: GridComponents.Article },
    { i: 'contact', component: GridComponents.Contact },
    { i: 'cv', component: GridComponents.Cv },
    { i: 'description', component: GridComponents.Description },
    { i: 'github', component: GridComponents.Github },
    { i: 'linkedin', component: GridComponents.LinkedIn },
    { i: 'location', component: GridComponents.Location },
    { i: 'project-1', component: GridComponents.FirstProject },
    { i: 'project-2', component: GridComponents.SecondProject },
    { i: 'spotify', component: GridComponents.Spotify },
    { i: 'theme', component: GridComponents.Theme },
];
