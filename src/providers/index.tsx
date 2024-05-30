import { FramerProvider } from "@/providers/framer-provider";
import GoogleCaptchaWrapper from "@/providers/google-captcha";

const Providers = (props: { children: React.ReactNode }) => {
  return (
    <GoogleCaptchaWrapper>
      <FramerProvider>{props.children}</FramerProvider>;
    </GoogleCaptchaWrapper>
  );
};

export default Providers;
