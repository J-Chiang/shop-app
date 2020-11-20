import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button, DialogActions } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogtitle: {
        paddingRight: '0px'
    }
}))


const Popup = (props) => {

    const { title, children, openPopup, setOpenPopup, confirmPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="lg" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenPopup(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => confirmPopup()} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup;
