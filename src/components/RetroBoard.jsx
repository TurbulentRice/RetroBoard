import StoryColumn from './StoryColumn'

// TODO
// Give StoryColumn access to state and have it pick out the stories relevant to it
function RetroBoard () {
  // const getWentWells = () => stories.filter(story => story.col === 1);
  // const getToImproves = () => stories.filter(story => story.col === 2);
  // const getActionItems = () => stories.filter(story => story.col === 3);

  // Column components
  return (
      <div className="container mt-5 p-0 mx-auto">
        <div className="row">

          {/* Went wells */}
          <StoryColumn title='What went well' colID={1}></StoryColumn>

          {/* To improves */}
          <StoryColumn title='To improve' colID={2}></StoryColumn>

          {/* Action items */}
          <StoryColumn title='Action items' colID={3}></StoryColumn>

        </div>
      </div>
  )
}

export default RetroBoard;