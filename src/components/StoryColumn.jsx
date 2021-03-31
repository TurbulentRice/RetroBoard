import StoryCard from './StoryCard';
import { getNewStory } from '../lib/helpers'
// Receives stories, returns bootstrap col with cards
function StoryColumn ({ title, colID, stories, addStory }) {

  const handleAddStory = () => {
    // Launch modal to get input, create new story?

    // Or just make a new empty story object and add to StoryContext
    addStory(getNewStory({col: colID}));
  }

  const drop = event => {
    event.preventDefault();
    const droppedStory = event.dataTransfer.getData('object');
    console.log(droppedStory);
    // event.target.appendChild(document.getElementById(data))

    // Instead of dropping the action DOM element, we'll move the card
    // using state, by adding new story and filtering out(?)
    // addStory(droppedStory);

  }
  const allowDrop = event => event.preventDefault();

  return (
    <div className="col" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
      <h2 className="display-6">{title}</h2>

      <div className="d-grid gap-2">
        <button className="btn btn-sm btn-success mb-2" type='button' onClick={handleAddStory}>+</button>
      </div>
      
      {stories.map(story => <StoryCard story={story} key={story.id}></StoryCard>)}
      
    </div>
  )

}

export default StoryColumn;