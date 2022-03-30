# [제대로 파는 Git & Github] 1. Git 시작하기

> 사이트: https://inf.run/4Pro



- 목차
  - Git을 배워야 하는 이유
  - 강의를 위한 설치와 세팅
  - CLI vs GUI. 무엇을 사용해야 할까요?
  - Git 설정 & 프로젝트 관리 시작하기
  - Git에게 맡기지 않을 것들



## 1) Git을 배워야 하는 이유

- Git이란?
  - VCS(Version Control System)의 한 종류
  - 프로그램의 버전 관리를 위한 툴
    - 여기서의 **버전 관리**란? -> 프로젝트의 시간과 차원을 관리하는 것을 의미함
    - 프로그래머들이 시간 여행을 하고 여러 차원을 넘나들 수 있게 해준다.
- 시간 여행
  - 프로그래밍을 해서 소프트웨어를 만들면 대부분 그 첫 결과물에서 완성되지 않는다.
    - 새 기능을 넣고 오류를 수정하고 성능을 개선하면서 새로운 버전들이 계속 나오게 된다.
  - 이때, 했던 작업을 취소해야 하는 경우들이 있을 수 있다.
    - 예를 들어, 버전 5에 추가한 기능에 결함이 있어서 버전 4로 되돌아 가야 하는 경우가 있다.
- 차원 넘나들기



## 2) 강의를 위한 설치와 세팅

>  https://www.yalco.kr/@git-github/1-3/

- 맥은 기본적으로 Git 설치되어 있음. 아래 명령어로 버전 확인

  ```shell
  git --version 
  ```

- Git, SourceTree, iterm2 설치 



## 3) CLI vs GUI. 무엇을 사용해야 할까요?



## 4) Git 설정 & 프로젝트 관리 시작하기



### (1) Git 최초 설정

#### Git 전역으로 사용자 이름과 이메일 주소 설정하기

- <u>GitHub 계정과는 별개임.</u>



- 아래의 명령어들로 이름 및 이메일 설정

```shell
git config --global user.name "(본인 이름)"
git config --global user.email "(본인 이메일)"
```



- 아래의 명령어들로 확인

```shell
git config --global user.name
git config --global user.email
```



#### 기본 브랜치명 변경

```shell
git config --global init.defaultBranch main
```





### (2) 프로젝트 생성 & Git 관리 시작하기

- 적당한 위치에 원하는 이름으로 폴더를 생성
- 해당 폴더에서 `git init` 명령어 입력
  - 폴더에 숨김모드로 `.git` 폴더 생성 확인
  - 이 폴더 안에 Git 관리 내역이 저장된다.
  - (참고) 맥에서 숨김 파일 보기: command + shift + .
- 아래의 파일들 생성

**tigers.yaml**

```yaml
team: Tigers

manager: John

members:
- Linda
- William
- David
```



**lions.yaml**

```yaml
team: Lions

manager: Mary

members:
- Thomas
- Karen
- Margaret
```



- 터미널에 `git status` 입력

```shell
 mojo@MOJO-EX-MAC  ~/Documents/Practice/git-prac   master  git status
현재 브랜치 master

아직 커밋이 없습니다

추적하지 않는 파일:   
  (커밋할 사항에 포함하려면 "git add <파일>..."을 사용하십시오)
	lions.yaml
	tigers.yaml

커밋할 사항을 추가하지 않았지만 추적하지 않는 파일이 있습니다 (추적하려면 "git add"를 사용하십시오)
```

- lions.yaml, tigers.yaml 얘네들이 지금 Git으로 관리되고 있지 않은데 관리할까요??



## 5) Git에게 맡기지 않을 것들

### (1) Git의 관리에서 특정 파일/폴더를 배제해야 할 경우

- 포함할 필요가 없을 때
  - 자동으로 생성 또는 다운로드되는 파일들 (빌드 결과물, 라이브러리 등) -> 용량이 커지니깐 포함하지 않는게 좋다.
- 포함하지 말아야 할 때
  - 보안상 민감한 정보를 담은 파일들
- 이러한 파일들을 `.gitignore` 파일을 사용해서 배제할 요소들을 지정할 수 있다.



### (2) .gitignore 사용해보기

- 폴더에 아래 파일 생성

**secrets.yaml**

```yaml
id: admin
pw: 1234abcd
```



- `git status`로 상태 확인
- `.gitignore` 파일 생성 후 안에 secrets.yaml 적은 후에 다시 상태 확인 (git status)



### (3) .gitignore 형식

https://git-scm.com/docs/gitignore 참조



```
# 이렇게 #를 사용해서 주석

# 모든 file.c
file.c

# 최상위 폴더의 file.c
/file.c

# 모든 .c 확장자 파일
*.c

# .c 확장자지만 무시하지 않을 파일
!not_ignore_this.c

# logs란 이름의 파일 또는 폴더와 그 내용들
logs

# logs란 이름의 폴더와 그 내용들
logs/

# logs 폴더 바로 안의 debug.log와 .c 파일들
logs/debug.log
logs/*.c

# logs 폴더 바로 안, 또는 그 안의 다른 폴더(들) 안의 debug.log
logs/**/debug.log
```









