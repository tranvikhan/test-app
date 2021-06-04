import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

const useStore: any = () => {
  const { store } = useContext(MobXProviderContext);
  return store;
};

export default useStore;
