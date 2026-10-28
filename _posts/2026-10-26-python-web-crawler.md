---
title: "2026-10-26 Python 웹 크롤러 v4.0 GitHub 반영"
layout: post
date: 2026-10-26 21:51:18 +0900
---

도메인 내 전체 페이지를 마크다운으로 수집하는 Python 웹 크롤러 v4.0을 신규 저장소에 올렸다.

| 저장소 | 바뀐 내용 | 커밋 |
|--------|-----------|------|
| [python-web-crawler](https://github.com/jeong-jihyun/python-web-crawler) | 최초 커밋 — crawler.py, urls.txt, requirements.txt, README.md | 5f31425 |

주요 기능:
- BFS 탐색 + 멀티스레드 병렬 수집
- HTML → Markdown 변환 (iterative 파서, RecursionError 방지)
- Resume(중단 재시작), 스트리밍 저장
- wikidocs.net `javascript:page()` 링크 자동 변환
- 20/20 테스트 통과
