import { useContext } from 'react';
import { StoriesContext } from '../contexts/StoriesContext'
import StoryColumn from './StoryColumn'

// TODO
// Give StoryColumn access to state and have it pick out the stories relevant to it
function RetroBoard () {
  const { stories, setStories } = useContext(StoriesContext)

  const addStory = newStory => setStories(currentStories => [newStory, ...currentStories]);
  const removeStory = storyToRemove => setStories(currentStories => currentStories.filter(story => story.id !== storyToRemove.id))
  const getWentWells = () => stories.filter(story => story.col === 1);
  const getToImproves = () => stories.filter(story => story.col === 2);
  const getActionItems = () => stories.filter(story => story.col === 3);

  // Column components
  return (
      <div className="container mt-5 p-0">
        <div className="row">

          {/* Went wells */}
          <StoryColumn title='What went well' colID={1} stories={getWentWells()} addStory={addStory} removeStory={removeStory}></StoryColumn>

          {/* To improves */}
          <StoryColumn title='To improve' colID={2} stories={getToImproves()} addStory={addStory} removeStory={removeStory}></StoryColumn>

          {/* Action items */}
          <StoryColumn title='Action items' colID={3} stories={getActionItems()} addStory={addStory} removeStory={removeStory}></StoryColumn>

        </div>
      </div>
  )
}

export default RetroBoard;