import "./index.css";

export function Header() {
  return (
    <header>
      <div className="headerLogo">
        <img
          src="./src/assets/icons/ChatGPT Image 23 апр. 2026 ., 19_49_36.png"
          alt="#"
        />
      </div>
      <div className="headerName">
        <h1>P L A C E P I C K E R</h1>
      </div>
      <div className="HeaderDescription">
        <p>
          Create your personal collection of placec you would like to visit of
          your have visited
        </p>
      </div>
    </header>
  );
}
