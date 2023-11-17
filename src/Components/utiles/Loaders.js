import { getAllProducts } from "../../Redux/Slices/CounterSlice";
import { store } from "../../Redux/Store/Store";

export const indexLoader = async () => {
   
  
   
      await store.dispatch(getAllProducts()).unwrap();
    
    return null;
  };