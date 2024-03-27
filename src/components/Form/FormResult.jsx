// eslint-disable-next-line react/prop-types
export default function FormResult({ style = {}, user = {} }) {
  console.log("in FormResult");

  return (
    <fieldset>
      <legend>Result</legend>
      <h4 style={style}>
        {user.name} {user.surname}
      </h4>
    </fieldset>
  );
}
