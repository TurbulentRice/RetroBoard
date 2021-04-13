import { StoriesContext } from '../contexts/StoriesContext'
import { useState, useContext } from 'react';
import { useDrag } from 'react-dnd';
/*
story = {
  title: "",
  owner: ","
  descrption: "",
  points: Number,
  id: Number,
  col: Number,
  row: Number,
  created: Date
}
*/

function StoryCard ({ story }) {
  const { removeStory, saveStory } = useContext(StoriesContext);

  // Temporary story input data - initialized to shallow copy of story prop
  const [ editedStory, setEditedStory ] = useState({ ...story });
  // Changes <p>s to controlled <input>s to update editedStory
  const [ editMode, setEditMode ] = useState(false);

  // Points methods will just use saveStory
  const increasePoints = () => saveStory({...story, points: (story.points + 1) > 9 ? story.points : story.points + 1})
  const decreasePoints = () => saveStory({...story, points: (story.points - 1) < 0 ? story.points : story.points - 1})

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: {
      type: 'card',
      id: story.id
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const resetEditedStory = () => setEditedStory({ ...story });
  const handleEdit = () => {
    resetEditedStory();
    toggleEditMode();
  }
  const toggleEditMode = () => setEditMode(!editMode);

  // const saveStory = (storyToSave) => setStories(currentStories => currentStories.map(currentStory => {
  //   return currentStory.id === storyToSave.id ? { ...storyToSave} : currentStory;
  // }));
  const handleSave = event => {
    event.preventDefault();
    saveStory(editedStory);
    editMode && toggleEditMode();
  }

  return (
    <div id={story.id}
      ref={drag}
      className="card text-start mb-3"
      draggable={true}
      // onDragStart={e => drag(e)}
      opacity={isDragging ? '0.5' : '1'}>

      {/* Header */}
      <div className="card-header d-flex justify-content-between"> 
        {`#${story.id}`}

        <div>
          <button type='submit' htmlFor={`edit-mode-form-${story.id}`} className="btn btn-sm btn-light p-0 me-2" onClick={handleSave}>
            <i className="fal fa-save"></i>
          </button>
          <button className="btn btn-sm btn-light p-0" onClick={handleEdit}>
            <i className="fal fa-edit"></i>
          </button>
        </div>

      </div>

      {

      !editMode

      // Normal mode card body
      ?
      
      <div className="card-body pt-1">
        <div className="row">
          <div className="col-8">
            <small className="card-text text-muted mb-1">{`Owner: ${story.owner}`}</small>
            <p className="card-text lead mb-1">{story.title}</p>
          </div>
          <div className="col-1">
            <h4 className="card-text lead mt-3">{story.points}</h4>
          </div>
          <div className="col-1">

            <button className="btn btn-sm" style={{color: "green"}} onClick={increasePoints}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button className="btn btn-sm" style={{color: "red"}} onClick={decreasePoints}>
              <i className="fas fa-arrow-down"></i>
            </button>

          </div>
        </div>
        <p className="card-text">{story.description}</p>
      </div>

      // Edit Mode card body
      :
      
      <div className="card-body">
        <form id={`edit-mode-form-${story.id}`} className="form-group" onSubmit={e => handleSave(e)}>

          {/* Need this to enable submit on return press */}
          <input type="submit" style={{display: 'none'}} />

          <input id={`owner-${story.id}`}
            className="form-control mb-2"
            placeholder={story.owner || 'Owner'}
            value={editedStory.owner}
            onChange={e => setEditedStory({...editedStory, owner: e.target.value})}>
          </input>

          <input id={`title-${story.id}`}
            className="lead form-control mb-2"
            style={{textOverflow: 'ellipsis'}}
            placeholder={story.title || 'Title'}
            type="text"
            value={editedStory.title}
            onChange={e => setEditedStory({...editedStory, title: e.target.value})}>
          </input>

          <textarea id={`description-${story.id}`}
            className="form-control"
            rows='4'
            placeholder={story.description || 'Description'}
            type="text"
            value={editedStory.description}
            onChange={e => setEditedStory({...editedStory, description: e.target.value})}>
          </textarea>

        </form>
      </div>
      }

      {/* Footer */}
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Created {story.created}</small>
        <button className="btn btn-sm btn-light p-0" onClick={() => removeStory(story)}>
          <i className="fad fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default StoryCard;