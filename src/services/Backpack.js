import { useFetch } from "../hooks/fetch";

const useBackpack = () => {
  const { loading, error, clearError, request } = useFetch();

  const getStuffData = async () => {
    const res = await request("../database/stuff.json");
    console.log(res);
    return res;
  };

  return {
    loading,
    error,
    clearError,
    getStuffData,
  };
};

export default useBackpack;
