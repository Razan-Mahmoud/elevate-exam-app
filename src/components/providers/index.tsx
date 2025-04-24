import NextAauthProvider from "./components/next-auth.provider";
import ReactQueryProvider from "./components/react-query-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <NextAauthProvider>{children}</NextAauthProvider>
    </ReactQueryProvider>
  );
}
