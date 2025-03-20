/// <reference types="vitest" />

import { expect, vi, test, Mock } from "vitest";

declare global {
  // @ts-ignore
  var expect: typeof expect;
  // @ts-ignore
  var vi: typeof vi;
  // @ts-ignore
  var test: typeof test;
  // @ts-ignore
  var it: typeof it;
  // @ts-ignore
  var beforeAll: typeof beforeAll;
  // @ts-ignore
  var afterAll: typeof afterAll;
}
