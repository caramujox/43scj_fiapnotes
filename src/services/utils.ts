import axios, { AxiosError } from "axios";

const options: Intl.DateTimeFormatOptions = {
  dateStyle: "short",
  timeStyle: "medium",
};

export const formatDate = (date: Date) =>
  Intl.DateTimeFormat("pt-br", options).format(date);

export const axiosErrorHandler = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
    alert("Erro ao integrar com a API, causa: " + error.message);
  } else {
    alert("Erro inesperado");
  }
};
