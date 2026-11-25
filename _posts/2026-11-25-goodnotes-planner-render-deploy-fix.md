---
title: "2026-11-25 굿노트 플래너 스튜디오: 서버 배포 문제 해결"
layout: post
date: 2026-11-25 18:29:05 +0900
---

**한 줄 요약**: Render 자동 배포가 반영되지 않아 서버가 5단계 버전에 멈춰 있던 문제를, GitHub이 직접 배포를 시키고 결과·오류를 남기는 방식으로 해결했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [goodnotes-digital-planner](https://github.com/jeong-jihyun/goodnotes-digital-planner) | Render API로 배포 실행·완료 대기·실패 시 빌드 기록 알림, /health 에 서버 버전 표시 | af962b7 |

- 결과: Render 배포 성공, 서버 버전 af962b7, 6·7단계 기능(기간·공휴일·미리보기) 서버 반영
- 앞으로: GitHub에 올리면 테스트 → Render 배포 → 성공 확인까지 자동
