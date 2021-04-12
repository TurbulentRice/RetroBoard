import { createContext, useState } from 'react';
import { getTestStories } from '../lib/helpers';

export const StoriesContext = createContext();

export function StoriesProvider({ children }) {
  // Keep track of all stories in single array of objects, no inherent order, like bucket
  // Components will "pick out" stories relevant to them based on state/id
  // Function to remove one card with all matching fields
  const [stories, setStories] = useState(getTestStories());
  
  return (
    <StoriesContext.Provider value={{stories, setStories}}>
      {children}
    </StoriesContext.Provider>
  )
}





