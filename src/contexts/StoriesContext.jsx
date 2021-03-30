import { createContext, useState } from 'react';

export const StoriesContext = createContext();

export function StoriesProvider({ children }) {
  // Unique ID generator
  // Got this from https://stackoverflow.com/a/21816636
  const getUID = () => Math.floor(100000 + Math.random() * 900000);

  // Keep track of all stories in single array of objects, no inherent order, like bucket
  // Components will "pick out" stories relevant to them based on state/id
  const [stories, setStories] = useState([
    {
      title: "Get new access token",
      id: getUID(),
      owner: "Louise Belcher",
      description: "Fix issue with multi-factor authentication",
      points: 3,
      state: 1
    },
    {
      title: "Push code to production",
      id: getUID(),
      owner: "Louise Belcher",
      description: "Commit new changes and deploy to production server.",
      points: 2,
      state: 2
    },
    {
      title: "Fix major security issue",
      id: getUID(),
      owner: "A Person",
      description: "Get that thing done",
      points: 6,
      state: 3
    },
    {
      title: "Fix major security issue",
      id: getUID(),
      owner: "A Person",
      description: "Get that thing done",
      points: 6,
      state: 3
    },
    
  ]);

  return (
    <StoriesContext.Provider value={{stories, setStories}}>
      {children}
    </StoriesContext.Provider>
  )
}