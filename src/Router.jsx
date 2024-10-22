import { Routes, Route } from 'react-router-dom';

import { Home, PageNotFound } from './pages';

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );

};

export { Router };