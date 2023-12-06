import React from "react";
import customRequest from "./customrequest";
function Profile() {
  const [profile , setProfile] = useState([])  
  useEffect(() => { fetchProfile();[]})
  async function fetchProfile(){
   try{
    const info = await customRequest.get("/api/add/",{});
    console.log(info.data);
    const profile = info.data;
    setProfile(info.data)

   } catch (error) {
    console.log(error);
  }
  }
  return (<>
    
  </>);
}
export default Profile;