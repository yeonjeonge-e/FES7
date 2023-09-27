class ViewManager {

  constructor(textManager, options) {

      // textManager가 TextManager의 인스턴스가 아니라면
      if(textManager.constructor !== TextManager) {
        throw Error('textManager 객체가 아닌 다른것이 전달되었습니다');
      }

      // options로 전달받을 세 가지 요소중에 누락이 존재한다면
      if ( !options.inpTxt || !options.viewerEl || !options.btnEl) {
        throw Error('options에 필요한 요소 중 누락된 요소가 존재합니다');
      }

      this.inpTxt = options.inpTxt;
      this.viewerEl = options.viewerEl;
      this.textManager = textManager;

      // 1. options.btnEl 누르면 changeValue 실행
      options.btnEl.addEventListener('click', () => {
        this.changeValue();
      });
  }

  changeValue() {
    // input 요소에 사용자가 입력한 값을 가져와서 textManager가 관리하게 함
    // 2. textManager.setValue 실행
    this.textManager.setValue(this.inpTxt.value);
    // 3. updateView() 함수 실행
    this.updateView();
  }


  // textManager가 관리하는 값을 viewer에 적용함
  updateView() {
    // 화면을 업데이트 시키는 함수
    // 4. textManager가 관리하는 값으로 교체하는 일을 하고 있음
    this.viewerEl.textContent = this.textManager.getValue();
  }

}