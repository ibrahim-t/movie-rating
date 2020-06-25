import React, { useEffect, useState } from "react"
import { Icon } from "@material-ui/core";

export const Votes = (props) => {
    const [vote, setVote] = useState(0);

    return <div className="movie-vote">
        <span className=" vote upVote" onClick={() => setVote(vote + 1)}>Up vote</span>
        <h3>{vote}</h3>
        <span className="vote downVote" onClick={() => setVote(vote - 1)}>down vote</span>
        <h2>Votes</h2>
    </div>
}