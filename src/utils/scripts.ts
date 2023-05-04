export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`;
  return formattedDate;
};

export const convertToMB = (sizeBytes: number) => {
  const sizeInMB = sizeBytes / (1024 * 1024);
  return sizeInMB.toFixed(2); // retorna a string com duas casas decimais
};
