import { createContext, useState } from 'react';
import { getUID, getNow } from '../lib/helpers';

export const StoriesContext = createContext();

export function StoriesProvider({ children }) {
  // Keep track of all stories in single array of objects, no inherent order, like bucket
  // Components will "pick out" stories relevant to them based on state/id
  const [stories, setStories] = useState([
    {
      title: "Get new access token",
      id: getUID(),
      owner: "Louise Belcher",
      description: "Fix issue with multi-factor authentication",
      points: 3,
      col: 1,
      created: getNow()
    },
    {
      title: "Push code to production",
      id: getUID(),
      owner: "Louise Belcher",
      description: "Commit new changes and deploy to production server.",
      points: 2,
      col: 2,
      created: getNow()
    },
    {
      title: "Fix major security issue",
      id: getUID(),
      owner: "A Person",
      description: "Get that thing done",
      points: 6,
      col: 3,
      created: getNow()
    },
    {
      title: "Fix major security issue",
      id: getUID(),
      owner: "A Person",
      description: "Get that thing done",
      points: 6,
      col: 3,
      created: getNow()
    },
  ]);

  return (
    <StoriesContext.Provider value={{stories, setStories}}>
      {children}
    </StoriesContext.Provider>
  )
}