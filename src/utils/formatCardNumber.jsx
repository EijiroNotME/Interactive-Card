export const formatCardNumber = (value) => {
  if (!value) return ""; // Return an empty string if value is undefined or empty
  const cleanedValue = value.replace(/\s/g, ""); // Remove spaces
  const limitedValue = cleanedValue.slice(0, 16); // Limit to 16 digits
  return limitedValue.replace(/(\d{4})(?=\d)/g, "$1 ").trim(); // Format with spaces
};
