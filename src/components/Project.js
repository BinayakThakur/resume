import { Container } from "@mui/material";
import Calci from "./Calculator";
import DFS from "./DFS";
import ImgMediaCard from "./Drinks";
import Express from "./ExpressAPI";
import Spring from "./Rest";
import Travel from "./Travel";


const Project =()=>{
    return (<>
<div className="row">
        <div className="col-3 mt-5">
        <ImgMediaCard></ImgMediaCard>
        </div>
        
        <div className="col-3 mt-5">
        <DFS></DFS>
        </div>
        <div className="col-3 mt-5">
        <Calci></Calci>
        </div>
        <div className="col-3 mt-5">
        <Travel></Travel>
        </div>
        <div className="col-3 mt-5">
        <Spring></Spring>
        </div>
        <div className="col-3 mt-5">
        <Express></Express>
        </div>
        </div>
    </>);
    
}
export default Project;