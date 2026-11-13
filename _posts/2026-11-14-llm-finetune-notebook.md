---
title: "2026-11-14 llm-finetune-notebook 저장소 시작"
layout: post
date: 2026-11-14 04:48:00 +0900
---

**한 줄 요약:** 자료를 올리면 바로 질문하고(노트북LM 방식), 버튼 한 번으로 내 모델을 학습시키는 웹/모바일 앱의 설계 문서와 뼈대를 올렸습니다.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [llm-finetune-notebook](https://github.com/jeong-jihyun/llm-finetune-notebook) | 설계 문서, DB 스키마(pgvector), FastAPI 뼈대, 외부 파인튜닝 API 연결 구조 | 60b95eb |

**구조:** 1단계는 자료 검색 방식(RAG)으로 즉시 답변, 2단계는 Q&A 학습데이터를 만들어 외부 파인튜닝 API로 학습합니다.

**확인한 것:** API 서버 실행, `/health` 응답, 글 조각내기, 학습용 JSONL 변환.

**미확인:** SQL의 실제 Supabase 실행, 실제 파인튜닝 API 호출, 기본 모델명의 파인튜닝 지원 여부.
