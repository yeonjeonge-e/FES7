class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.cola-list');
        // ColaGenerator로 생성되는 인스턴스
        // console.log(this);
    }

    // 2. setup()
    // 콜라 객체를 초기화
    async setup() {
        const response = await this.loadData();
        // loadData() 가 받아질 때 까지는 await
        // console.log(response);
        // 비동기 부분
        this.colaFactory(response);
        // 4. response 가 colaFactory 로 들어감
        // response 로드 데이터를 통해 받아온 값
    }

    // 3.
    // 콜라 관련 데이터를 로드
    async loadData() {
        // loadData : 함수명

        try {
            const response = await fetch('./items.json');
            //  items.json 를 비동기로 가져옴
            //  await : 값이 나올때 까지 기다림 - 값이 나오기 전까지는 올스탑

            if (!response.ok) {
                throw new Error('HTTP ERROR!! :' + response.status);
                //  throw 로 던지면 catch가 받음
                //  if문 조건을 만족하면 에러 뿜어내고, 아니면 캐치문으로 고
            }
            // console.log(response);
            return await response.json();   //  json 형태로 반환 해야함. 그래야 이해가 됨
            //  json() : js 객체로 바꿔져 있는 값을 promise로 반환
            //          promise 객체를 반환하는 메서드 -> 비동기 동작
            //  response.json() : promise를 반환 -> await 를 써야함 --- 기다려야함
            // promise를 반환 --- 객체를 반환(resolve) 한다는 말 === data
        } catch (error) {
        // ('HTTP ERROR!! :' + response.status) 이 에러가 error로 들어감
        console.error('콜라데이터를 로딩하는중에 문제가 발생했습니다. :' + error);
        }
    }

    // <li>
    //       <!-- JS : 클래스 on 유/무 제어 -->
    //           <button type="button" class="btn-cola on">
    //     <img src="./img/cola-original.png" alt="" />
    //     <span class="cola-name">Original_Cola</span>
    //     <strong class="cola-price">1000원</strong>
    // </button>
    //     </li>

    // 5.
    // 콜라의 템플릿 코드입니다.
    colaFactory(data) {
        const docFrag = new DocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
            <img src="./img/${el.img}" alt="${el.name}" />
            <span class="cola-name">${el.name}</span>
            <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;
            // ${el.name} 에 쌍 따옴표를 붙인 이유 - 문자열 데이터라서 !

            item.innerHTML = itemTemplate;
            docFrag.append(item);
        });

        this.itemList.append(docFrag);
    }
}
export default ColaGenerator;