export const handleSubmit = (validation) => async (e) => {
  e.preventDefault();
  const isValid = validation();
  if (isValid) {
    console.log("Form is valid, proceed with submission.");
  }
};
