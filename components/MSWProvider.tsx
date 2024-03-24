import { initMSW } from "@/mocks";
import { useEffect, useState } from "react";

function MSWProvider({ children }: { children: React.ReactNode }) {
  const mockingEnabled = !!process.env.NEXT_PUBLIC_API_MOCKING;
  const [shouldRender, setShouldRender] = useState(!mockingEnabled);

  useEffect(() => {
    if (mockingEnabled) {
      import("../mocks").then(async ({ initMSW }) => {
        await initMSW();
        setShouldRender(true);
      });
    }
  }, []);
  return shouldRender ? <>{children}</> : <>Loading mocks...</>;
}
export default MSWProvider;
