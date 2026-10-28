---
title: "2026-10-29 크롬 확장 5개 추가 (chrome-extension-factory 첫 묶음)"
layout: post
date: 2026-10-29 05:35:00 +0900
---

`chrome-extension-factory`에 크롬 확장 프로그램 5개를 처음으로 올렸습니다. 모두 Manifest V3이고, 데이터는 내 브라우저에만 저장됩니다.

| 분류 | 확장 | 해결하는 문제 | 차별점 | 경로 |
|---|---|---|---|---|
| 생산성 | 로컬 단축어 확장기 | 같은 문구를 매번 다시 치는 일 | 개수 제한·계정 없음, 한글 단축어 | [01-productivity/text-snippet-expander](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/01-productivity/text-snippet-expander) |
| 탭 관리 | 중복 탭 정리기 | 같은 페이지가 탭으로 쌓임 | 사이트 접근 권한 없음, 방금 닫은 탭 되살리기 | [02-tab-management/duplicate-tab-cleaner](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/02-tab-management/duplicate-tab-cleaner) |
| 북마크 | 북마크 중복 정리기 | 중복 북마크·빈 폴더 | 권한은 bookmarks 하나, 백업 저장 후에만 정리 | [03-bookmarks/bookmark-dedupe](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/03-bookmarks/bookmark-dedupe) |
| 메모 | 페이지 메모 | 페이지·사이트별 짧은 기억 | 전체 검색, txt/JSON 내보내기 | [04-note-taking/page-notes](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/04-note-taking/page-notes) |
| 웹 클리퍼 | 표 → CSV 저장기 | 표를 엑셀로 옮길 때 한글 깨짐 | BOM 기본, 수식 주입 방어, 행 제한 없음 | [05-web-clipper/table-to-csv-kr](https://github.com/jeong-jihyun/chrome-extension-factory/tree/main/05-web-clipper/table-to-csv-kr) |

커밋: [ee86a0b](https://github.com/jeong-jihyun/chrome-extension-factory/commit/ee86a0b65bf9038cd028212061f8e534a61847f3)

## 확인한 것
- 핵심 함수 단위 테스트 22개 통과
- 실제 크롬(Chromium)에 확장을 불러와 48개 항목 통과: 단축어 확장, 중복 탭 닫기와 되살리기, 북마크 백업과 정리, 메모 저장·검색·내보내기, 표 CSV 저장

## 미확인
- 한글 입력기로 조합 중일 때 단축어 Tab 확장
- 툴바 아이콘을 눌러 activeTab 권한이 부여되는 실제 흐름(표 → CSV, 페이지 메모). 테스트는 로컬 주소 권한을 더한 복사본으로 했습니다
- iframe 속 표, 북마크 수천 개 규모의 속도
- 크롬 웹 스토어 등록
- 경쟁 확장의 사용자 수와 평점은 BENCHMARK.md에 적었고, 읽지 못한 항목은 "미확인"으로 표시했습니다. 중복 탭·메모 분야는 기존 확장의 사용자 수가 모두 적어 수요 근거가 약합니다.
