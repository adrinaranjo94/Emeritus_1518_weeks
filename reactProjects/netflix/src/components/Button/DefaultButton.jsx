const DefaultButton = (props) => {
  return (
    <button
      style={{
        ...props.style,
        borderRadius: "24px",
        padding: "8px 16px",
        cursor: "pointer",
      }}
    >
      {props.children}
    </button>
  );
};

export { DefaultButton };
