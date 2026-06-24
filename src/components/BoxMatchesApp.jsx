const BoxMatchesApp = ({ matches, funcShow }) => {
  return (
    <span className="text-xl cursor-pointer" onClick={() => funcShow(true)}>
      <b>{matches}</b> <i className="bi bi-box2-heart"></i>
    </span>
  );
};

export default BoxMatchesApp;
