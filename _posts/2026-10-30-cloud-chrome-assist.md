---
title: "2026-10-30 폰에서 쓰는 클라우드 크롬 지원 도구 (cloud-chrome-assist)"
layout: post
date: 2026-10-30 18:41:00 +0900
---

PC 없이 폰의 Claude 앱에서 말만 하면, 클라우드에 있는 크롬을 Claude가 대신 조작하는 도구를 만들어 올렸습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [cloud-chrome-assist](https://github.com/jeong-jihyun/cloud-chrome-assist) | Vercel Sandbox에 크롬을 두고 MCP 주소로 Claude가 조작. 로그인은 폰 라이브 화면에서 직접 | ecfed2e |

## 핵심 동작
- 비밀번호·2단계 인증·캡처는 Claude가 입력하지 않고 사용자가 직접 합니다.
- 한 번 로그인하면 Sandbox에 저장됩니다.
- 비상업용이라 Vercel 무료(Hobby) 한도 안에서 쓰는 것이 목표입니다.

## 확인 상태
| 항목 | 상태 |
|---|---|
| 크롬 제어 서버(열기, 클릭, 입력, 비밀번호 차단, 스크린샷, 토큰 인증) | 로컬 시험 통과 |
| MCP 응답 | 로컬 시험 통과 |
| Vercel Sandbox 생성·크롬 설치·공개 주소 | 미확인 |
| Claude 앱 커스텀 커넥터 연결 | 미확인 |
