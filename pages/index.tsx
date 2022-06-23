import Card from "../components/Card";
import Header from "../components/Header";

const style = {
  wrapper: `w-screen flex flex-col bg-[#35353b] pb-5`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
};
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.cardsContainer}>
        <Card />
      </div>
    </div>
  );
}
