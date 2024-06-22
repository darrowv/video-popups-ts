import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, setVideoTimestamp } from "../../store/actions";
import { RootState } from "../../store";
import formatTimestamp from "../../utils/formatTimestamp";
import { IEvent } from "../../utils/interfaces/event.interface";

import "./timestamps.css";
import { useEffect } from "react";

function Timestamps() {
  const events = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleEventClick = (timestamp: number) => {
    dispatch(setVideoTimestamp(null));
    setTimeout(() => {
      dispatch(setVideoTimestamp(timestamp));
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
