import { useState, useEffect } from "react";

function App() {
  const [events, setEvents] = useState("");
  const [eventsPool, setEventsPool] = useState([]);

  const sse = new EventSource("http://127.0.0.1:8080/events?stream=messages");
  useEffect(() => {
    sse.onmessage = (e) => {
      setEvents(e.data);

      console.log("Local", e);
      const newEvent = [
        ...(JSON.parse(localStorage.getItem("eventsList")) || []),
        e.data,
      ];
      setEventsPool(newEvent);
      localStorage.setItem("eventsList", JSON.stringify(newEvent));
    };

    return () => {
      localStorage.setItem("eventsList", JSON.stringify([]));
      setEvents("");
      setEventsPool([]);
      sse.close();
    };
  }, []);

  // console.log("eventsPool ::", eventsPool);

  return (
    <div className="container mt-5">
      <h2>Electron SSE Events</h2>
      <button
        className={`btn btn-info`}
        onClick={() => {
          localStorage.setItem("eventsList", JSON.stringify([]));
          setEvents("");
          setEventsPool([]);
          sse.close();
        }}
      >
        Clear
      </button>

      <div className="mt-5">
        <h3>Event Message:</h3>
        <h4 className="text-secondary">{events}</h4>
      </div>
      <div className="mt-5">
        <h3>Event Pool:</h3>
        {eventsPool.map((msg, i) => (
          <h4 className="text-secondary" key={i}>
            {msg}
          </h4>
        ))}
      </div>
    </div>
  );
}

export default App;
