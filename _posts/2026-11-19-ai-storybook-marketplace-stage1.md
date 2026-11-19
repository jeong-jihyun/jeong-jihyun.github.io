---
title: "2026-11-19 동화숲(AI 동화책 판매 앱) 1단계 — 둘러보기·검색·미리보기"
layout: post
date: 2026-11-19 20:11:16 +0900
---

AI가 만들고 사람이 검수한 어린이 동화책을 파는 모바일 앱 **동화숲**의 1단계(기본 앱)를 만들어 새 저장소에 올리고 Vercel에 배포했습니다.

- 저장소: [jeong-jihyun/ai-storybook-marketplace](https://github.com/jeong-jihyun/ai-storybook-marketplace)
- 바로 써 보기: [ai-storybook-marketplace.vercel.app](https://ai-storybook-marketplace.vercel.app)

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| ai-storybook-marketplace | 1단계 기본 앱 (새 저장소) | 259242e |

## 만든 것

| 구분 | 내용 |
|---|---|
| 앱 화면 | 홈, 카테고리(주제·나이), 검색, 동화 상세, 무료 미리보기, 내 서재·마이(안내) |
| 서버(API) | 목록·필터·정렬·검색·인기·상세·미리보기, 구매 전 페이지는 서버가 차단 |
| 데이터 | 카테고리 5개, 동화 10권(권당 8쪽), 표지·삽화 90장 |
| 디자인 | "따뜻한 그림책" 디자인 시스템 v1.0 (크림색 바탕 + 주황 포인트) |
| 기술 | React Native(Expo), NestJS, PostgreSQL, Vercel 무료 |

## 확인한 것
- 서버 테스트 26개 통과 (샘플 데이터 + PostgreSQL)
- 폰 크기 화면 캡처 확인, 배포 사이트에서 API·그림 응답 확인

## 미확인
- 실제 안드로이드·아이폰 앱 빌드 (다음 단계에서 확인)

## 다음 단계
2단계: 로그인·보호자 확인·주문·결제 검증·구매 권한
