import React, { useEffect, useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setJsonData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Automatically Loaded JSON File</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {jsonData && (
        <div>
          <h2>File Contents:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
