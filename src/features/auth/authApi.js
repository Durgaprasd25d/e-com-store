// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      // Handle fetch or JSON parsing errors here
      resolve({ error: error.message }); // Resolve with error message
    }
  });
}
