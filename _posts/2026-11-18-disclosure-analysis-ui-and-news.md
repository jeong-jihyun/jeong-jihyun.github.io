---
title: "2026-11-18 Disclosure Analysis 화면 개편과 첫 화면 뉴스"
layout: post
date: 2026-11-18 21:18:20 +0900
---

**한 줄 요약:** 공시 분석 사이트(Disclosure Analysis)의 메뉴·로고·색을 바꾸고, 첫 화면에 최근 동향 뉴스를 넣었습니다.

| 바뀐 내용 | 커밋 |
|---|---|
| 하단 메뉴를 상단 메뉴로 이동, 상단바 그라데이션, 사이트명 Disclosure Analysis | 3a5e6b3 |
| 그라데이션을 녹색→파랑으로, 로고를 체크박스 모양으로 변경 | f4434fe |
| 배포 속도 개선: 받아 둔 DART 회사 목록을 일주일간 재사용 (빌드 약 4분 → 1분) | 290c6da |
| 상단 메뉴의 이모지 아이콘 제거 | 24bc3f7 |
| 가상 데모 기업 목록 삭제, 검색 안내와 예시 검색어 추가 | cf52553 |
| 첫 화면에 최근 동향 뉴스 추가 (시장·공시 전반, 최근 3일, 구글 뉴스) | e6e60ef |

- 저장소: [disclosure-analyzer](https://github.com/jeong-jihyun/disclosure-analyzer)
- 사이트: [disclosure-analyzer.vercel.app](https://disclosure-analyzer.vercel.app)

**미확인:** 첫 화면 뉴스는 작업 환경에서 구글 뉴스에 접속할 수 없어, 실제 기사 표시는 배포 뒤 폰에서 확인이 필요합니다.
