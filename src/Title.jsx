import style from "./Project.module.css";

export const Title = ({ locked }) => {
  return (
    <h1 className={style.title}>
      {locked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
};
