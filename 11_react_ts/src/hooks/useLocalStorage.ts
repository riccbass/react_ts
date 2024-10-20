import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initalValue: T
): [T, (value: T) => void] {
  //quando eu quiser pegar o valor, vai ser um generic (T) mas para adicionar não retorna nada,
  //ele retorna dois valores, por isso dois tipos de retorno

  //tem essa syntax estranha pq vai iniciar buscando no local storage o item
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initalValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setValue(storedValue);
  }, []);

  return [storedValue, setValue];
}
