---
title: "2026-11-12 크롬 확장 5개 추가"
layout: post
date: 2026-11-12 05:13:19 +0900
---

`chrome-extension-factory`에 한글 사용자를 위한 크롬 확장 5개를 더 올렸습니다. 모두 Manifest V3이고, 데이터는 내 브라우저에만 저장됩니다.

| 분류 | 확장 이름 | 해결하는 문제 | 기존 제품 대비 차별점 | 경로 |
|---|---|---|---|---|
| 읽기 모드 | 한글 읽기 모드 | 광고·메뉴에 가려 긴 글이 읽기 힘듦 | 한글 줄바꿈(단어 단위), 읽는 시간 표시, 별도 계정 없음 | [06-reading-mode/hangul-reader](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/06-reading-mode/hangul-reader) |
| 번역 | 영문 약어 한글 풀이 | 글 속 영문 약어(ETF, CPC 등)를 몰라 막힘 | 한글 쉬운 설명 83개 내장, 내 용어 추가 가능 | [07-translation/acronym-glossary-kr](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/07-translation/acronym-glossary-kr) |
| 어학 | 영어 단어 상자 | 모르는 단어를 적어 두고도 복습을 못 함 | 우클릭 저장, 복습 주기 자동, CSV 내보내기 | [08-language-learning/word-box](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/08-language-learning/word-box) |
| 텍스트 도구 | 글자·바이트 세기 | 자기소개서·입력창의 글자/바이트 제한 확인 | 글자수와 UTF-8·EUC-KR 바이트 동시 표시, 한도에 맞춰 자르기 | [09-text-tools/byte-counter-kr](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/09-text-tools/byte-counter-kr) |
| 글쓰기 도우미 | 한글 글쓰기 점검기 | 긴 문장·반복 표현·이중 피동을 놓침 | 한글 규칙 기반, 글이 외부로 나가지 않음 | [10-writing-assistant/hangul-writing-check](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/10-writing-assistant/hangul-writing-check) |

커밋: [c88f357](https://github.com/jeong-jihyun/chrome-extension-factory/commit/c88f357d7153d5710b70296da78538676ac0ffda)

## 확인한 것
- 핵심 함수 단위 테스트 통과(단어 상자, 바이트 세기, 글쓰기 점검)
- 실제 크롬에 확장을 불러와 항목 통과: 읽기 모드 23개, 나머지 네 확장 40개
- 매니페스트 형식, 참조 파일 존재, 최소 권한, 금지 패턴(원격 코드 등) 검사 통과

## 미검증
- 툴바 아이콘을 눌러 activeTab 권한이 부여되는 실제 흐름 (테스트는 로컬 주소 권한을 더한 복사본으로 함)
- 단어 상자의 실제 우클릭 메뉴 클릭 (처리 함수를 직접 호출해 확인)
- "공백으로 채워 복사"의 클립보드 복사
- 읽기 모드: 실제 뉴스·블로그 사이트와 iframe 페이지
- EUC-KR 바이트 수는 근사값
- 경쟁 확장의 사용자 수·평점 일부는 제3자 집계 사이트 기준이거나 "미확인"으로 표시
