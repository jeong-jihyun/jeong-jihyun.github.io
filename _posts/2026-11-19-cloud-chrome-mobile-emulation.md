---
title: "2026-11-19 클라우드 크롬에 모바일 화면 흉내(에뮬레이션) 추가"
layout: post
date: 2026-11-19 10:33:38 +0900
---

사이트가 PC가 아니라 폰 화면으로 어떻게 뜨는지 보고 싶을 때 쓰는 **모바일 에뮬레이션**을 cloud-chrome-assist에 넣었습니다.

## 바뀐 내용

| 파일 | 내용 |
|---|---|
| sandbox-agent/server.js | Playwright 기기 프로필로 화면 크기·터치·user-agent를 폰처럼 맞추는 set_device/list_devices 추가 |
| api/mcp.js | 도구 browser_device(기기 지정/off), browser_devices(목록) 추가 |
| README.md | 사용법 설명 |

저장소: `jeong-jihyun/cloud-chrome-assist` (커밋 `cc67190`)

## 쓰는 법

- "아이폰 15로 보여줘" → 그 폰처럼 맞춰 사이트가 모바일 화면으로 뜸
- "에뮬레이션 꺼줘"(off) → 데스크톱으로 복귀

## 한계

화면 크기를 폰처럼 맞추는 방식이라 실기기와 100% 같지는 않습니다. 실제 안드로이드 USB 조작은 이 클라우드 환경에선 안 됩니다.
