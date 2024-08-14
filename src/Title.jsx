import style from "./Project.module.css";

export const Title = ({ locked }) => {
  return (
    <h1 className={style.title}>
      {locked ? "Limit! Buy Pro > 5" : "Fancy Counter"}
    </h1>
  );
};
