import Banner from "@/components/Banner";
import ListCards from "@/components/Body/Projetos/ListCards";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ListCards/>
    </div>
  );
}
