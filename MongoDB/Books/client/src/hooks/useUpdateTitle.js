import { useEffect, useContext } from 'react';
import TitleContext from '../context/TitleContext'; // Import your TitleContext

// Custom hook to update the title
const useUpdateTitle = (newTitle) => {
  const { setTitle } = useContext(TitleContext); // Get the setTitle function from context

  useEffect(() => {
    setTitle(newTitle); // Update the title when the component mounts
  }, [newTitle, setTitle]); // Re-run when newTitle changes
};

export default useUpdateTitle;
