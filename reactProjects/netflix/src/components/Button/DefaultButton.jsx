const DefaultButton = (props) => {
  return (
    <button
      style={{
        ...props.style,
        borderRadius: "24px",
        padding: "8px 16px",
        cursor: "pointer",
      }}
      className={props.classes?.join(" ")}
    >
      {props.children}
    </button>
  );
};

export { DefaultButton };
