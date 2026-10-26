---
title: "2026-10-26 카카오톡 나에게 보내기 웹앱 만들기"
layout: post
---

## 한 줄 요약

카카오 로그인 후, 입력한 글을 내 카카오톡(나와의 채팅)으로 보내는 Next.js 웹앱을 만들어 GitHub에 올렸습니다.

## 반영 내용

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [kakao-message-app](https://github.com/jeong-jihyun/kakao-message-app) | 카카오 로그인(OAuth) + 카카오톡 "나에게 보내기" API를 쓰는 웹앱 최초 반영 (12개 파일) | ded6c74 |

## 사용한 카카오 API

| 기능 | 주소 |
|---|---|
| 카카오 로그인 | kauth.kakao.com/oauth/authorize, /oauth/token |
| 나에게 보내기 | kapi.kakao.com/v2/api/talk/memo/default/send |

## 구조

| 파일 | 역할 |
|---|---|
| app/page.js | 화면 (로그인 버튼, 글 입력, 보내기) |
| app/api/auth/* | 로그인, 콜백, 상태 확인, 로그아웃 |
| app/api/send/route.js | 카카오톡 메시지 전송 |

## 카카오 콘솔에서 설정한 것

- 카카오 로그인 사용 설정 ON
- REST API 키 화면에서 리다이렉트 URI 등록 (새 콘솔에서는 앱 > 플랫폼 키 안에 있음)

## 미확인

- 동의항목의 "카카오톡 메시지 전송" 설정 완료 여부
- 실제 로그인과 메시지 전송은 아직 확인하지 못했습니다. 빌드(next build)만 통과했습니다.
- Vercel 배포는 하지 않았습니다.
