import React from 'react';
function MemberFetch() {
    
  // //Kod för fetch och display av en medlem ur api. 
  // const[member, setMember] = useState(null);
  // const[loading, setLoading] = useState(true);
  // useEffect(async() => {
  //   const response = await fetch("http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php");
  //   const datainfo = await response.json();
  //   const[item] = datainfo.data;
  //   setMember(item);
  //   setLoading(false);
  // }, []);

  // //Returnerar det första lagrade förnamnet i databasen. Om ingen koppling till databasen finns så returneras "...laddar medlem" istället
  // return (
  //   <React.Fragment>
  //   <TopLeftMenu/>
  //   <TopRightMenu/>

  //   <div>
  //     {loading ? <div> ...laddar medlem </div> : <div>{member.first_name} </div>}  
  //   </div>
  //   </React.Fragment>
    
  // );
  
 
  // return (
  //   <main className="content"> 
  //     <h1> TestFetch</h1>
  //     <h2> Hämta bilder och medlemmar ur backend</h2>
  //   <div>
  //        <button className="fetchImagesBtn" onClick={fetchImages}>
  //          Hämta bilder
  //        </button>
  //       <button className="fetchMembersBtn" onClick ={fetchMembers}>
  //        Hämta medlemmar </button>
  //        <button className="countBtn" onClick = {Count}>Test
  //        </button>
  //      </div>
  //   </main>    
  // );
}
export default MemberFetch;