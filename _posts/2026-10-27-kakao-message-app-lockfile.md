---
title: "2026-10-27 카카오톡 나에게 보내기 앱 Next.js 16 반영 정리"
layout: post
date: 2026-10-27 00:10:56 +0900
---

## 한 줄 요약

카카오톡 나에게 보내기 앱을 Next.js 16 기준으로 맞추고, 이 기준의 `package-lock.json`을 GitHub에 올렸습니다.

## 반영 내용

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [kakao-message-app](https://github.com/jeong-jihyun/kakao-message-app) | Next.js 16 대응 소스 수정 (쿠키 읽기에 await 적용, 버전 변경) | aae69b5 |
| [kakao-message-app](https://github.com/jeong-jihyun/kakao-message-app) | package-lock.json을 Next.js 16 기준으로 갱신 | 1706ab0 |

## 확인한 것

| 항목 | 결과 |
|---|---|
| Next.js 16으로 설치 후 빌드 | 통과 |
| 로그인 상태 확인 주소 (/api/auth/status) | 정상 응답 |

## 미확인

- 카카오 로그인 후 토큰 발급은 아직 성공하지 못했습니다. "Bad client credentials" 오류가 나서 REST API 키와 클라이언트 시크릿 값을 점검 중입니다.
- 실제 카카오톡 메시지 전송은 확인하지 못했습니다.
