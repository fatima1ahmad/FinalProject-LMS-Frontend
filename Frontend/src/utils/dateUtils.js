// utils/dateUtils.js
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date(dateString).toLocaleDateString(undefined, options);
};
