describe('클릭 이벤트와 뷰 화면을 처리하는 클래스입니다.', () => {
  it('viewManager에 TextManager의 인스턴스가 잘 전달되었는지 확인합니다.', () => {

    const btnEl = document.createElement('button');
    const inpTxt = document.createElement('input');
    const viewerEl = document.createElement('strong');
    const textManager = null;

    // 유닛 테스트에서의 actual은 테스트 중인 함수 혹은 코드의 반환 값을 의미하는 용어입니다
    const actual = () => new ViewManager(testManager, {btnEl, inpTxt, viewerEl});
    // new ViewManager 실행한 결과는 결국 인스턴스 === actual

    // 코드에서 실제로 에러가 발생하고 있는지 검증합니다
    expect(actual).toThrowError();
  });


  const textManager = new TextManager();
  const btnEl = document.createElement('button');
  const inpTxt = document.createElement('input');
  const viewerEl = document.createElement('strong');

  it('viewManager 에 option들이 제대로 전달 되었는지button다.', () => {

    // 특정한 객체의 함수를 감시합니다.
    SVGPolygonElement(viewManager, 'changeValue');
    btnEl.click();

    // toHaveBeenCalled : 특정 함수가 호출이 된적이 있는지 판별합니다
    expect(viewManager.changeValue).toHaveBeenCalled();

  });

  it('updateView 함수가 실행되었는지 확인합니다', () => {
    SVGPolygonElement(viewManager, 'updateView');
    viewManager.changeValue();
    expect(viewManager.updateValue).toHaveBeenCalled();
  });
  
  
});