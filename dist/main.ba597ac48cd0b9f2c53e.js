/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 909:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(711);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/app/static/images/navbar/burger.svg
const burger_namespaceObject = __webpack_require__.p + "images/burger787d9.svg";
;// CONCATENATED MODULE: ./src/app/static/images/navbar/cross.svg
const cross_namespaceObject = __webpack_require__.p + "images/cross31b1e.svg";
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(974);
;// CONCATENATED MODULE: ./src/app/context/loader.tsx


const LoaderContext = (0,react.createContext)({});
const LoaderProvider = ({ children, }) => {
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    return ((0,jsx_runtime.jsx)(LoaderContext.Provider, Object.assign({ value: { isLoading, setIsLoading } }, { children: children })));
};

;// CONCATENATED MODULE: ./src/app/components/common/DelayedLink/index.tsx




/** Delays route change for improve loader behavior */
const NavLinkWithDelay = ({ to, className, children, datatype, setIsNavbarVisible, }) => {
    const { isLoading, setIsLoading } = (0,react.useContext)(LoaderContext);
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    /** Handles route change, changes loader context */
    const changeRoute = (e) => {
        setIsNavbarVisible &&
            setIsNavbarVisible(false);
        if (location.pathname === to || isLoading) {
            return;
        }
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            navigate(to);
        }, 1500);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    return ((0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, Object.assign({ to: to, className: className, onClick: changeRoute, datatype: datatype }, { children: children })));
};

;// CONCATENATED MODULE: ./src/app/components/Home/Background/index.tsx


const Background = () => {
    const message = 'React Metamask Typescript Redux Ethers SCSS Redux-thunk ';
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ className: "home-background" }, { children: [(0,jsx_runtime.jsxs)("div", Object.assign({ className: "home-background__wrapper" }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text" }, { children: message.repeat(2) })), (0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text" }, { children: message.repeat(2) }))] })), (0,jsx_runtime.jsxs)("div", Object.assign({ className: "home-background__wrapper" }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text-bordered" }, { children: message.repeat(2) })), (0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text-bordered" }, { children: message.repeat(2) }))] }))] })));
};

;// CONCATENATED MODULE: ./src/app/components/common/Heading/index.tsx


const Heading = ({ message, className = '' }) => (0,jsx_runtime.jsx)("h1", Object.assign({ className: `heading ${className}` }, { children: message.split('').map((letter, index) => (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: `heading__letter ${className && `${className}__letter`}`, datatype: letter, style: { animationDelay: `${0.4 + 0.1 * index}s` } }, { children: letter }), letter), letter === ',' && (0,jsx_runtime.jsx)("br", {})] })) }));

;// CONCATENATED MODULE: ./src/app/views/Home/index.tsx






const Home = () => (0,jsx_runtime.jsxs)("section", Object.assign({ className: "home" }, { children: [(0,jsx_runtime.jsx)(Background, {}), (0,jsx_runtime.jsx)(Heading, { message: "Hi, I`m Vasyl, Front end developer" }), (0,jsx_runtime.jsx)(NavLinkWithDelay, { className: "home__contact-me", to: RoutesConfig.Contact.path, datatype: 'Contact Me' })] }));

;// CONCATENATED MODULE: ./src/app/components/About/Description/index.tsx



const Description = () => (0,jsx_runtime.jsxs)("div", Object.assign({ className: "description" }, { children: [(0,jsx_runtime.jsx)(Heading, { message: "About Me", className: "about-heading" }), (0,jsx_runtime.jsx)("p", Object.assign({ className: "description__text" }, { children: "Front-end developer with 2 years of experience." })), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("p", Object.assign({ className: "description__text" }, { children: "I create optimized, responsive websites using industry best practices. Proficient in blockchain integration and committed to staying current with the latest technologies to ensure code efficiency. My current stack is TS, JS, React.js, Redux, GraphQL, Ethers.js, Webpack, HTML5, Styled Components and SCSS." })), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("p", Object.assign({ className: "description__text" }, { children: "I enjoy delivering results and always do my best to achieve the goal. Ready to take on new challenges, not afraid to learn, improve and get better." }))] }));

