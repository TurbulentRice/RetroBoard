import { StoriesContext } from '../contexts/StoriesContext'
import { useState, useContext } from 'react';
/*
story = {
  title: "",
  owner: ","
  descrption: "",
  points: Number,
  id: Number
}
*/

function StoryCard ({ story }) {
  // This component needs access to setStories from RetroBoard
  const { setStories } = useContext(StoriesContext);
  const [ editMode, setEditMode ] = useState(false);

  // Edited stories stored here so as to not destroy original
  const [ editedStory, setEditedStory ] = useState({
    title: story.title,
    description: story.description
  });

  const handleStartEditing = () => {
    // popup modal?
    // change <p>s to controlled <input>s
    setEditMode(!editMode);
  }

  const handleEdit = () => {

  }

  // Since this won't change, we may not need it
  // This should be a side effect of first render!!
  // useEffect hook
  const createTime = new Date().toDateString();
  return ( !editMode ?
    <div className="card text-start mb-3">
      <div className="card-header d-flex justify-content-between"> 
        {`#${story.id}`}

        <div>
          <button className="btn btn-sm btn-light p-0" onClick={handleStartEditing}>
            <i className="fad fa-trash"></i>
          </button>
          <button className="btn btn-sm btn-light p-0" onClick={handleStartEditing}>
            <i className="fal fa-edit"></i>
          </button>
          
        </div>
        
      </div>
      <div className="card-body">
        <p className="card-text lead mb-1">{story.title}</p>
        <p className="card-text fs-6 text-muted mb-1">{`Owner: ${story.owner}`}</p>
        <p className="card-text">{story.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Created {createTime}</small>
      </div>
    </div>

    :

    <div className="card text-start mb-3">
      <div className="card-header d-flex justify-content-between"> 
        {`${story.owner} - #${story.id}`}

        <button className="btn btn-sm btn-light p-0" onClick={handleStartEditing}>
          <i className="fal fa-edit"></i>
        </button>
        
      </div>
      <div className="card-body">
        <input id="title"
          className="lead form-control mb-2"
          style={{textOverflow: 'ellipsis'}}
          placeholder={story.title}
          type="text"
          value={editedStory.title}
          onChange={e => setEditedStory({...editedStory, title: e.target.value})}></input>
        <textarea id="description"
          className="form-control"
          placeholder={story.description}
          type="text"
          value={editedStory.description}
          onChange={e => setEditedStory({...editedStory, description: e.target.value})}></textarea>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Created {createTime}</small>
      </div>
    </div>

  )
}

export default StoryCard;