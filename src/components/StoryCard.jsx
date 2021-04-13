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
  created: Date
}
*/

function StoryCard ({ story }) {
  const { removeStory, saveStory } = useContext(StoriesContext);

  // Temporary story input data - initialized to shallow copy of story prop
  const [ editedStory, setEditedStory ] = useState({ ...story });
  const [ editMode, setEditMode ] = useState(false);

  const resetEditedStory = () => setEditedStory({ ...story });
  const handleEdit = () => {
    resetEditedStory();
    toggleEditMode();
  }
  const toggleEditMode = () => setEditMode(!editMode);
  const handleSave = event => {
    event.preventDefault();
    saveStory(editedStory);
    editMode && toggleEditMode();
  }

  // Points methods will use saveStory too
  const increasePoints = () => saveStory({...story, points: (story.points + 1) > 9 ? story.points : story.points + 1})
  const decreasePoints = () => saveStory({...story, points: (story.points - 1) < 0 ? story.points : story.points - 1})

  // Drag n drop stuff
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

  return (
    <div id={story.id}
      ref={drag}
      className="card text-start mb-3"
      draggable={true}
      // onDragStart={e => drag(e)}
      opacity={isDragging ? '0.5' : '1'}>

      {/* Header */}
      <div className="card-header d-flex justify-content-between"> 
        {`ID#${story.id}`}

        <label> {story.points}
            <button className="btn btn-sm m-0" style={{color: "green"}} onClick={increasePoints}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button className="btn btn-sm m-0" style={{color: "red"}} onClick={decreasePoints}>
              <i className="fas fa-arrow-down"></i>
            </button>
        </label>
            


        <div>
          <button type='submit' htmlFor={`edit-mode-form-${story.id}`} className="btn btn-sm btn-light p-0 me-2" onClick={handleSave}>
            <i className="fal fa-save"></i>
          </button>
          <button className="btn btn-sm btn-light p-0" onClick={handleEdit}>
            <i className="fal fa-edit"></i>
          </button>
        </div>
        
      </div>

      {!editMode

      // Normal mode card body
      ?
      
      <div className="card-body pt-1">
        <div className="row">
          <div className="col">
            <small className="card-text text-muted mb-1">{`Owner: ${story.owner}`}</small>
            <p className="card-text lead mb-1">{story.title}</p>
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