;// CONCATENATED MODULE: ./src/app/views/About/index.tsx



const About = () => (0,jsx_runtime.jsx)("section", Object.assign({ className: "about" }, { children: (0,jsx_runtime.jsx)(Description, {}) }));

// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(66);
;// CONCATENATED MODULE: ./src/app/static/images/projects/eggheadz.png
const eggheadz_namespaceObject = __webpack_require__.p + "images/eggheadz985ac.png";
;// CONCATENATED MODULE: ./src/app/static/images/projects/ultimatedivision.png
const ultimatedivision_namespaceObject = __webpack_require__.p + "images/ultimatedivisionb9015.png";
;// CONCATENATED MODULE: ./src/app/static/images/projects/ledgerMarket.png
const ledgerMarket_namespaceObject = __webpack_require__.p + "images/ledgerMarket7ad28.png";
;// CONCATENATED MODULE: ./src/app/views/Projects/index.tsx







class Project {
    constructor(name, description, preview, url) {
        this.name = name;
        this.description = description;
        this.preview = preview;
        this.url = url;
    }
}
const Projects = () => {
    const projects = [
        new Project('Ultimate Division', `Ultimate Division is a football simulator and card collecting game,
            a joint project by Boosty Labs and Chickenfish games. The game is
            free to play and players can build their squads to compete with each
            other in weekly competitions.`, ultimatedivision_namespaceObject, 'https://ultimatedivision.com/'),
        new Project('EGGHEADZ', 'NFT drop', eggheadz_namespaceObject, 'https://eggheadz.io/'),
        new Project('Storefront', 'NFT drop marketplace', ledgerMarket_namespaceObject, 'https://nftfss-dev.vercel.app/'),
    ];
    const settings = {
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [isFocused, setIsFocused] = (0,react.useState)(false);
    return ((0,jsx_runtime.jsx)("section", Object.assign({ className: "projects" }, { children: (0,jsx_runtime.jsx)(lib/* default */.Z, Object.assign({}, settings, { className: "slider" }, { children: projects.map((project) => (0,jsx_runtime.jsxs)("div", Object.assign({ className: "projects__item" }, { children: [(0,jsx_runtime.jsx)("img", { className: `projects__preview${isFocused ? '-focused' : ''}`, src: project.preview, alt: "project preview" }), (0,jsx_runtime.jsx)("div", Object.assign({ className: "projects__item__text-area", onMouseEnter: () => setIsFocused(true), onMouseLeave: () => setIsFocused(false) }, { children: (0,jsx_runtime.jsxs)("a", Object.assign({ href: project.url, target: "_blank", className: "projects__link" }, { children: [(0,jsx_runtime.jsx)("h6", Object.assign({ className: "projects__item__name" }, { children: project.name })), (0,jsx_runtime.jsx)("div", Object.assign({ className: "projects__item__description-wrapper" }, { children: (0,jsx_runtime.jsx)("p", Object.assign({ className: "projects__item__description" }, { children: project.description })) }))] }), project.name) }))] }), project.name)) })) })));
};

;// CONCATENATED MODULE: ./src/app/components/Contact/Form/index.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const Form = () => {
    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/82e38a40-45a3-11ee-b201-930d103a99ad';
    const [name, setName] = (0,react.useState)('');
    const [email, setEmail] = (0,react.useState)('');
    const [message, setMessage] = (0,react.useState)('');
    const [isSubmit, setIsSubmit] = (0,react.useState)(false);
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            yield fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });
        }
        catch (error) {
            setIsSubmit(false);
        }
    });
    return ((0,jsx_runtime.jsxs)("form", Object.assign({ className: "form", action: FORM_ENDPOINT, method: "post", onSubmit: handleSubmit }, { children: [(0,jsx_runtime.jsx)("input", { type: "text", placeholder: "Name", className: "form__name", id: "name", onChange: e => setName(e.target.value) }), (0,jsx_runtime.jsx)("input", { type: "email", placeholder: "Enter email", className: "form__email", id: "email", onChange: e => setEmail(e.target.value) }), (0,jsx_runtime.jsx)("textarea", { id: "message", placeholder: "Message", className: "form__message", onChange: e => setMessage(e.target.value) }), (0,jsx_runtime.jsx)("button", Object.assign({ type: "submit", className: "form__submit", datatype: isSubmit ? "Thank You!" : "Hit me up" }, { children: isSubmit ? "Thank You!" : "Hit me up" }))] })));
};

