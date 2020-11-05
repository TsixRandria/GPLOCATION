import React, { useState } from 'react';
// //import date picker
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function Datepicker() {
    //const [selectedDate, setSelectedDate] = useState(null)
    const classes = useStyles();
    return (
        <div>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    )
}


