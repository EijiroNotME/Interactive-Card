export const formatCvcNumber = (value) => {
  if (!value) return ""; // Return an empty string if value is undefined or empty
  const cleanedValue = value.replace(/\s/g, ""); // Remove spaces
  const limitedValue = cleanedValue.slice(0, 4); // Limit to 6 digits
  return limitedValue.trim(); // Format with spaces
};
