/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBenchmark } from "./benchmark";
import { benchA, benchB, benchC, benchD } from "./deopt";
const benchmark = createBenchmark("example2");

const timeA = benchmark("A");
while (timeA()) {
  benchA();
}

const timeB = benchmark("B");
while (timeB()) {
  benchB();
}

const timeC = benchmark("C");
while (timeC()) {
  benchC();
}

const timeD = benchmark("D");
while (timeD()) {
  benchD();
}

benchmark.report();
