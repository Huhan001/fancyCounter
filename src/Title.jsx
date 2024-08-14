import style from "./Project.module.css";

export const Title = ({ locked }) => {
  return (
    <h1 className={style.title}>
      {locked ? "Reached your Limit > 5" : "Fancy Counter"}
    </h1>
  );
};
