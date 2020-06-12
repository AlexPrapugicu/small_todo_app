import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function TodoSortOptions({deleteAllDone,sortBy}) {
    return(
        <Grid container direction="row" justify="space-around">
            <Button onClick={() => deleteAllDone()}> Delete Completed</Button>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    style={{width: 100}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}>
                    <MenuItem onClick={() => sortBy("date")} value={10}>Sort By Date</MenuItem>
                    <MenuItem onClick={() => sortBy("completed")} value={20}>Sort By Completed</MenuItem>
                    <MenuItem onClick={() => sortBy("name")} value={30}>Sort By Name</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default TodoSortOptions;
