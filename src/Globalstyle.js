import {createGlobalStyle} from "styled-components"

export const GlobalStyle= createGlobalStyle`

body{
    
   
    padding: 0px;
    background-color:#dbcccb;
      font-family: 'Oswald', sans-serif
}
.wrapper{
    position: relative;
    position: sticky;
    margin-left: 10%;
    margin-right: 10%;
    
}
.navbar-wrapper{
    
    width: 100%;
    background-color: rgb(64,64,64);
    border-bottom: 2px solid white;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);


}
.navbar{
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    /* background-color: rgb(64,64,64); */
    /* border-bottom: 2px solid white; */
    /* box-shadow: 2px 2px 2px rgba(0,0,0,0.6); */

    
}
.name{
    width: 30%;
    padding-left: 30px;
    font-size: x-large;
    color: white;
}
.navbar-list{
    display: flex;
    width: 70%;
    justify-content: flex-end;
    padding-right: 20px;
}
.nav-list{
    display: flex;
    justify-content: space-between;
    list-style: none;
    justify-content: flex-end;
    margin-top: 13px;
}
.list-items{
    text-decoration: none;
    padding-left: 10%;
    font-weight: 500;
   
}
.list-link{
    text-decoration: none;
    color: white;
}
.list-link1{
    background-color: transparent;
    color: white;
    font-weight: 500;
    border: none;
}
.navbar-icon{
display: none;
}
@media (max-width:750px) {
    .wrapper{
        position: relative;
    }
    .name{
        
    }
    .nav-list{
        position: absolute;
        display: none;
        flex-direction: column;
        background-color: white;
        color: black;
        list-style: none;
        top: 3rem;
        right: 0;
        transition: all 300ms ease;
        gap: 2rem;
        width: 280px;
        text-align: center;
        padding-right: 40px;
    }
    .list-link{
        color: black;
    }
    .navbar-icon{
        display: inline-flex;
        align-items: center;
        color: white;
        font-size: 20px;
    }
}

/* hero */
.container1{
position: relative;
 top:0;
 transition: all 300ms ease;
 margin-left: 300px;
 margin-right: 300px;
}
.hero-text{
    width: 70%;
    height: 100%;
}
.hero-img{
    width: 40%;
    height: 400px;
    width: 400px;
    border-radius: 400px;
    background-size: 400px;
    overflow: hidden;
    /* border-image: auto; */
}

.hero2-img{
    overflow: hidden;
    background-image:url('/images/splash1.png');
    background-position-y: 50;
    height: 400px;
    width: 400px;
    border-radius: 400px;
    background-size: 400px;
}
.hero-icon{
    display: none;
}
@media (max-width:750px){
   body{
    margin:0;
   }
    .hero-text{
        top: 0;
        align-items: top;
        justify-content: center;
        
    }
    .hero-heading{
       font-size :20px ;
       justify-content: center;
       align-items: center;
    }
    .hero-icon{
        display: inline-block;
        color: black;
        font-size: 20px;
    }
    .hero-paragraph1{
        display: none;
    }
    .hero-img{
        height: 250px;
    }
    .hero2-img{
        height: 250px;
        width: 250px;
        border-radius: 250px;
        overflow: hidden;
        background-position-x:35%;
        background-image:url('/images/splash1.png');
    }
}

//education

.wrapper1{
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    padding-bottom:20px;
}
.education-card{
    border: 1px solid black;
    background-color: white;
    width: 400px;
    height: 100px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
    align-items: center;
}
.education-icon{
    font-size: 35px;
    padding-left: 10px;
    padding-right: 10px;
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
    text-align: center;
    margin-left: 10px;
    
    background-color: #a57200;
    color: white;
    &:hover{
        color: #a57200;
        background-color: white;
    }
}
.education-text{
    padding-left: 10px;
    padding-top: 10px;
    padding-right:10px;
}
.education-level{
    font-size: 18px;
    align-items: center;

}
.education-heading{
    justify-content: center;
    text-align: center;
}
.cards{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    column-gap: 10px;
    /* gap: 10px; */
    height: 210px;
}

.edu-paragraph{
    font-size: large;
    padding-left: 0%;
}
@media (max-width:950px){
    .education-card{
    border: 1px solid black;
    background-color: white;
    width: 300px;
    height: 100px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
    align-items: center;
}
.education-icon{
    font-size: 25px;
    padding-left: 10px;
    padding-right: 10px;
    height: 3rem;
    width: 3rem;
    border-radius: 3rem;
    text-align: center;
    margin-left: 10px;
    
    background-color: #a57200;
    color: white;
    
}
.cards{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
    height: 100%;
}
.edu-paragraph{
    font-size: medium;
    padding-left: 0%;
}
}
@media (max-width:650px){
.wrapper1{
    margin: auto;
    padding-bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
}
    .education-card{
    border: 1px solid black;
    background-color: white;
    width: 80%;
    height: 100px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
    align-items: center;
    
}
.cards{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
    height: 100%;
    width: 100%;
    
    padding-left: 10%;
    justify-content: center;
    /* align-items: center; */
}
.education-description{
    background-color: #dbcccb; 
    right: 0;
    
}
.edu-paragraph{
    font-size: medium;
    padding-left: 5%;
    padding-right:5%;
    width: 100%;
    background-color: #dbcccb; 
}
}


/* experience */
.wrapper2{}
.exp-container{
    flex-direction: column;
}
.exp-heading{
text-align: center;
}
.experience{
    display: grid;
    /* width: 100%; */
    gap: 1.4rem;
    position: relative;
}
.exp{
    display: flex;
    /* gap: 100px; */
    justify-content: space-between;
    line-height: 30px;
    /* width: 100%; */
    align-items: flex-start;
    gap: 1.4rem;
}
.post{
    /* width: 100px; */
}
.post-heading{
    font-size: 19px;
    /* width: 100%; */
}
.post-time{
    font-size:10px;
}
.role-detail{
    font-weight: 300;
}

.division-bar{
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
}
.div-line{
    position: absolute;
    height: 92%;
    width: 2px;
    background-image: linear-gradient(black, rgba(255,255,255,0) 0%);
    background-position: right;
    background-size: 2px 30px;
    background-repeat: repeat-y;
}

/* service */
.wrapper2{
    margin-left: 10%;
    margin-right: 10%;
    justify-content: center;
    align-items: center;
}
.skill-type{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    text-align: center;
}

.skill-heading{
    text-align: center;
}
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(1,1fr);
    gap: 20px;
    margin-bottom: 20px;
}
.it-skill{
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
.non-it{

    width: 100%;
    height: 65%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
}
.skill-card{
    height: 180px;
    width: 180px;
    padding: 50px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
}

.skills-name{
    display: grid;
    text-align: center;
    font-weight: 200;
    font-size: large;
}

@media (max-width:650px) {
    .skills{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 20px;

}
.it-skill{
    justify-content: center;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    height: 50%;
}
.skill-card{
    height: 190px;
    width: 190px;
    padding: 50px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);

}
.non-it{
    justify-content: center;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
}
.skill-type{
    display: none;
}

}


/* Footer */
.footer-wrapper{
    width: 100%;
    background-color: rgb(64,64,64);
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10px;
}

.footer-section{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.contact{
    display: grid;
}
.contact-data{
    display: flex;
    /* flex-direction: column; */
    gap: 10px;
    left: 0;
}
.contact-icon{
    font-size: 30px;
}
.footer-text{
    color: white;
}
.information{
    left: 0;
    text-align: left;
    color: white;
}
.right-footer{
    display: grid;
}

.social-media{
    display: flex;
    gap: 20px;
    padding: auto;
}
.whatsapp{
    color: #075e54 ;
}
.email{
    color: #FF0000  ;
}
.instagram{
    color: #d62976;
}
.facebook{
    color: #3b5998 ;
}
.linkedin{
    color: #0072b1 ;
}

/* coverletter */
.coverletter{
    height: 100%;
    width: 60%;
}
.cl1{
    padding: 50px;
    font-size: large;
}
.signature{
   width: 60%;
   justify-content: left;
   overflow: hidden;
   /* position: -50; */
   margin-left: 25%;
   /* background-color: yellow; */
   

}
`