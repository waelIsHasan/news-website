import Banner from "../Banner/Banner";
import { HeaderBlock } from "../Block/Block"
import CircularProgress from "@mui/material/CircularProgress";
import './List.css'
import { BorderAllRounded } from "@mui/icons-material";
 import Error from '../../pages/Error/Error.jsx'

export default function List({data, loading, error, refresh}){
   if (error) {
       return (
         <div className="big-block">
           <HeaderBlock onClick={refresh} />
             <Error message={error}></Error>
         </div>
       );
     }
     if (loading) {
       return (
         <div className="big-block">
           <HeaderBlock onClick={refresh} />
           <div className="loading-block">
             <CircularProgress />
           </div>
         </div>
       );
     }
     const subdata = data?.slice(0 , 7);
     return(
        <div className="list">
           <HeaderBlock onClick={refresh} />
           {subdata && subdata.map((post , index)=>{
                return (
                    <Banner  key={index}
                    isFromList = {true}
                    isGlassEffect={true}
                    src={post.author}
                    img={post.urlToImage}
                    title={post.source.name}    
                    />
                );
            })}
        </div>
    )

}