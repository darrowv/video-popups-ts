import Timestamps from "../Timestamps";
import Video from "../Video";

import "./content.css";

function Content() {
  return (
    <section className="content">
      <Video />
      <Timestamps />
    </section>
  );
}

export default Content;
