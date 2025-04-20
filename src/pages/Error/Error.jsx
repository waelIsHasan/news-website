export default function Error() {
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
        Opps... I am Sorry , <strong>Server Side Error</strong>
      </h1>
    </div>
  );
}
