import { useState } from 'react';
import Slider from 'react-slick';

import eggheadz from "@static/images/projects/eggheadz.png"
import ultimatedivision from '@static/images/projects/ultimatedivision.png';
import ledgerMarket from '@static/images/projects/ledgerMarket.png';

import './index.scss';

class Project {
    constructor(
        public name: string,
        public description: string,
        public preview: string,
        public url: string
    ) { }
}

export const Projects: React.FC = () => {
    const projects = [
        new Project(
            'Ultimate Division',
            `Ultimate Division is a football simulator and card collecting game,
            a joint project by Boosty Labs and Chickenfish games. The game is
            free to play and players can build their squads to compete with each
            other in weekly competitions.`,
            ultimatedivision,
            'https://ultimatedivision.com/'
        ),
        new Project(
            'EGGHEADZ',
            'NFT drop',
            eggheadz,
            'https://eggheadz.io/'
        ),
        new Project(
            'Storefront',
            'NFT drop marketplace',
            ledgerMarket,
            'https://nftfss-dev.vercel.app/'
        ),
    ];
    const settings = {
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <section className="projects">
            <Slider {...settings} className="slider">
                {projects.map((project: Project) =>
                    <div
                        className="projects__item"
                        key={project.name}
                    >
                        <img
                            className={`projects__preview${isFocused ? '-focused' : ''}`}
                            src={project.preview}
                            alt="project preview"
                        />
                        <div
                            className="projects__item__text-area"
                            onMouseEnter={() => setIsFocused(true)}
                            onMouseLeave={() => setIsFocused(false)}
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                className="projects__link"
                                key={project.name}
                            >
                                <h6 className="projects__item__name">{project.name}</h6>
                                <div className="projects__item__description-wrapper">
                                    <p className="projects__item__description">{project.description}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </Slider>
        </section>
    );
};
