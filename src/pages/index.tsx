import AboutDescription from "components/AboutDescription";
import SectionHome from "components/Home";
import SectionProject from "components/SectionProject/MainProject";

export default function Home() {
  return (
    <>
      <SectionHome />
      <AboutDescription />
      <SectionProject />
    </>
  );
}
