import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

export default function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      {props.children}
      <MainFooter />
    </>
  );
}
