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

      <button onClick={() => alert("You clicked me!")}>
        Click Me
      </button>

      <table  style={{border:"1px solid #000", margin: "40px auto", textAlign: "center" }}>
        <thead>
          <tr>
          <th>City</th>
          <th>River</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Wiesbaden</td>
           <td> Rhein</td>
         </tr>
         <tr>
          <td>Frankfurd</td>
          <td>Main</td>
        </tr>
      </tbody>
</table>

      <img src="/OIP (2).jfif" alt="img" />
    </div>
  );
}
