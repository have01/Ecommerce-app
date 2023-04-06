import Login from "@features/auth/login";
import Meta from "../../../components/meta";
const index = () => {
  return (
    <>
      <Meta title="Login" description="Login page">
        <Login />
      </Meta>
    </>
  );
};

export default index;
