
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export default function useInvoice() {

  const addInvoice = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "invoices"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error)
    }
  };

  return {
    addInvoice
  };
}
