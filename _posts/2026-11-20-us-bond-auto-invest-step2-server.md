---
title: "2026-11-20 US Bond Auto Invest — 서버(API·DB·자동 실행) 연결"
layout: post
date: 2026-11-20 06:29:29 +0900
---

채권 ETF 자동 적립 앱에 실제 서버를 붙였습니다. 이제 기록이 DB에 저장되고, 매일 아침 서버가 도래한 적립을 자동 실행합니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [us-bond-auto-invest](https://github.com/jeong-jihyun/us-bond-auto-invest) | NestJS API, DB 마이그레이션 9개, 엔진 공용 패키지 분리, 앱 서버 연결, CI 통합 테스트 | cf05212 |

## 구성

| 부분 | 내용 |
|---|---|
| API | NestJS, Vercel 서버리스 (서울 리전) |
| DB | Supabase Postgres, 전용 스키마·전용 계정 |
| 자동 실행 | Vercel Cron 매일 07:00 (한국) |
| 공용 엔진 | 앱 체험 모드와 서버가 같은 코드 사용 |
| 앱 | 서버 모드(기본) + 체험 모드 |

## 중복 실행 막기

| 장치 | 역할 |
|---|---|
| 사용자 단위 잠금 | 같은 사용자 작업은 한 번에 하나 |
| 연월 UNIQUE | 한 달에 사이클 1건 |
| 주문·체결 UNIQUE | 같은 주문·체결 두 번 반영 안 됨 |
| 수정 금지 트리거 | 원장·체결·감사 로그는 고칠 수 없음 |

- 테스트: 엔진 17개 + API 통합 15개 통과 (동시 실행 10번 → 사이클 1건 확인)
- 앱: [us-bond-auto-invest.vercel.app](https://us-bond-auto-invest.vercel.app)
- 모의 환경입니다. 실제 주문은 나가지 않습니다.

## 다음

- IBKR Paper Trading 어댑터 연결
