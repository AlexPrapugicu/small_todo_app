import React from "react";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

function Header() {

    return (
        <div>
            <Typography
                variant="h5"
                style={{padding: 20}}>
                To Do's
            </Typography>
            <div style={{display:'inline-flex'}}>
                <p>Current Time: </p>
                <p>
                    <Moment
                        format={"DD-MMM-YYY HH:mm:ss"}
                        interval={1000}
                        style={{justifyContent:"center"}}>
                    </Moment>
                </p>
            </div>
        </div>);
}

export default Header;
