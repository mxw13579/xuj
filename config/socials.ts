import { IconType } from 'react-icons';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

export interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
    {
        name: 'Github',
        url: 'https://github.com/JosePabloSG',
        icon: FaGithub,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/josepablo.sg',
        icon: FaInstagram,
    },
    {
        name: 'Discord',
        url: 'https://discordapp.com/users/797265640335343616',
        icon: FaDiscord,
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/50664251906',
        icon: FaWhatsapp
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/JosePabloSG',
        icon: FaLinkedinIn
    }
];

export default socials;
