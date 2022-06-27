function Slide({ mydata }) {
  return (
    <div className="slide-container" data-testid="slide">
      <h3 data-testid="title">{mydata.title}</h3>
      <p data-testid="description">{mydata.description}</p>
    </div>
  );
}

export default Slide;
