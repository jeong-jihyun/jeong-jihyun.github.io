---
title: "2026-11-25 굿노트 플래너 스튜디오: PDF 서버를 Render로 이전"
layout: post
date: 2026-11-25 09:59:21 +0900
---

**한 줄 요약**: Hugging Face가 Docker 서버를 무료 등급에서 막아(유료 PRO 필요) PDF 생성 서버를 Render 무료 웹 서비스로 옮겼습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [goodnotes-digital-planner](https://github.com/jeong-jihyun/goodnotes-digital-planner) | 배포 점검 강화(서버 켜짐 확인·오류 문구 남기기) | b91c0c9 |
| 〃 | 실패가 성공으로 보이던 배포 문제 수정 → 원인(402 PRO 필요) 확인 | 2d49118 |
| 〃 | Render 이전: render.yaml, Dockerfile 수정, 화면 서버 주소 변경 | 24dfd79 |

- 확인: Render와 같은 방식으로 실행해 한국어 1년 PDF 437쪽·링크 7,704개 정상, 테스트 50개 통과
- 화면: <https://goodnotes-digital-planner.vercel.app/#/generate>

**미확인**: Render 서버가 실제로 켜졌는지, 폰에서 PDF 내려받기
