import { Background } from '@/app/components/Home/Background';
import { Heading } from '@/app/components/common/Heading';
import { NavLinkWithDelay } from '@/app/components/common/DelayedLink';

import { RouteConfig } from '@/app/routes';

import './index.scss';

export const Home: React.FC = () =>
    <section className="home">
        <Background />
        <Heading message="Hi, I`m Vasyl, Front end developer" />
        <NavLinkWithDelay
            className="home__contact-me"
            to={RouteConfig.Contact.path}
            datatype={'Contact Me'}
        >
        </NavLinkWithDelay>
    </section>;

