import { LawCard } from "@/src/shared/ui/cardLaw/LawCard";
import scss from "./Law.module.scss";

const Law = () => {
  const data = [
    {
      id: 1,
      date: new Date(),
      title: "Закон “О молодёжи”",
      des: "Закон Кыргызской Республики №157",
    },
    {
      id: 2,
      date: new Date(),
      title: "Закон “О молодёжи”",
      des: "Закон Кыргызской Республики №157",
    },
    {
      id: 3,
      date: new Date(),
      title: "Закон “О молодёжи”",
      des: "Закон Кыргызской Республики №157",
    },
    {
      id: 4,
      date: new Date(),
      title: "Закон “О молодёжи”",
      des: "Закон Кыргызской Республики №157",
    },
  ];
  return (
    <div className={scss.lawSection}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>Законодательная база</h1>
          <div className={scss.law}>
            {data.map((law, index) => (
              <LawCard
                key={index}
                title={law.title}
                des={law.des}
                date={law.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;
