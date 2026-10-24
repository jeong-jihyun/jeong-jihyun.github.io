---
title: "2026-10-24 vitual-desktop 부팅 시 자동 실행 보완"
layout: post
---

전원이 들어와 부팅되면 원격제어 서버와 에이전트가 저절로 뜨도록 vitual-desktop을 보완했습니다.

| 저장소 | 바뀐 내용 | 커밋 |
| --- | --- | --- |
| vitual-desktop | 에이전트가 서버를 못 찾아도 죽지 않고 5초마다 재접속 | b427563 |
| vitual-desktop | 로그인 시 서버·에이전트를 작업 스케줄러에 등록하는 스크립트 `deploy/windows/register-tasks.ps1` 추가 | b427563 |
| vitual-desktop | 자동 로그인, 절전 끄기, Tailscale 접속 순서 안내서 `docs/boot-autostart.md` 추가 | b427563 |

미확인
- 에이전트 파이썬 파일은 문법 검사만 했습니다.
- PowerShell 스크립트와 설정 절차는 Windows에서 아직 실행해 보지 못했습니다.
- 로그인 화면 자체는 조작하지 못해서, 자동 로그인으로 그 단계를 없애는 방식입니다.
