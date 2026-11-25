---
title: "2026-11-25 굿노트 플래너 스튜디오 7단계: 디자인 미리보기"
layout: post
date: 2026-11-25 11:26:44 +0900
---

**한 줄 요약**: 지금 고른 설정으로 실제 PDF를 만들어 표지·연간·월간·주간·일간·노트를 그림으로 보여 주는 미리보기를 만들었습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [goodnotes-digital-planner](https://github.com/jeong-jihyun/goodnotes-digital-planner) | 미리보기 API(실제 PDF 쪽을 JPEG로, 캐시·요청 제한), 미리보기 화면(쪽 고르기·크게 보기), 테스트 4개 추가 | dd879b4 |

- 직접 해 보기: <https://goodnotes-digital-planner.vercel.app/#/preview>
- 확인: 첫 미리보기 1.6초, 같은 설정 다시 보기 0.03초, 테스트 82개 통과

**미확인**: 폰에서 두 손가락 확대, Render 서버 새 버전 반영(자동 배포 3~5분)
