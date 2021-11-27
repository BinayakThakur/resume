import { Container, Paper, Typography } from "@mui/material";
import ColorsTimeline from "./Education";
import SliderSizes from "./Skills";

const About =()=>{
    return(<Container>
         
        <div>
       
            <div className="row">
                <div className="col-3 mt-2" style={{width:"18rem"}} >
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQElQZcO3usEaA/profile-displayphoto-shrink_800_800/0/1605771144309?e=1643241600&v=beta&t=g1VW-aEZjCi1k_2NgrnwvsaqApx2H8CyZTw_x3IReaI" style={{width:"16rem"}} className="img-thumbnail card-4"></img>
                </div>
                <div className="col card-4 mt-2" style={{backgroundColor:"purple",color:"white"}}>
                <Typography variant="h5" className="" style={{color:"pink"}} className="mb-4 mt-4">Binayak Kumar Thakur</Typography>
                    <Typography className="mt-4 mb-4" mt={6}>
                    I'm a civil engineering graduate with a passion for programming. Currently, I am learning MERN,Spring Boot, Azure data services, competitive coding, data structures, and algorithms. I enjoy competing in CodeChef, Leetcode, Hackerrank, and others. It's fun for me and I love to do it. I have AZ-900, DP-900 certifications and know Azure, J2EE, MySQL, Java, Spring Core, HTML, CSS, and JavaScript.</Typography>
                </div>
    
                </div>
            </div>
           
        
<div className="row">
    <div className="col-3"><Paper style={{width:"18rem",height:"96%"}}> 
    <Typography variant="h6" className="" style={{color:"black"}} className="mt-4" >
    Skills
    </Typography>
    <p class="card-text mt-4 "><SliderSizes></SliderSizes></p>
    </Paper>  </div>

<div className="col-8 mt-4 ms-2" style={{width:"18rem"}}>
<div className="row">
<Paper>
    <Typography style={{color:"white"}} variant="h6"  style={{color:"black"}}>
    Education
    </Typography>
    <Typography style={{color:"white"}} className="mt-4" mt={4}>
    <ColorsTimeline></ColorsTimeline>
    </Typography>
    </Paper>
</div>
<div className="row mt-1">
<Paper className="card-4">
    <Typography style={{color:"white"}} className="mt-2 " mt={4} variant="h6" className="" style={{color:"black"}}>
    Certifications
    </Typography>
    <Typography style={{color:"white"}}  mb={2} mt={4}>
    Azure Fundamentals (AZ-900)
    </Typography>
    <Typography style={{color:"white"}}  mb={2} mt={2}>
    Azure Data Fundamentals (DP-900)
    </Typography>
    <Typography style={{color:"white"}}  mb={2} mt={2}>
    Python Basic (HackerRank)
    </Typography>
    <Typography style={{color:"white"}}  mb={4} mt={2}>
     Python Intermidiate (HackerRank)
    </Typography>
    </Paper>
</div>
</div>
<div className="col mt-4" >
<Paper style={{height:"100%"}} >
<Typography style={{color:"white"}} variant="h6" className="" style={{color:"black"}}>
    Current Status
    </Typography>
    <Typography style={{color:"white"}}  mt={4} mb={4}>
   I am currently working in TCS as ASE-T
   
    </Typography>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/768px-Tata_Consultancy_Services_Logo.svg.png" class="img-thumbnail" mt={4} style={{marginTop:"15%",width:"400px"}}></img>
    
</Paper>
</div>
</div>
     
          
 
           
    
      
        </Container>);
}
export default About;
