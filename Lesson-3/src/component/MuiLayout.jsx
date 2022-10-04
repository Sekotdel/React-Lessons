import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const MuiLayout = () => {

    const classes = useStyles();
    const [chatList, setChatList] = useState([])
    useEffect(() => {
        setChatList(() => [{ id: 1, title: 'ChatOne' }])
    }, [])

    return (
        <List className={classes.root}>
            {chatList.map((el, i) => (
                <ListItem
                    id={el.id}
                    title={el.title}
                    key={i}
                >
                </ListItem>
            ))}
        </List>
    )
}

export default MuiLayout;