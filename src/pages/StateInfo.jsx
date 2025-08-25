import React from 'react'

export default function StateInfo(){
  return (
    <section className="calendar">
      <h1>State rules and NAP list</h1>
      <h3>Nap List :-</h3>
      <ul>
        <li>ICE</li>
        <li>LUV</li>
        <li>TAN</li>
        <li>KOR</li>
        <li>OMG</li>
        <li>SCS</li>
        <li>LSS</li>
      </ul>
      
      <h2> 🔪 Brothers in arms (Killing event) 🔪</h2>
      <h4>🕛 Starts at reset and lasts two days.</h4>
      <p> You CAN attack:
<ul><li>✅ Gathering tile.</li>
<li>✅ Non Nap player</li>
<li>✅Max 2 hits.</li>
</ul></p>
<p>You CANNOT attack:
  <ul>
 <li>
  ❌ NAP cities and their farms  
 </li>
  </ul>
</p>
      
    </section>
  )
}
