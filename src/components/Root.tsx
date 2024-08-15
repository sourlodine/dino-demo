import { SDKProvider, useLaunchParams } from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TwaAnalyticsProvider } from "@tonsolutions/telemetree-react";
import { type FC, useEffect, useMemo } from "react";

import { App } from "@/components/App.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary.tsx";
import { APP_NAME, IS_PRODUCTION, MANIFEST_URL, TMA_URL } from "@/utils/config";

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === "string"
          ? error
          : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

const Inner: FC = () => {
  const debug = useLaunchParams().startParam === "debug";
  // const manifestUrl = M;

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <TwaAnalyticsProvider
      projectId="f3e336f0-31f4-4e8b-a943-8f03308f2798"
      apiKey="b89d1bb2-9bb2-405e-b534-3ced2869eb60"
      appName={APP_NAME}
    >
      <TonConnectUIProvider
        manifestUrl={MANIFEST_URL}
        actionsConfiguration={{
          twaReturnUrl: TMA_URL,
        }}
      >
        <SDKProvider acceptCustomStyles debug={debug}>
          <App />
        </SDKProvider>
      </TonConnectUIProvider>
    </TwaAnalyticsProvider>
  );
};

const InnerDev: FC = () => {
  const debug = useLaunchParams().startParam === "debug";
  // const manifestUrl = useMemo(() => {
  //   return new URL("tonconnect-manifest.json", window.location.href).toString();
  // }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
      <TonConnectUIProvider
        manifestUrl={MANIFEST_URL}
        actionsConfiguration={{
          twaReturnUrl: TMA_URL,
        }}
      >
        <SDKProvider acceptCustomStyles debug={debug}>
          <App />
        </SDKProvider>
      </TonConnectUIProvider>
  );
};

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    {IS_PRODUCTION ? <Inner /> : <InnerDev />}
  </ErrorBoundary>
);
