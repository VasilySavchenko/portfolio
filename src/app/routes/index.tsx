import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { Home } from '@/app/views/Home';
import { About } from '@/app/views/About';
import { Projects } from '@/app/views/Projects';
import { Contact } from '@/app/views/Contact';

/**
 * ComponentRoutes holds all needed information to fill up routes config.
 */
export class ComponentRoutes implements RouteObject {
    /** data route config*/
    constructor(
        public path: string,
        public element: React.ReactNode,
        public children?: ComponentRoutes[]
    ) { }
    /** Method for creating child sub-routes path */
    public with(
        child: ComponentRoutes,
    ): string {
        return `${this.path}/${child.path}`;
    }
    /** Call with method for each child */
    public addChildren(children: ComponentRoutes[]): ComponentRoutes {
        this.children = children;

        return this;
    }
}

/** Route config implementation */
export class RouteConfig {

    public static Home = new ComponentRoutes(
        '/',
        <Home />
    );
    public static About = new ComponentRoutes(
        '/about',
        <About />
    );
    public static Projects = new ComponentRoutes(
        '/projects',
        <Projects />
    );
    public static Contact = new ComponentRoutes(
        '/contact-me',
        <Contact />
    );




    /** Routes is an array of logical router components */
    public static routes: ComponentRoutes[] = [
        RouteConfig.Home,
        RouteConfig.About,
        RouteConfig.Projects,
        RouteConfig.Contact,
    ];
}

export const Routes = () => useRoutes(RouteConfig.routes);
