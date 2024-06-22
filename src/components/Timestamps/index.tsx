import { useEffect, useState } from "react";
import "./timestamps.css";
import formatTimestamp from "../../utils/formatTimestamp";
import { IEvent } from "../../utils/interfaces/event.interface";

function Timestamps() {
  let [timestamps, setTimestamps] = useState<number[]>([]);

  useEffect(() => {
    async function getData() {
      let req = await fetch(
        "https://run.mocky.io/v3/d5dea963-2802-4856-9cab-378fdba1283d",
      );

      let data: IEvent[] = await req.json();

      setTimestamps(data.map((event) => event.timestamp));
    }

    getData();
  }, []);

  return (
    <section className="timestamps">
      <h3>Timestamps</h3>
      <ul className="list">
        {timestamps.map((ts) => {
          return <li key={ts}>{formatTimestamp(ts)}</li>;
        })}
      </ul>
    </section>
  );
}

export default Timestamps;
