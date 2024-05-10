import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Opps !!!</h1>
      <h4>Something fishyyyy</h4>
      <h6>
        {err.status}:{err.statusText}
      </h6>
    </div>
  );
};

export default Error;
