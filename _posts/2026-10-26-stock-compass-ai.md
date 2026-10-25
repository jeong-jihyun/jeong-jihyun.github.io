---
layout: post
title: "📈 Stock Compass AI — AI 코칭 기반 주식 투자 플랫폼 공개"
date: 2026-10-26 06:50:00 +0900
categories: [개발, 주식, AI]
tags: [React, Claude AI, 주식, 모의투자, 네이버API]
---

주식 투자를 처음 시작하는 분들을 위한 **AI 코칭 기반 투자 플랫폼** 소스를 GitHub에 공개했습니다.

## 🗂️ 구성 컴포넌트

### 1. StockCompass — 투자 나침반
- 한국주식 / 미국주식 / ETF / 암호화폐 4개 시장 탭
- Claude AI 종목 분석 (점수·리스크 등급·투자 체크리스트)
- 7단계 주식 학습 커리큘럼
- 실시간 시세 티커 바

### 2. StockSimulator — 모의투자 시뮬레이터
- 초기자금 ₩10,000,000 가상 투자
- 삼성전자·NVIDIA·비트코인 등 10개 종목
- SVG 스파크라인 미니차트 (4초 간격 가격 변동)
- **AI 코치 채팅 패널** — Claude API가 실시간 투자 가이드

### 3. StockCompassFull — 통합 완성본
- 네이버 공식 검색 API 뉴스 연동 (합법적 뉴스 수집)
- Claude 웹서치 자동 폴백
- 감성 점수(-100 극악재 ~ +100 극호재) 기반 주문 경고

## 🔗 GitHub

👉 [jeong-jihyun/stock-compass-ai](https://github.com/jeong-jihyun/stock-compass-ai)

## 💡 실행 방법

각 JSX 파일을 [claude.ai](https://claude.ai) 아티팩트에 붙여넣기하면 바로 실행됩니다.  
`StockCompassFull.jsx`는 Claude API Key와 네이버 Client ID/Secret이 필요합니다.
