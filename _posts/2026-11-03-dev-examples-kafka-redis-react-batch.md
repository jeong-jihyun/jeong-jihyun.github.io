---
title: "2026-11-03 개발 예제 4종: Kafka·Redis, 캐시 데모, 배치 모니터, 동적 컴포넌트"
layout: post
date: 2026-11-03 14:00:00 +0900
---

11월 2일~3일에 학습용 예제 저장소 네 개가 올라갔습니다. 모두 소스 구조와 README를 읽고 정리한 것입니다.

## 한눈에 보기

| 저장소 | 한 줄 설명 | 주요 커밋 |
|---|---|---|
| [spring-kafka-redis-swagger-50-](https://github.com/jeong-jihyun/spring-kafka-redis-swagger-50-) | Spring Boot로 배우는 Kafka·Redis·Swagger 50개 시나리오 | 1ce7a8c ~ 7d25259 |
| [react-mongodb-redis-cache-demo](https://github.com/jeong-jihyun/react-mongodb-redis-cache-demo) | MongoDB 조회 결과를 Redis에 캐싱하는 화면 데모 | e71a9ff ~ ad3cd87 |
| [realtime-batch-monitor](https://github.com/jeong-jihyun/realtime-batch-monitor) | 실시간 배치 진행률을 보여 주는 데스크톱 앱 | 5aad34d ~ a588c15 |
| [react-dynamic-components](https://github.com/jeong-jihyun/react-dynamic-components) | 설정 데이터로 컴포넌트를 그려 주는 React 예제 | 2a6bd32 ~ 7c81bbf |

## 1. spring-kafka-redis-swagger-50-

- Java 21, Spring Boot 3.5.6, Spring Kafka, Spring Data Redis, springdoc(Swagger UI), 로컬 Kafka·Redis는 Docker Compose로 실행
- 학습 시나리오 50개: Kafka 01~20, Redis 21~40, 통합 패턴 41~46, API·Swagger 47~50
- 문서는 0장(개발 환경)부터 4장까지 있고, 각 장에 학습 목표·처리 흐름·구현 로직·운영 시 주의점이 있음
- 실제로 동작하는 API: 시나리오 목록·상세 조회, Kafka 메시지 발행, Redis 값 저장·조회·삭제, 카운터 증가
- README가 직접 밝히듯 **50개 전체가 기능으로 구현된 것은 아니고**, 문서에서 현재 구현과 앞으로 구현할 부분을 나눠 설명함

## 2. react-mongodb-redis-cache-demo

- React + Vite + MUI + AG Grid 화면, NestJS API, MongoDB 7, Redis 7, Swagger, Docker Compose(웹은 Nginx 뒤)
- 상품 목록을 요청하면 먼저 Redis를 보고, 없을 때만 MongoDB를 조회해 결과를 저장하는 방식(Cache-Aside)
- 응답에 캐시 적중 여부(`cacheHit`)와 걸린 시간(`durationMs`)이 들어 있어 검색어·필터·페이지를 바꿔 가며 비교 가능, 캐시 삭제 API 있음
- 시드 스크립트로 최대 100만 건 상품 데이터를 만들 수 있음
- 원래 realtime-batch-monitor 저장소 안에서 만들었다가 이 독립 저장소로 분리함

## 3. realtime-batch-monitor

- Electron + React 데스크톱 화면과 NestJS 서버(GraphQL, TypeORM, SQLite)로 구성, npm workspaces 하나로 묶음
- 배치 시작 → 서버가 처리량을 주기적으로 올림 → Socket.IO로 진행률 이벤트를 보냄 → 화면이 실시간으로 갱신
- GraphQL로 작업 목록 조회와 배치 시작 요청이 가능
- README에 "학습용"이라고 적혀 있고, 실제 대규모 배치에는 작업 큐·재시도·인증·모니터링이 필요하다고 안내함

## 4. react-dynamic-components

- React + TypeScript + Vite, 설정 데이터(타입과 props)에 따라 Text·Card·Alert·Button을 그려 주는 렌더러
- 컴포넌트 추가·삭제와 반응형 미리보기 화면
- 허용된 컴포넌트 종류만 그리도록 타입으로 제한했고, 서버에서 설정을 받더라도 검증된 타입만 허용하라고 안내함

## 미확인

- 네 저장소 모두 제가 실행·빌드·테스트해 보지 못했습니다. 동작한다는 뜻이 아니라 코드와 문서에 적힌 내용을 정리한 것입니다.
- 캐시 데모의 속도 차이, 100만 건 시드 시간, Docker Compose 전체 기동은 확인하지 못했습니다.
- Kafka·Redis 예제의 50개 시나리오 중 구현된 범위는 위 API까지만 코드로 확인했습니다.
