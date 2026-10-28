---
title: "2026-10-28 모의투자 앱 시세 수집 오류 수정"
layout: post
date: 2026-10-28 06:59:45 +0900
---

시세 수집이 400 오류로 실패해서, API 오퍼레이션 이름 1줄을 고쳤습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| paper-trading-app | `scripts/collect.ts` 시세 주소 끝을 `getStockPriceInfo` → `getStockPriceInfo_V2`로 수정 | df83226 |

- 원인: 공공데이터포털 명세의 오퍼레이션 이름이 `_V2`로 끝나는데 빠뜨렸습니다.
- 확인한 것: 샘플 데이터 시험 실행은 정상.
- 미확인: 실제 API 호출 결과(수정 후 GitHub Actions에서 다시 실행해 확인 예정).
