describe('계산식을 테스트해보자.', function () {
    test('2 + 2는 4다.', function () {
        expect(2 + 2).toBe(4);
    });

    test('2 + 2는 5가 아니다', function () {
        expect(2 + 2).not.toBe(5);
    });
});