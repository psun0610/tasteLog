// src/Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/layouts'

const Pages = {
    Home: lazy(() => import('@/pages/home')),
    Map: lazy(() => import('@/pages/map')),
    Discover: lazy(() => import('@/pages/discover')),
    Noti: lazy(() => import('@/pages/noti')),
    MyPage: lazy(() => import('@/pages/myPage')),
    NotFound: lazy(() => import('@/pages/notFound')),
}

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Pages.Home />} />
                    <Route path="/map" element={<Pages.Map />} />
                    <Route path="/discover" element={<Pages.Discover />} />
                    <Route path="/noti" element={<Pages.Noti />} />
                    <Route path="/myPage" element={<Pages.MyPage />} />
                </Route>
                <Route path="*" element={<Pages.NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default Router
