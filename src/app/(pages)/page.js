import Services from "@/components/services/Services";
import Heart from "@/components/heart/Heart";
import News from "@/components/news/News";
import Landing from "@/components/navbar/landing";
import Testimonies from "@/components/testimonies/testimonies";
import Form from "@/components/form/form";



export default function Home() {
  return (
    <main>
      <Landing />
      <Services />
      <Heart />
      <News />
      <Testimonies />
      <Form />
    </main>
  );
}