---
title: "2026-11-12 youtube-channel-summarizer 저장소 시작과 설계"
layout: post
date: 2026-11-12 06:16:00 +0900
---

유튜브 채널(CONNECT AI LAB)의 영상을 매일 5개씩 요약하고, 영상마다 모의 프로젝트를 만드는 저장소를 시작했습니다. 오늘은 저장소 연결 확인과 설계 문서까지 올렸습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| youtube-channel-summarizer | README 초안 추가 | f4e7f7a |
| youtube-channel-summarizer | 설계 문서(docs/design.md) 추가 | ba6f1e3 |

## 설계 한눈에 보기

| 항목 | 내용 |
|---|---|
| 하루 흐름 | 영상 목록 읽기 → 안 한 영상 5개 고르기 → 자막 요약 → 모의 프로젝트 5개 개발 → 반영 → 알림 |
| 분류 | computer-use, automation, web-dev, local-ai, robot-rl, business, ai-news, etc (8개) |
| 폴더 | summaries/영상ID.md, projects/분류코드/번호-이름/ |
| 관리 | 구글 시트 1개, 탭 4개(영상목록, 프로젝트, 분류, 실행기록) |
| 알림 | 하루 작업이 끝나면 카카오톡 |
| 실행 | 매일 새벽 5시(한국 시간) 예약 작업 |

## 아직 안 된 것

| 항목 | 상태 |
|---|---|
| 매일 새벽 5시 예약 작업 등록 | 미등록 |
| 자막을 실제로 가져와 요약하는 동작 | 미확인 (채널 화면 접속만 확인) |
| 모의 프로젝트 첫 5개 | 미개발 |
