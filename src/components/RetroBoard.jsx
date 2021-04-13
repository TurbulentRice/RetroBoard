import StoryColumn from './StoryColumn'

function RetroBoard () {
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