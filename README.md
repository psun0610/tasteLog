# 디렉토리 구조

```bash
src/
 ├─ assets/         # 정적 파일 (이미지, 폰트, 아이콘 등)
 ├─ components/     # 재사용 가능한 UI 컴포넌트 (버튼, 모달, 인풋 등 범용 컴포넌트)
 ├─ layouts/        # Navbar, Footer 등 기본 레이아웃
 ├─ features/       # 도메인별 기능 단위 (예: auth, posts, profile)
 │   └─ auth/
 │       ├─ components/ # auth 전용 UI
 │       ├─ hooks/      # auth 관련 훅
 │       ├─ services/   # API 호출, 상태 관리
 │       └─ index.ts    # auth 관련 export 모음
 ├─ hooks/         # 전역적으로 쓰이는 커스텀 훅
 ├─ pages/         # 라우트 단위 페이지 컴포넌트
 ├─ services/      # API 통신 (axios/fetch), 클라이언트
 ├─ store/         # 전역 상태 관리 (zustand, redux 등)
 ├─ styles/        # 글로벌 스타일
 ├─ utils/         # 유틸 함수, 헬퍼 함수
 ├─ App.tsx
 └─ main.tsx
```
