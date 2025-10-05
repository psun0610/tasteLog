// src/Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from '@/layouts'
import Loading from '@/pages/loading'

const Pages = {
    Home: lazy(() => import('@/pages/home')),
    ReviewFeed: lazy(() => import('@/pages/reviewFeed')),
    CreateReview: lazy(() => import('@/pages/createReview')),
    Map: lazy(() => import('@/pages/map')),
    Discover: lazy(() => import('@/pages/discover')),
    Noti: lazy(() => import('@/pages/noti')),
    MyPage: lazy(() => import('@/pages/myPage')),
    NotFound: lazy(() => import('@/pages/notFound')),
    Login: lazy(() => import('@/pages/login')),
    Signup: lazy(() => import('@/pages/signup')),
}

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<Layout />}>
                    {/* 메인 페이지 */}
                    <Route path="/" element={<Pages.Home />} />
                    {/* 리뷰 피드 */}
                    <Route path="/reviewFeed" element={<Pages.ReviewFeed />} />
                    {/* 지도 */}
                    <Route path="/map" element={<Pages.Map />} />
                    {/* 탐색 */}
                    <Route path="/discover" element={<Pages.Discover />} />
                    {/* 알림 */}
                    <Route path="/noti" element={<Pages.Noti />} />
                    {/* 마이 페이지 */}
                    <Route path="/myPage" element={<Pages.MyPage />} />
                    {/* 리뷰 작성 */}
                    <Route path="/createReview" element={<Pages.CreateReview />} />
                </Route>
                <Route path="/login" element={<Pages.Login />} />
                <Route path="/signup" element={<Pages.Signup />} />
                <Route path="*" element={<Pages.NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default Router
