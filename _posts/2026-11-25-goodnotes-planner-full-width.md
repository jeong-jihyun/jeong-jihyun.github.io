---
title: "2026-11-25 굿노트 플래너: PC 넓은 화면 꽉 채우기"
layout: post
date: 2026-11-25 20:03:50 +0900
---

한 줄 요약: 넓은 PC 모니터에서 화면이 가운데 좁게(1180px) 보이고 양옆이 비던 것을 화면 폭에 맞게 꽉 채우도록 고쳤다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [goodnotes-digital-planner](https://github.com/jeong-jihyun/goodnotes-digital-planner) | 전체 폭 제한 제거, 메뉴 폭 조정 | 352cb90 |

## 고친 것

| 문제 | 고친 방법 |
|---|---|
| 넓은 모니터에서 양옆 빈 공간 | 전체 폭 1180px 고정 해제, 메뉴는 왼쪽 끝 |
| Windows 에서 'Planner Studio' 이름 잘림 | 메뉴 폭 225 → 248px |

## 확인한 것

- 1280·1366·1920·2240px 폭에서 6개 화면 점검
- 화면 배포 완료: [Planner Studio](https://goodnotes-digital-planner.vercel.app/)
