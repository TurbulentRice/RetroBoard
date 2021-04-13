import { getNewStory } from '../lib/helpers'
import { useDrop } from 'react-dnd';
import StoryCard from './StoryCard';
import { useContext } from 'react';
import { StoriesContext } from '../contexts/StoriesContext'

// Receives stories, returns bootstrap col with cards
function StoryColumn ({ title, colID }) {
  const { stories, addStory, moveStory } = useContext(StoriesContext)

  // Filter by col, Sort by points
  const cardStories = () => stories.filter(story => story.col === colID).sort((firstCard, secondCard) => {
    return secondCard.points - firstCard.points
  });

  // Make a new empty story object w/ colID and add to StoryContext
  const handleAddStory = () => addStory(getNewStory({col: colID}));

  // Accept drop
  const [{ isOver }, drop] = useDrop({
    accept: 'card',
    drop: (item, monitor) => {
      console.log(item)
      // "Move" story by changing associated colID
      moveStory(item, colID)
    }
    ,
    // Change this to change how items interact when hovering
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  return (
    <div className="col" ref={drop}>
      <h2 className="display-6">{title}</h2>

      <div className="d-grid gap-2">
        <button className="btn btn-sm btn-success mb-2" type='button' onClick={handleAddStory}>+</button>
      </div>
      
      {cardStories().map((story, index) => <StoryCard story={story} key={index}></StoryCard>)}
      
    </div>
  )
}

export default StoryColumn;