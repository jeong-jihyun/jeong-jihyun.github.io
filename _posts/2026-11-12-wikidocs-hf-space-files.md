---
title: "2026-11-12 위키독스 PDF 서버를 Hugging Face Spaces용으로 준비"
layout: post
date: 2026-11-12 22:04:09 +0900
---

**한 줄 요약**: Render 가입이 사람 확인(CAPTCHA)에서 막혀, 변환 서버를 Hugging Face Spaces(Docker)에서 돌릴 수 있게 파일을 추가했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| wikidocs-book-to-pdf | hf-space 폴더(README, Dockerfile) 추가, Spaces 주소(SPACE_HOST)를 구글 로그인 주소로 인식 | e7332fb |

- 기존 서버 테스트 9개 통과.
- Docker 빌드와 실제 Space 실행은 아직 확인하지 못했습니다.
