// src/Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/layouts'

const Pages = {
    Home: lazy(() => import('@/pages/home')),
    NotFound: lazy(() => import('@/pages/notFound')),
}

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Pages.Home />} />
                    <Route path="*" element={<Pages.NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Router
