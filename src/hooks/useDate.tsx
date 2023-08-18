export const useDate = () => {
  function formatDateToMMDDYYYY(inputDate: Date): string {
    const date = new Date(inputDate);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = String(date.getFullYear());
    return `${mm}${dd}${yyyy}`;
  }

  return { formatDateToMMDDYYYY };
};
