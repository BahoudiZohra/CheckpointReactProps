import React from 'react'
import Player from '../Player'
import Players from '../Players';


const PlayerList = () => {
  return (
    <div  style={{ display: "flex", flexWrap:"warp", justifyContent:"space-between", marginTop:"20px", flexBasis:"33.33%"}}>
      {Players.map((player, index) =>(
        <Player key={index} {...player} />
      ))}
    </div>
  )
}

export default PlayerList
