// 테스트 코드 작성 시 가장 먼저 작성해야 할 함수 - describe
// getValues에 대한 텍스트 코드

describe('텍스트 관리자 입니다.', () => {

  const textManager = new TextManager();

  it('텍스트 값을 가져옵니다.', () => {
    const initValue = textManager.getValue();
    // getValue가 가지고 있는건 Hello Lion
    expect(textManager.getValue()).toBe(initValue);
  });


  it('텍스트 값을 수정합니다', () => {
    const testValue = 'Hello Zebras';

    textManager.setValue(testValue);
    expect(textManager.getValue()).toBe(testValue);
  });
  
  

})