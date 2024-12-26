// localStorageService.ts

// Save user data in localStorage
export const saveUserData = (data: any) => {
    try {
      localStorage.setItem('userData', JSON.stringify(data)); // Store the data as a JSON string
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };
  
  // Retrieve user data from localStorage
  export const getUserData = (): any => {
    try {
      const userData = localStorage.getItem('userData');
      console.log(userData);
      return userData ? JSON.parse(userData) : null; // Return parsed data or null if not available
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return null;
    }
  };
  
  
  // Remove user data from localStorage
  export const removeUserData = () => {
    try {
      localStorage.removeItem('userData');
    } catch (error) {
      console.error("Error removing user data:", error);
    }
  };
  