;// CONCATENATED MODULE: ./src/app/static/images/contact/icons.tsx

const Github = () => (0,jsx_runtime.jsx)("svg", Object.assign({ viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0,jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z", transform: "scale(64)" }) }));
const Linkedin = () => (0,jsx_runtime.jsx)("svg", Object.assign({ version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 1000 1000", "enable-background": "new 0 0 1000 1000" }, { children: (0,jsx_runtime.jsxs)("g", { children: [(0,jsx_runtime.jsx)("path", { d: "M10,10L10,10L10,10z" }), (0,jsx_runtime.jsx)("path", { d: "M510,30C244.9,30,30,244.9,30,510s214.9,480,480,480s480-214.9,480-480S775.1,30,510,30z M392.5,708.9h-97.2V396.2h97.2V708.9z M343.3,357.8c-30.7,0-50.6-21.8-50.6-48.7c0-27.5,20.4-48.6,51.8-48.6s50.6,21.1,51.2,48.6C395.8,336.1,375.9,357.8,343.3,357.8z M747.4,708.9h-97.2V535.6c0-40.3-14.1-67.8-49.3-67.8c-26.8,0-42.8,18.6-49.9,36.4c-2.6,6.3-3.2,15.3-3.2,24.3v180.3h-97.3v-213c0-39-1.2-71.7-2.6-99.8h84.4l4.5,43.4h1.9c12.8-20.4,44.2-50.5,96.6-50.5c63.9,0,111.9,42.8,111.9,134.9V708.9L747.4,708.9z" })] }) }));
const Telegram = () => (0,jsx_runtime.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 16 16" }, { children: (0,jsx_runtime.jsx)("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" }) }));

;// CONCATENATED MODULE: ./src/app/views/Contact/index.tsx





class SocialLink {
    constructor(url, icon) {
        this.url = url;
        this.icon = icon;
    }
}
const Contact = () => {
    const socialLinks = [
        new SocialLink('https://github.com/VasilySavchenko', (0,jsx_runtime.jsx)(Github, {})),
        new SocialLink('https://www.linkedin.com/in/vasyl-savchenko-6494b4226/', (0,jsx_runtime.jsx)(Linkedin, {})),
        new SocialLink('https://t.me/Vasily_Savchenko', (0,jsx_runtime.jsx)(Telegram, {})),
    ];
    return ((0,jsx_runtime.jsxs)("section", Object.assign({ className: "contact" }, { children: [(0,jsx_runtime.jsx)(Heading, { message: "Contact me", className: "contact__heading" }), (0,jsx_runtime.jsx)("ul", Object.assign({ className: "contact__list" }, { children: socialLinks.map((link) => (0,jsx_runtime.jsx)("li", Object.assign({ className: "contact__item" }, { children: (0,jsx_runtime.jsx)("a", Object.assign({ className: "contact__link", href: link.url, target: "_blank" }, { children: link.icon })) }))) })), (0,jsx_runtime.jsx)("div", Object.assign({ className: "contact__wrapper" }, { children: (0,jsx_runtime.jsx)(Form, {}) }))] })));
};

;// CONCATENATED MODULE: ./src/app/routes/index.tsx






class ComponentRoutes {
    constructor(path, element, children) {
        this.path = path;
        this.element = element;
        this.children = children;
    }
    /** with is method that creates child sub routes path */
    with(child, parrent) {
        child.path = `${parrent.path}/${child.path}`;
        return this;
    }
    /** addChildren is method that adds children components to component */
    addChildren(children) {
        this.children = children.map((child) => child.with(child, this));
        return this;
    }
}
/**
 * RoutesConfig contains information about all routes and subroutes.
 */
class RoutesConfig {
}
RoutesConfig.Home = new ComponentRoutes('/', (0,jsx_runtime.jsx)(Home, {}));
RoutesConfig.About = new ComponentRoutes('/about', (0,jsx_runtime.jsx)(About, {}));
RoutesConfig.Projects = new ComponentRoutes('/projects', (0,jsx_runtime.jsx)(Projects, {}));
RoutesConfig.Contact = new ComponentRoutes('/contact-me', (0,jsx_runtime.jsx)(Contact, {}));
/** Routes is an array of logical router components */
RoutesConfig.routes = [
    RoutesConfig.Home,
    RoutesConfig.About,
    RoutesConfig.Projects,
    RoutesConfig.Contact,
];
const Switch = () => (0,jsx_runtime.jsx)(react_router/* Routes */.Z5, { children: RoutesConfig.routes.map((route, index) => (0,jsx_runtime.jsx)(react_router/* Route */.AW, { path: route.path, element: route.element, caseSensitive: false }, index)) });

;// CONCATENATED MODULE: ./src/app/components/common/Navbar/index.tsx







class NavigationLink {
    constructor(label, url) {
        this.label = label;
        this.url = url;
    }
}
const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = (0,react.useState)(false);
    const navLinks = [
        new NavigationLink('About', RoutesConfig.About.path),
        new NavigationLink('Projects', RoutesConfig.Projects.path),
        new NavigationLink('Contact me', RoutesConfig.Contact.path),
    ];
    const changeNavbarVisibility = () => {
        setIsNavbarVisible(prev => !prev);
    };
    return ((0,jsx_runtime.jsxs)("nav", Object.assign({ className: "nav" }, { children: [(0,jsx_runtime.jsx)(NavLinkWithDelay, Object.assign({ className: "nav__link nav__logo", to: RoutesConfig.Home.path, datatype: "@Vasily_Savchenko", setIsNavbarVisible: setIsNavbarVisible }, { children: "@Vasily_Savchenko" })), (0,jsx_runtime.jsx)("ul", Object.assign({ className: `nav__list${isNavbarVisible ? '-active' : ''}` }, { children: navLinks.map((link) => (0,jsx_runtime.jsx)("li", Object.assign({ className: "nav__item" }, { children: (0,jsx_runtime.jsx)(NavLinkWithDelay, Object.assign({ to: link.url, className: "nav__link", datatype: link.label, setIsNavbarVisible: setIsNavbarVisible }, { children: link.label })) }), link.label)) })), (0,jsx_runtime.jsx)("img", { src: isNavbarVisible ? cross_namespaceObject : burger_namespaceObject, alt: "navbar control", className: "nav__control", onClick: changeNavbarVisibility })] })));
};

;// CONCATENATED MODULE: ./src/app/components/common/Loader/index.tsx


const Loader = () => (0,jsx_runtime.jsx)("section", Object.assign({ className: "loader" }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: "loader__wrapper" }, { children: (0,jsx_runtime.jsx)("h3", Object.assign({ className: "loader__heading" }, { children: "loading" })) })) }));

;// CONCATENATED MODULE: ./src/app/App.tsx







function App() {
    const { isLoading } = (0,react.useContext)(LoaderContext);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Navbar, {}), (0,jsx_runtime.jsxs)("main", Object.assign({ className: "main" }, { children: [isLoading && (0,jsx_runtime.jsx)(Loader, {}), (0,jsx_runtime.jsx)(Switch, {})] }))] }));
}
/* harmony default export */ const app_App = (App);

;// CONCATENATED MODULE: ./src/index.tsx






const root = client.createRoot(document.getElementById('root'));
root.render((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(LoaderProvider, { children: (0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, { children: (0,jsx_runtime.jsx)(app_App, {}) }) }) }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [92], () => (__webpack_require__(909)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;