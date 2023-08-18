import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useUserData } from "./useUserData";
import { useDateContext } from "../Contexts/DateContext";

export const useFirebaseData = () => {
  const { selectedDate } = useDateContext();
  const [className, setClassName] = useState();
  const [description, setDescription] = useState();
  const { user } = useUserData();
  const [fullArray, setFullArray] = useState<DocumentData[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(queryAll, (snapshot) => {
      const temp: DocumentData[] = [];
      snapshot.forEach((doc) => {
        temp.push(doc as DocumentData);
      });
      setFullArray(temp);
    });
    return () => unsubscribe();
  }, [selectedDate]);
  const dbRef = collection(db, "Tasks");

  const addTask = () => {
    console.log(selectedDate);
    const data = {
      className: className,
      taskDate: selectedDate,
      taskDesc: description,
      userID: user?.uid,
    };
    addDoc(dbRef, data)
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const queryAll = query(
    collection(db, "Tasks"),
    where("taskDate", "==", selectedDate),
    where("userID", "==", user?.uid)
  );

  const loadAll = async () => {
    const querySnapshot = await getDocs(queryAll);
    const temp: DocumentData[] = [];
    try {
      querySnapshot.forEach((doc) => {
        temp.push(doc as DocumentData);
      });
    } catch (err) {
      console.log(err);
    }
    setFullArray(temp);
  };

  const deleteTask = async (id: string, index: number) => {
    try {
      const docRef = doc(db, "Tasks", id);
      await deleteDoc(docRef);
      const temp = [...fullArray];
      temp.splice(index, 1);
      setFullArray(temp);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    setClassName,
    setDescription,
    addTask,
    fullArray,
    loadAll,
    deleteTask,
  };
};
