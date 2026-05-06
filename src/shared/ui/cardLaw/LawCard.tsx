import { Button } from "../button/Button";
import scss from "./LawCard.module.scss";
import { CiCalendar } from "react-icons/ci";

interface ILawCardProps {
  title: string;
  des: string;
  date?: Date;
}

export const LawCard: React.FC<ILawCardProps> = ({ date, des, title }) => {
  const formattedDate = date ? new Date(date).toLocaleDateString("ru-RU") : "";
  return (
    <div className={scss.law}>
      <div className={scss.date}>
        <CiCalendar />
        <p>{formattedDate}</p>
      </div>
      <h4>{title}</h4>
      <p>{des}</p>
      <Button text="Скачать PDF" variant="primary" />
    </div>
  );
};
