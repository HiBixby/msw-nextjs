// src/mocks/index.ts
export const Sleep = (delay: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, delay));
async function initMSW() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");

    // 노드 환경에서 사용하는 Mock Server 옵션 추가
    return server.listen();
  } else {
    const { worker } = await import("./browser");

    // Service Worker Mocking 옵션 추가
    return worker.start();
  }
}

export { initMSW };
