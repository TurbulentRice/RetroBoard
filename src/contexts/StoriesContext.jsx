import { createContext, useState } from 'react';
import { getTestStories } from '../lib/helpers';

export const StoriesContext = createContext();

export function StoriesProvider({ children }) {
  // Keep track of all stories in single array of objects, no inherent order, like bucket
  // Components will "pick out" stories relevant to them based on state/id
  // Function to remove one card with all matching fields
  const [stories, setStories] = useState(getTestStories());

  const addStory = newStory => setStories(currentStories => [newStory, ...currentStories]);
  const removeStory = storyToRemove => setStories(currentStories => currentStories.filter(story => story.id !== storyToRemove.id))
  const moveStory = (storyToMove, col) => setStories(currentStories => currentStories.map(currentStory => {
    return currentStory.id === storyToMove.id ? {...currentStory, col} : currentStory
  }));
  const saveStory = (storyToSave) => setStories(currentStories => currentStories.map(currentStory => {
    return currentStory.id === storyToSave.id ? { ...storyToSave} : currentStory;
  }));
  
  return (
    <StoriesContext.Provider value={{stories, addStory, removeStory, moveStory, saveStory}}>
      {children}
    </StoriesContext.Provider>
  )
}





