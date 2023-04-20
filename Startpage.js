import { Button,ButtonArrow,Page,Footer,Heading,Link } from "govuk-react";

function Startpage(){
return(
    <>
    <Page>
      
        <Heading size="LARGE">
        Welcome to the Westminster GP Surgery.
        </Heading>  
   
      
      <Link href="/login"> 
        <div className="start">
          <Button
            icon={<ButtonArrow />}
            start
          >
            Start now
          </Button>
        </div>
      </Link>
   
     
   
    </Page>
    <div className="footer">
    <Footer />
    </div>
    </>

);
};


export default Startpage;