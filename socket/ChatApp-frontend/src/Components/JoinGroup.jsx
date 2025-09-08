import { useState } from "react";




function JoinGroup({onJoin}) {
   
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
   

      const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && room.trim()) {
      onJoin({ username, room });
    }
  };

    
    return (
        <div className="join-group-container">

            <h2 style={{ color: "black" }}>Join a Chat Group</h2>

            <form className="join-group-form" onSubmit={handleSubmit}>

                <div className="">
                    <label className="">
                        Your Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className=""
                    />
                </div>


                <div className="flex flex-col">
                    <label className="">
                        Group Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter group name"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        className=""
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className=""
                >
                    Join
                </button>
            </form>
        </div>

    );
}

export default JoinGroup;
