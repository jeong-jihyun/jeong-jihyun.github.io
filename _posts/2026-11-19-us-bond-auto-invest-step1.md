---
title: "2026-11-19 US Bond Auto Invest — 미국 채권 ETF 자동 적립 앱 1단계"
layout: post
date: 2026-11-19 20:28:35 +0900
---

미국 채권 ETF를 매달 **정수 주**로 자동 적립하는 모바일 앱의 1단계(화면 12개 + 적립 엔진 + 모의 브로커)를 새 저장소에 올리고 웹으로 배포했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [us-bond-auto-invest](https://github.com/jeong-jihyun/us-bond-auto-invest) | 새 저장소. Expo(React Native) 앱, 화면 12개, 적립 엔진, 모의 브로커, 테스트 17개, CI | 89a55eb |

## 들어간 것

| 구분 | 내용 |
|---|---|
| ETF | SGOV · SHY · IEF · TLT · BND |
| 매수 | 정수 주만, 지정가(매도호가 + 0.1%), 수수료 포함 계산 |
| 1주 미만 | 주문 없이 다음 달로 현금 이월 |
| 중복 방지 | 계획·연월마다 사이클 1건 (멱등성 키) |
| 거래일 | 미국 주말·휴장이면 다음 거래일 실행 |
| 원장 | 적립·예약·해제·체결·수수료를 지우지 않고 따로 기록 |
| 테스트 시나리오 | 정상 · 부분체결 · 거부 · 잔액부족 |

- 웹 앱: [us-bond-auto-invest.vercel.app](https://us-bond-auto-invest.vercel.app)
- 모의 환경입니다. 시세는 모의 값이고 실제 주문은 나가지 않습니다.

## 다음

- NestJS API · PostgreSQL · BullMQ로 엔진을 서버로 옮기기
- IBKR Paper Trading 어댑터 연결
