import ViberImg from '../assets/image/SocialIcon/Viber.png';
import SkyImg from '../assets/image/SocialIcon/Sky.png';
import ChatImg from '../assets/image/SocialIcon/Chat.png';
import TelegramImg from '../assets/image/SocialIcon/Telegram.png';
import FacebookImg from '../assets/image/SocialIcon/Facebook.png';
import WkImg from '../assets/image/SocialIcon/Wk.png';
import FeedBackImg from '../assets/image/feedback.png';


export function getSocialIcon() {
    return [{
            text: 'Viber',
            img: ViberImg,
            link: '/',
            id: 1
        },
        {
            text: 'Sky',
            img: SkyImg,
            link: '/',
            id: 2
        },
        {
            text: 'Chat',
            img: ChatImg,
            link: '/',
            id: 3
        },
        {
            text: 'Telegram',
            img: TelegramImg,
            link: '/',
            id: 4
        },
        {
            text: 'Facebook',
            img: FacebookImg,
            link: '/',
            id: 5
        },
        {
            text: 'Wk',
            img: WkImg,
            link: '/',
            id: 6
        },
        {
            text:'Написать нам',
            img:FeedBackImg,
            link:'/',
            id:7
        }
    ]
}