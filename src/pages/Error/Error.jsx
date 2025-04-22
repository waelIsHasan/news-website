export default function Error({message = ''}) {
  const styleErrorPage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    width: "100%",
    height: "50vh",
  };
  return (
    <div className="error-page" style={styleErrorPage}>
      <h1>
        Opps..., <strong><i>{message}</i></strong>
      </h1>
    </div>
  );
}
