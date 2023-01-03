import React, { useState } from "react";

const Usestate = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    text: "Enter your text",
    date: Date.now().toLocaleString()
  })

  function onUpload() {
    setData((prev) => {
      return {
        ...prev, 
        text: "New Text"
      }
    })
  }

	return (
		<div className="bg-primary w-100 p-5">
			<div className="">
				<p className="text-white fs-3">Nomer: {count}</p>
				<div className="btn-group">
					<button
						className="btn btn-success"
						onClick={() => setCount((prev) => prev + 1)}
					>
						Add
					</button>
					<button
						className="btn btn-danger"
						onClick={() => setCount(count - 1)}
					>
						Remove
					</button>
				</div>
					<button className="btn btn-warning" onClick={() => onUpload()}>Change</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</div>
	);
};

export default Usestate;
