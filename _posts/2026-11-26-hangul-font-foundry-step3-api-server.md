---
title: "2026-11-26 한글 폰트 작업실(Glyphroom) 3단계: API 서버 연결"
layout: post
date: 2026-11-26 06:21:10 +0900
---

**한 줄 요약**: 파이썬 폰트 엔진을 감싼 API 서버를 Render 무료 서버에 올리고, 화면이 실제 서버 연결 상태를 보여 주도록 이었습니다. (10단계 중 3단계)

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| hangul-font-foundry | FastAPI 서버(/api/v1/health, 공통 오류 형식·요청 번호, 웹앱 주소만 허용), render.yaml, 화면 상단 배지·설정 화면의 엔진 연결 상태(확인 중 → 깨우는 중 → 연결됨/안 됨), 시험 3건 추가(전체 13건 통과) | c412b4f |

- 화면: https://hangul-font-foundry.vercel.app
- 서버 상태: https://hangul-font-foundry-api.onrender.com/api/v1/health

**미확인 / 알아 둘 것**
- 무료 서버는 15분 쉬면 잠들어, 처음 열 때 30초~1분 기다릴 수 있습니다(화면에 "깨우는 중"으로 표시).
- 글자 목록·검수·빌드 결과는 아직 샘플입니다(4~7단계에서 실제 엔진으로 교체).
