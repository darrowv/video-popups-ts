import { IZone } from "../../utils/interfaces/event.interface";

import "./popup.css";

function Popup({ zone }: { zone: IZone }) {
  let { width, height, top, left } = zone;

  return <div className="popup" style={{ width, height, top, left }} />;
}

export default Popup;
