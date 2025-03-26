import "@testing-library/jest-dom";
import { expect, vi, test } from "vitest";
import { setupServer } from "msw/node";

globalThis.expect = expect;
globalThis.vi = vi;
globalThis.test = test;

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
