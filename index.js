import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Luiz","11122233309");
const cliente2 = new Cliente("Alice","88822233309");

const ContaCorrenteLuiz = new ContaCorrente(cliente1,1001);

ContaCorrenteLuiz.depositar(500);

const conta2 = new ContaCorrente(cliente2,102);

ContaCorrenteLuiz.transferir(200,conta2);

console.log(ContaCorrenteLuiz);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);