import React from 'react'
import Header from '../components/Header'
import data from '../data/activityData.json'
const Activity = () => {
  return (
    <main>
      <Header title="Activity"  />
      {data.map((d, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1em",
            marginBottom: ".3em",
          }}
          key={i}>
          <img src={d.image} style={{ objectFit: "cover", width:"50px" ,aspectRatio:"1",height:"55px"}}  alt='user'/>
          <p

          style={{
            textAlign: "left",
        color:"var(--textColor)"
            }}
          >
            {d.activity}<br />
            {d.when}
          </p>
          <span style={{
            color: "#aaaaaa",
            width: "30%",
            textAlign:"right"

          }}>{d.date} ago</span>
        </div>
      ))}
    </main>
  )
}

export default Activity