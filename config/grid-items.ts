import * as GridComponents from '@/components/grid';
import Spotifyttt from '../components/grid/spotifyttt';

export interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: GridComponents.Description },
    { i: 'spotify', component: GridComponents.Spotify },
    { i: 'theme', component: GridComponents.Theme },
    { i: 'laifen618', component: GridComponents.Laifen618 },
    { i: 'LaifenChristmas', component: GridComponents.LaifenChristmas },
    { i: 'laifen1111', component: GridComponents.laifen1111 },
    { i: 'laifenSe', component: GridComponents.laifenSe },
    { i: 'laifenFittings', component: GridComponents.laifenFittings },
    { i: 'laifenDunhuang', component: GridComponents.laifenDunhuang },
    { i: 'laifenMother', component: GridComponents.laifenMother },
    { i: 'laifenAbs', component: GridComponents.laifenAbs },
    { i: 'article', component: GridComponents.Article },
    { i: 'contact', component: GridComponents.Contact },

    // { i: 'cv', component: GridComponents.Cv },
    // { i: 'github', component: GridComponents.Github },
    // { i: 'linkedin', component: GridComponents.LinkedIn },
    // { i: 'location', component: GridComponents.Location },
    // { i: 'project-1', component: GridComponents.FirstProject },
    // { i: 'project-2', component: GridComponents.SecondProject },
    // { i: 'Spotifyttt', component: GridComponents.Spotifyttt },
];
