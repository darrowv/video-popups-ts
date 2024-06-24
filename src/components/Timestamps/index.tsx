import { useDispatch, useSelector } from "react-redux";
import { setVideoPlaybackTime } from "../../store/actions";
import { RootState } from "../../store";
import formatTimestamp from "../../utils/formatTimestamp";
import { IEvent } from "../../utils/interfaces/event.interface";

import "./timestamps.css";

function Timestamps() {
  let events = useSelector((state: RootState) => state.events);
  let dispatch = useDispatch();

  const handleEventClick = (timestamp: number) => {
    dispatch(setVideoPlaybackTime(null));
    setTimeout(() => {
      dispatch(setVideoPlaybackTime(timestamp));
    }, 0);
  };

  return (
    <section className="timestamps">
      <h3>Timestamps</h3>
      <ul className="list">
        {events.map((event: IEvent) => {
          return (
            <li
              key={event.timestamp}
              onClick={() => handleEventClick(event.timestamp)}
            >
              {formatTimestamp(event.timestamp)}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Timestamps;
