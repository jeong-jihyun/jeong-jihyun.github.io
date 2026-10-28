---
title: "2026-10-28 agent-team-bootstrap 릴리즈"
layout: post
---

## 한 줄 요약

새 프로젝트에 에이전트 팀을 처음 세팅할 때 쓰는 **분석 전용 서브에이전트**를 새 저장소로 올렸습니다. Claude Code와 opencode 둘 다 지원합니다.

## 반영 내용

| 저장소 | 바뀐 내용 | 커밋 |
|---|---|---|
| [agent-team-bootstrap](https://github.com/jeong-jihyun/agent-team-bootstrap) | 신규 저장소 생성. 분석 에이전트(Claude Code용, opencode용)와 사용법 README 추가 | db7fa5b |

## 어떤 에이전트인가

- 코드를 읽기만 하고 수정하지 못합니다.
- 구조, 실행/빌드/테스트 방법, 모듈 경계를 파악해서 보고서로 정리합니다.
- 프로젝트 크기에 맞는 역할 구성(developer, tester, reviewer 등)을 이유와 함께 제안합니다.

## 사용 순서

1. 쓰는 도구의 폴더(`.claude` 또는 `.opencode`)를 분석할 프로젝트에 복사
2. 세션을 새로 시작
3. 분석 요청 (Claude Code는 자연어, opencode는 `@project-analyzer`)
4. 보고서를 확인하고 고친 뒤 CLAUDE.md(opencode는 AGENTS.md)와 역할 파일 생성
5. 세션을 한 번 더 재시작하면 반영 완료

## 다음 계획

분석 보고서를 받아 CLAUDE.md와 역할별 에이전트 파일을 자동으로 만드는 "세팅 생성" 에이전트를 추가할 예정입니다.
