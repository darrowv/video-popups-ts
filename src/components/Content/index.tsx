import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Timestamps from "../Timestamps";
import Video from "../Video";
import { fetchEvents } from "../../store/actions";

import "./content.css";

function Content() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <section className="content">
      <Video />
      <Timestamps />
    </section>
  );
}

export default Content;
