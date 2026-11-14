---
title: "2026-11-14 회의 분석 저장소 meeting-analysis 만들기"
layout: post
date: 2026-11-14 11:45:33 +0900
---

회의록과 음성 파일을 정리하고 회의 효율성을 계산하는 저장소 **meeting-analysis**를 만들어 GitHub에 올렸습니다.

## 올린 내용

| 위치 | 내용 | 커밋 |
|---|---|---|
| `scripts/analyze_meetings.py` | 회의록 txt를 읽어 평균 시간, 참석자 수, 효율지수, 주제 빈도 계산 (설치 없이 Python만) | 17030c7 |
| `docs/meeting-format.md` | 회의록 형식, 샘플 30건 생성 조건 | 17030c7 |
| `meetings/sample/` | 형식 확인용 샘플 회의록 3건 | 17030c7 |
| `audio/`, `transcripts/` | 음성(mp3 등)과 클로바노트 txt를 넣는 폴더 | 17030c7 |
| `README.md` | 폴더 구조, 어디에 무엇을 넣는지, 사용법 | 17030c7 |

## 효율지수

(결정사항 수 + 액션아이템 수) ÷ (회의 시간(시간) × 참석자 수)

샘플 3건으로 직접 계산해 확인했습니다. 3건 평균은 0.81입니다.

## 개인정보 보호

음성 파일, 클로바노트 원본, 분석 결과 CSV는 `.gitignore`로 GitHub에서 제외했습니다. 이 폴더들은 PC에만 남습니다.

## 미확인

- 클로바노트 txt를 이 형식으로 바꾸는 자동 변환은 아직 만들지 않았습니다.
- 샘플 30건 전체는 올리지 않았고 3건만 올렸습니다.

저장소: https://github.com/jeong-jihyun/meeting-analysis
