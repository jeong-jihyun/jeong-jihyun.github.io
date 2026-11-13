---
title: "2026-11-14 llm-finetune-notebook 무료 구성으로 Vercel 배포"
layout: post
date: 2026-11-14 05:06:03 +0900
---

**한 줄 요약:** 비용이 들지 않도록 저장은 Vercel Blob, AI는 Gemini 무료 등급으로 바꾸고 Vercel에 배포했습니다. 접속 비밀번호로 남이 쓰지 못하게 막았습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [llm-finetune-notebook](https://github.com/jeong-jihyun/llm-finetune-notebook) | OpenAI·SQLite 제거, Vercel Blob(비공개) 저장, Gemini 모델 자동 선택, 접속 비밀번호, 점검 화면, 붙여넣기 업로드, 테스트 4개 | 51490f3, eee7131 |

**배포:** Vercel(Hobby 무료)에 배포 완료. 주소는 llm-finetune-notebook.vercel.app 입니다.

**확인한 것:** 빌드 성공(READY), 화면과 /health 응답, 로컬 테스트 4개 통과(가짜 임베딩).

**미확인:** 실제 Gemini 키로 한 업로드·답변, Vercel Blob 실제 읽기/쓰기, 폰 화면. 아직 Gemini 키와 Vercel 접속 보호 설정이 남아 있습니다.

**참고:** 2단계(파인튜닝)는 무료로 가능한 방법을 조사한 뒤 진행합니다.
