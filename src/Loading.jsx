const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
)

export default Loading
