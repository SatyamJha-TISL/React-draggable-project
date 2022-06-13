const Header = ({ click, setClick, aligner, target, setTarget }) => {
  return (
    <div className="header">
      <div className="position">
        <p>Position</p>

        <div className="alignment">
          <input
            type="radio"
            id="huey"
            name="drone"
            value="huey"
            onClick={(e) => aligner(e)}
          />
          <label for="huey">Huey</label>

          <input
            type="radio"
            id="dewey"
            name="drone"
            value="dewey"
            onClick={() => setTarget("")}
          />
          <label for="dewey">Dewey</label>
        </div>
      </div>

      <p>Press Esc key to hide the window . Enter to show it again</p>
    </div>
  );
};

export default Header;
