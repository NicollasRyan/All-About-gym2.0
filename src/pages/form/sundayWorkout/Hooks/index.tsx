import {
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import { FormData } from "../../../../Hooks";

export const removeUndefinedFields = (obj: FormData) => {
  const cleanedObj: FormData = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      cleanedObj[key] = obj[key];
    }
  });
  return cleanedObj;
};

export const handleDeleteByField = async (field: any, value: any) => {
  try {
    const q = query(
      collection(db, "sunday_training"),
      where(field, "==", value)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docToDelete = querySnapshot.docs[0];
      const docRef = doc(db, "sunday_training", docToDelete.id);
      await updateDoc(docRef, {
        [field]: null,
      });
      console.log("Field successfully deleted!");
    } else {
      console.log("No matching documents found.");
    }
  } catch (error) {
    console.error("Error removing field: ", error);
  }
};
