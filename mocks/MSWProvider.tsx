import { useEffect, useState } from "react";

function MSWProvider({ children }: { children: React.ReactNode }) {
  const mockingEnabled = process.env.NODE_ENV === "development";
  const [shouldRender, setShouldRender] = useState(!mockingEnabled);

  useEffect(() => {
    if (mockingEnabled) {
      import(".").then(async ({ initMSW }) => {
        await initMSW();
        setShouldRender(true);
      });
    }
  }, []);
  return shouldRender ? <>{children}</> : <>Loading mocks...</>;
}
export default MSWProvider;
