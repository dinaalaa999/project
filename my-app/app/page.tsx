'use client';

export default function Home() {
  return (
    <div style={{border:"2px dashed #000",textAlign:"center" , padding: "20px", fontFamily: "Arial" }}>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi ex illum cum, 
        excepturi sunt ducimus libero.
      </p>
      <h2>Hessen</h2>
      <ul>
        <li>✅ wiesbaden</li>
        <li>✅ mainz</li>
        <li>✅ frankfurt</li>
      </ul>

      <button 
        onClick={() => alert("You clicked me!")} 
        style={{
        padding: "10px 20px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px"
         }}
       >
       Click Me
    </button>


    <table style={{ margin: "40px auto", textAlign: "center" }}>
  <thead>
    <tr>
      <th style={{ border: "1px solid #000", padding: "10px" }}>City</th>
      <th style={{ border: "1px solid #000", padding: "10px" }}>River</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: "1px solid #000", padding: "10px" }}>Wiesbaden</td>
      <td style={{ border: "1px solid #000", padding: "10px" }}>Rhein</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #000", padding: "10px" }}>Frankfurt</td>
      <td style={{ border: "1px solid #000", padding: "10px" }}>Main</td>
    </tr>
  </tbody>
</table>


      <img 
        src="/OIP (2).jfif" 
        alt="img" 
        style={{width:"250px", marginTop:"20px auto"}}
        />
    </div>
  );
}
