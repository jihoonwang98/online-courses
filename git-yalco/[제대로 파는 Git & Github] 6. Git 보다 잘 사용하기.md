# [제대로 파는 Git & Github] 6. Git 보다 잘 사용하기

> 사이트: https://inf.run/4Pro



- 목차
  - Help와 문서 활용하기
  - Git의 각종 설정



## 1. Help와 문서 활용하기

### (1) git help

- Git 사용 중 모르는 부분이 있을 때 도움을 받을 수 있는 기능



```shell
git help
```

- 기본적인 명령어들과 설명



```shell
git help -a
```

- Git의 모든 명령어들



```shell
git (명령어) -h
```

- 해당 명령어의 설명과 옵션 보기





## 2. Git의 각종 설정

### (1) global 설정과 local 설정

- config를 `--global`과 함께 지정하면 전역으로 설정됩니다.
  - 특정 프로젝트만의 `user.name`과 `user.email` 지정해보기



### (2) 설정값 확인

- 현재 모든 설정값 보기

```shell
git config (--global) --list
```



- 에디터에서 보기 (기본: vi)

```shell
git config (--global) -e
```



- 기본 에디터 수정 (VSCode로 수정)

```shell
git config --global core.editor "code --wait"
```

- 또는 `code` 자리에 원하는 편집 프로그램의 .exe 파일 경로 연결
- `--wait`: 에디터에서 수정하는 동안 CLI를 정지
- `git commit` 등의 편집도 지정된 에디터에서 열게 됨





### (3) 유용한 설정들

- 줄바꿈 호환 문제 해결

```shell
git config --global core.autocrlf (윈도우: true / 맥: input)
```



- `pull` 기본 전략 `merge` 또는 `rebase`로 설정

```shell
git config pull.rebase false
git config pull.rebase true
```



- 기본 브랜치명

```shell
git config --global init.defaultBranch main
```



- push시 로컬과 동일한 브랜치명으로

```shell
git config --global push.default current
```

