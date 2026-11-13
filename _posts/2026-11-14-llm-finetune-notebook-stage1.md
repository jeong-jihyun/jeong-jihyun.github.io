---
title: "2026-11-14 llm-finetune-notebook 1단계 RAG 채팅 추가"
layout: post
date: 2026-11-14 04:51:05 +0900
---

**한 줄 요약:** 자료(txt·md·pdf)를 올리고 질문하면 출처와 함께 답하는 1단계가 동작합니다. 폰·PC 모두 같은 화면으로 쓸 수 있어요.

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [llm-finetune-notebook](https://github.com/jeong-jihyun/llm-finetune-notebook) | 업로드·조각내기·임베딩 검색·출처 표시 채팅, 반응형 화면(자료함/채팅), 자료 삭제 | 0da9caa |

**참고:** 빠른 시험을 위해 저장은 로컬 SQLite, 화면은 서버가 직접 제공합니다. Supabase·Next.js 전환은 이후 단계입니다.

**확인한 것:** 업로드(txt·한글 인코딩·pdf), 잘못된 파일 안내, 질문→출처 반환, 삭제, 키 없을 때 안내 문구 (가짜 임베딩으로 흐름 검증).

**미확인:** 실제 OpenAI 키로 한 답변 품질, 실제 폰 화면, 큰 PDF 처리 속도.
