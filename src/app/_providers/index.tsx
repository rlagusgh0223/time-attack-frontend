import { AuthProvider } from "@/contexts/auth.context";
import { ReduxProvider } from "@/redux/store";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReduxProvider>
  );
}

export default Providers;
