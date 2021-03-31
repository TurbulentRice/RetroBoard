import { StoriesContext } from '../contexts/StoriesContext'
import { useState, useContext } from 'react';
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
  // This component needs access to setStories from RetroBoard
  const { setStories } = useContext(StoriesContext);
  const [ editMode, setEditMode ] = useState(false);
  // Edited stories stored here so as to not destroy original
  // Initialize to story prop
  const [ editedStory, setEditedStory ] = useState({ ...story });

  const resetEditedStory = () => setEditedStory({ ...story });

  // change <p>s to controlled <input>s
  const toggleEditMode = () => {
    setEditMode(!editMode);
    // also remove any changes made to editedStory
    // reset && resetEditedStory();
  };

  const handleEdit = () => {
    resetEditedStory();
    toggleEditMode();
  }

  // Save editedStory as new story
  const handleSave = event => {

    event.preventDefault();
    setStories(currentStories => {
      return currentStories.map(currentStory => {
        return currentStory.id === story.id 
          ? { ...editedStory }
          : currentStory;
      })
    })
    editMode && toggleEditMode();
  }

  // Filter this story out of state via updater function
  const handleRemove = () => setStories(currentStories => currentStories.filter(currentStory => currentStory.id !== story.id));

  const drag = event => {
    event.dataTransfer.setData('object', story)
  }

  return (
    <div id={story.id}
      className="card text-start mb-3"
      draggable={true}
      onDragStart={e => drag(e)}>

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

      {/* Change out card Body depending on editMode */}
      {!editMode ? 
      <div className="card-body pt-1">
        <small className="card-text text-muted mb-1">{`Owner: ${story.owner}`}</small>
        <p className="card-text lead mb-1">{story.title}</p>
        <p className="card-text">{story.description}</p>
      </div>

      // Edit Mode
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
        <button className="btn btn-sm btn-light p-0" onClick={handleRemove}>
          <i className="fad fa-trash"></i>
        </button>
      </div>

    </div>

  )
}

export default StoryCard;