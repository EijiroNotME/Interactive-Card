// Utility function to format strings
const formatString = (input) => {
  if (!input) return "";
  const cleanedInput = input.replace(/\s/g, "");
  return cleanedInput.slice(0, 2).trim();
};

//For Month format
export const formatMonth = (month) => formatString(month);

//For Year format
export const formatYear = (year) => formatString(year);
