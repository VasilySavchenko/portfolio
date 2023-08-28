import { useContext } from 'react';

import { Navbar } from '@components/common/Navbar';
import { LoaderContext } from './context/loader';
import { Loader } from './components/common/Loader';
import { Routes } from './routes';

import './App.scss';

function App() {
    const { isLoading } = useContext(LoaderContext);

    return (
        <>
            <Navbar />
            <main className="main">
                {isLoading && <Loader />}
                <Routes />
            </main>
        </>
    );
}

export default App;
