
import { FramerProvider } from "@/providers/framer-provider";

const Providers = (props: { children: React.ReactNode }) => {
  return <FramerProvider>{props.children}</FramerProvider>;
};

export default Providers;
