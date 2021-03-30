import StoryCard from './StoryCard';
import { useContext } from 'react';
import { StoriesContext } from '../contexts/StoriesContext'

function RetroBoard () {
  /* story = {
      title: "",
      owner: ","
      descrption: "",
      points: Number,
    }

  */

  const { stories, setStories } = useContext(StoriesContext)

  const handleAddStory = (e) => {
    // Launch modal to get input, create new story

    // const newStory= [...stories, {title, owner, description, points}];
    // setStories(newStory);
  }

  const getWentWells = () => stories.filter(story => story.state === 1);
  const getToImproves = () => stories.filter(story => story.state === 2);
  const getActionItems = () => stories.filter(story => story.state === 3);


  // Column components
  return (
    
      <div className="container mt-5 p-0">
        <div className="row">
          <div className="col">
            <h2 className="display-6">What went well</h2>

            <div className="d-grid gap-2">
              <button className="btn btn-sm btn-success mb-2" type='button' onClick={e => handleAddStory(e)}>+</button>
            </div>

            
         
            
            {/* Went wells */}
            {getWentWells().map(wentWell => <StoryCard story={wentWell} key={wentWell.id}></StoryCard>)}
            
          </div>

          <div className="col">
            <h2 className="display-6">To improve</h2>
            <div className="d-grid gap-2">
              <button className="btn btn-sm btn-success mb-2" type='button' onClick={e => handleAddStory(e)}>+</button>
            </div>

            {/* To Improves */}
            {getToImproves().map(toImprove => <StoryCard story={toImprove} key={toImprove.id}></StoryCard> )}

          </div>

          <div className="col">
            <h2 className="display-6">Action items</h2>
            <div className="d-grid gap-2">
              <button className="btn btn-sm btn-success mb-2" type='button' onClick={e => handleAddStory(e)}>+</button>
            </div>

            {/* Action Items */}
            {getActionItems().map(actionItem => <StoryCard story={actionItem} key={actionItem.id}></StoryCard> )}

          </div>
        </div>
      </div>
  )
}

export default RetroBoard;