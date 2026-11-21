---
title: "2026-11-21 US Bond Auto Invest — 오류 문구 개선·자동 실행 기록"
layout: post
date: 2026-11-21 09:44:49 +0900
---

서버 저장소(DB)가 꺼졌을 때 앱에 영어 "Internal server error"가 뜨던 것을 쉬운 한국어 안내로 바꾸고, 매일 자동 실행 기록을 더 자세히 남기도록 했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [us-bond-auto-invest](https://github.com/jeong-jihyun/us-bond-auto-invest) | DB 장애 시 503 + 한국어 안내, 상태 확인(health)에 DB 상태·마지막 자동 실행 표시, 앱 오류 문구 개선 | 3784cca |
| [us-bond-auto-invest](https://github.com/jeong-jihyun/us-bond-auto-invest) | 자동 실행 설정을 vercel.json 한 곳으로 정리, 거부된 호출도 기록 | 9604a21 |

## 확인한 것

| 항목 | 결과 |
|---|---|
| DB 끄고 켜기 (로컬) | 꺼지면 한국어 안내, 켜지면 자동 복구 |
| 매일 07시 자동 실행 | 11/20·11/21 모두 정상 실행 (대상 적립 0건) |
| 테스트 | 17개 통과 |

- 앱: [us-bond-auto-invest.vercel.app](https://us-bond-auto-invest.vercel.app)
