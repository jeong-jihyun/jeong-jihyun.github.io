---
title: "2026-11-25 굿노트 플래너 스튜디오 5단계: PDF 생성 서버 + 화면 연결"
layout: post
date: 2026-11-25 09:30:53 +0900
---

**한 줄 요약**: PDF를 만드는 서버를 Hugging Face(무료)에 올리고 화면과 연결해, 폰에서 PDF 만들기·내려받기가 되도록 했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [goodnotes-digital-planner](https://github.com/jeong-jihyun/goodnotes-digital-planner) | FastAPI 서버(나눔고딕 내장, 링크 검사 통과한 PDF만 내려받기, 1시간 보관, 요청 제한), GitHub Actions 자동 배포, PDF 생성 화면(진행 단계·결과·내려받기) | 0468762 |

- 직접 해 보기: <https://goodnotes-digital-planner.vercel.app/#/generate>
- 확인: 테스트 50개 통과, GitHub 자동 배포 성공, 화면에 서버 주소 연결 확인

**미확인**: 실제 폰에서 PDF 내려받기 → 굿노트로 열기 (사용자 확인 예정)
