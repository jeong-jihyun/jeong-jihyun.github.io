---
title: "2026-11-24 포트폴리오 플랫폼: 갤러리 카드·경력 페이지·GitHub 가져오기"
layout: post
date: 2026-11-24 05:27:55 +0900
---

**한 줄 요약**: 공개 화면을 갤러리형 카드로 바꾸고, 경력을 별도 페이지로 나누고, 관리자에 GitHub 저장소(공개+비공개) 가져오기를 추가했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [personal-project-portfolio](https://github.com/jeong-jihyun/personal-project-portfolio) | 공개 홈: 상단 간격 축소, 태그 목록 + 갤러리 카드(PC 3열·모바일 2열), '전체 N개 보기' 제거 | 3156144 |
| | 경력: `/career` 페이지 신설, 홈은 최근 경력 3건만 카드로 | 3156144 |
| | 관리자 프로젝트 관리: 표 정렬, 한 줄 요약, 작은 태그, 짧은 기간·수정일, 수정 버튼 | 3156144 |
| | PORTFOLIO·STUDIO 로고와 파비콘을 관리자·공개 화면에 반영 | 3156144 |
| | Git 저장소: 'GitHub에서 가져오기' — 새 프로젝트는 비공개·비게시로 자동 생성, 같은 저장소는 중복 등록 안 됨 | 3156144 |

- 사이트: <https://personal-project-portfolio-pi.vercel.app/portfolio/>
- 미확인: 비공개 저장소 가져오기는 운영 환경에 GitHub 토큰을 넣은 뒤 확인 예정
