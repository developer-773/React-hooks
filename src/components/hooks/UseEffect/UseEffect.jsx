import React, { useEffect, useState } from "react";

const UseEffect = () => {
	const [user, setUser] = useState("");
	const [data, setData] = useState([]);
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
        window.addEventListener('mousemove', (evt) => {
            setPosition({
                x: evt.clientX,
                y: evt.clientY
            })
        })
    },[position])

	useEffect(() => {
		fetch(`https://plum-ill-piranha.cyclic.app/${user}`)
			.then((res) => res.json())
			.then((data) => setData(data));
            return () => {
                console.log("Clean")
            }
	}, [user]);
	return (
		<div className="bg-primary w-50 mx-auto rounded p-5">
			<p className="text-white fs-4">User: {user}</p>
			<div className="btn-group">
				<button className="btn btn-success" onClick={() => setUser("users")}>
					Web developer
				</button>
				<button className="btn btn-danger" onClick={() => setUser("posts")}>
					Android Developer
				</button>
				<button className="btn btn-warning" onClick={() => setUser("iOS")}>
					iOS developer
				</button>
			</div>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre className="text-start">{JSON.stringify(position, null, 2)}</pre>
		</div>
	);
};

export default UseEffect;
