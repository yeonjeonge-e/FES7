import ColaGenerator from "./js/colaGenerator.js";
// [2번]
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
// 1. 생성
await colaGenerator.setup();
// 2. setup()

// [6번]
const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();