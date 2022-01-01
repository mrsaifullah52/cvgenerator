import { useRouter } from "next/router";
import Edit from "../components/edit";
import Header from "../components/header";

const Cvform = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      <Header />
      {/* page: {page} */}
      <Edit />
    </>
  );
};

export default Cvform;
