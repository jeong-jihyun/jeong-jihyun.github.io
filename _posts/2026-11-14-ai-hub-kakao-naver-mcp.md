---
title: "2026-11-14 카카오 메시지·네이버 캘린더를 ChatGPT·Gemini·Claude 공용으로"
layout: post
date: 2026-11-14 14:52:42 +0900
---

한 줄 요약: AI 서비스가 같은 주소로 카톡 보내기와 네이버 일정 등록을 쓰도록 공용 입구(MCP + OpenAPI)를 만들고, 토큰 저장 문제를 무료 저장소로 풀었습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| kakao-message-app | MCP(/api/mcp), OpenAPI(/api/openapi), 캘린더·상태 API, AI용 키와 관리 키 분리 | 9dfe87c |
| naver-blog-planner | 네이버 토큰을 Vercel Blob에 저장·자동 갱신, 연결 주소 추가, 기록 API 보강 | 1d41f3a |

## 미확인
- ChatGPT·Gemini 앱 화면에서의 실제 연결(ChatGPT 맞춤 연결은 유료 요금제 필요)
- Vercel 로그인 보호 설정 해제는 권한 문제로 하지 못함
