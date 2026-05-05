import scss from "./LawCard.module.scss";
interface ILawCardProps {}

export const LawCard: React.FC<ILawCardProps> = ({}) => {
  return <div className={scss.law}></div>;
};
