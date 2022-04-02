# [제대로 파는 Git & Github] 7. 프로답게 커밋 관리하기

> 사이트: https://inf.run/4Pro



- 목차
  - 어떻게 커밋하는게 좋을까요?
  - 보다 세심하게 스테이징하고 커밋하기
  - 커밋하기 애매한 변화 치워두기
  - 커밋 수정하기
  - 과거의 커밋들을 수정, 삭제, 병합, 분할하기



## 1. 어떻게 커밋하는게 좋을까요?

### (1) 커밋 시 권장사항

- 하나의 커밋에는 한 단위의 작업을 넣도록 합니다.
  - 한 작업을 여러 버전에 걸쳐 커밋하지 않습니다.
  - 여러 작업을 한 버전에 커밋하지 않습니다.
-  커밋 메시지는 어떤 작업이 이뤄졌는지 알아볼 수 있도록 작성합니다.



### (2) 커밋 메시지 컨벤션

- 널리 사용되는 커밋 메시지 작성 방식

```
type: subject

body (optional)
...
...
...

footer (optional)
```



- 예시

```
feat: 압축파일 미리보기 기능 추가

사용자의 편의를 위해 압축을 풀기 전에
다음과 같이 압축파일 미리보기를 할 수 있도록 함
 - 마우스 오른쪽 클릭
 - 윈도우 탐색기 또는 맥 파인더의 미리보기 창

Closes #125
```



- **Type**

| 타입     | 설명                                            |
| -------- | ----------------------------------------------- |
| feat     | 새로운 기능 추가                                |
| fix      | 버그 수정                                       |
| docs     | 문서 수정                                       |
| style    | 공백, 세미콜론 등 스타일 수정                   |
| refactor | 코드 리팩토링                                   |
| perf     | 성능 개선                                       |
| test     | 테스트 추가                                     |
| chore    | 빌드 과정 또는 보조 기능(문서 생성기능 등) 수정 |



- **Subject**: 커밋의 작업 내용 간략히 설명
- **Body**: 길게 설명할 필요가 있을 시 작성
- **Footer**
  - Breaking Point가 있을 때
  - 특정 이슈에 대한 해결 작업일 때



## 2. 보다 세심하게 스테이징하고 커밋하기

### (1) 내용 확인하며 hunk별로 스테이징하기

- Tigers 변경
  - manager: `Thanos`
  - coach: `Ronan`
  - 새 members: `Gamora`, `Nebula`
- Leopards 변경
  - manager: `Peter`
  - coach: `Rocket`
  - 새 members: `Drax`, `Groot`



- 아래 명령어로 hunk별 스테이징 진행

```shell
git add -p
```

- 옵션 설명을 보려면 `?`입력 후 엔터
- `y` 또는 `n`로 각 헝크 선택
- 일부만 스테이징하고 진행해보기
- `git status`와 소스트리로 확인



### (2) 변경사항을 확인하고 커밋하기

```shell
git commit -v
```

- `j`, `k`로 스크롤하며 내용 확인
- `git diff --staged`로 이번 커밋에 담길 변경사항들 확인 가능
- 커밋 후 남은 헝크를 다른 버전으로 커밋해보기



## 3. 커밋하기 애매한 변화 치워두기

### (1) 변경사항 만들기

- Tigers의 members에 `Stash` 추가
- `tomcats.yaml` 추가 후 add

```yaml
team: Tomcats

coach: Apache
```



### (2) 아래 명령어로 치워두기

```shell
git stash
```

- `git stash save`와 같음



### (3) 원하는 시점, 브랜치에서 다시 적용

```shell
git stash pop
```



### (4) 원하는 것만 stash 해보기

- Leopards의 members에 `Stash2` 추가
- Jaguars의 members에 `Stash3` 추가
- 아래 명령어로 `Stash2`만 선택하여 스태시

```shell
git stash -p
```



### (5) 메시지와 함께 스태시

```shell
git stash -m 'Add Stash3'
```



### (6) 스태시 목록 보기

```shell
git stash list
```

- 리스트 상의 번호로 `apply`, `drop`, `pop` 가능
  - ex) `git stash apply stash@{1}`
- apply: 스태시 적용하고 삭제하진 않음
- pop: 스태시 적용과 동시에 삭제
- drop: 스태시 삭제



### Stash 사용법 정리

| 명령어                        | 설명                                          | 비고                           |
| ----------------------------- | --------------------------------------------- | ------------------------------ |
| git stash                     | 현 작업들 치워두기                            | 끝에 save 생략                 |
| git stash apply               | 치워둔 마지막 항목(번호 없을 시) 적용         | 끝에 번호로 항목 지정 가능     |
| git stash drop                | 치워둔 마지막 항목(번호 없을 시) 삭제         | 끝에 번호로 항목 지정 가능     |
| git stash pop                 | 치워둔 마지막 항목(번호 없을 시) 적용 및 삭제 | apply + drop                   |
| 💡 git stash branch (브랜치명) | 새 브랜치를 생성하여 pop                      | 충돌사항이 있는 상황 등에 유용 |
| git stash clear               | 치워둔 모든 항목들 비우기                     |                                |





## 4. 커밋 수정하기

### (1) 커밋 메시지 변경

- Panthers의 members에 `Hoki` 추가하고 스테이지
- 커밋 메시지: `횻홍`
- 아래 명령어로 에디터 열어 커밋 메시지 변경

```shell
git commit --amend
```

- 커밋 메시지: `Add a member to Panthers`



### (2) 커밋에 변화 추가

- Pumas의 members에 `Poki` 추가하고 스테이지
- `git commit --amend`로 마지막 커밋에 포함
- 커밋 메시지 아무렇게나 변경



### (3) 커밋 메시지 한 줄로 변경

```shell
git commit --amend -m 'Add members to Panthers and Pumas'
```





## 5. 과거의 커밋들을 수정, 삭제, 병합, 분할하기

### (1) git rebase -i (대상 바로 이전 커밋)

- 과거 커밋 내역을 다양한 방법으로 수정 가능

| 명령어    | 설명               |
| --------- | ------------------ |
| p, pick   | 커밋 그대로 두기   |
| r, reword | 커밋 메시지 변경   |
| e, edit   | 수정을 위해 정지   |
| d, drop   | 커밋 삭제          |
| s, squash | 이전 커밋에 합치기 |



### (2) 다음의 수정사항들 진행해보기

1. `횻홍`을 `버그 수정`으로 변경
   - `r` 명령어 사용

2. `뻘짓` 커밋 삭제
   - `d` 명령어 사용

3. 결전의 찜질망 항목들 합치기

   - 첫 항목 뒤로 `s` 명령어 사용

   - 메시지 수정 후 저장

4. `캐릭터 귤맨 추가`, `시작메뉴 디자인 변경` 항목 나누기

   - `e` 명령어로 수정 시작

   - `git reset HEAD~`

   - 변화들을 따로 스테이지 및 커밋

   - `git rebase --continue`