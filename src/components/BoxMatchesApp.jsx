const BoxMatchesApp = ({ matches }) => {
  return (
    <span className="text-xl cursor-pointer">
      <b>{matches}</b> <i className="bi bi-box2-heart"></i>
    </span>
  );
};

export default BoxMatchesApp;
