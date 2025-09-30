// src/Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from '@/layouts'
import Loading from '@/pages/loading'

const Pages = {
    Home: lazy(() => import('@/pages/home')),
    ReviewFeed: lazy(() => import('@/pages/reviewFeed')),
    Map: lazy(() => import('@/pages/map')),
    Discover: lazy(() => import('@/pages/discover')),
    Noti: lazy(() => import('@/pages/noti')),
    MyPage: lazy(() => import('@/pages/myPage')),
    NotFound: lazy(() => import('@/pages/notFound')),
}

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Pages.Home />} />
                        <Route path="reviewFeed" element={<Pages.ReviewFeed />} />
                    </Route>
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
