import React, { useState, useRef, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chat from './Chat';

const useStyles = makeStyles((theme) => ({
    tabsContainer: {
        // '& .MuiTab-textColorPrimary': {
        //   color: 'red', // change the tab text color
        // },
        borderBottom: '3px solid lightgray',
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.appBar,
        minHeight: 'unset',
        height: '42px',
        '& .MuiTab-root': {
            textTransform: 'none'
        },
        '& .MuiTab-root.Mui-selected': {
            // color: 'rgb(127, 12, 134)', // change the selected tab text color
            // backgroundColor: 'rgb(232, 232, 232)',
            // borderTopLeftRadius: '10px',
            // borderTopRightRadius: '10px',
            '&:hover': {
                backgroundColor: 'rgb(232, 232, 232)',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
            }
        },
        '& .MuiTabs-indicator': {
            // backgroundColor: 'rgb(127, 12, 134)', // change the indicator color
            height: '4px'
        },
        '& .MuiTab-root:not(.Mui-selected)': {
            '&:hover': {
                backgroundColor: 'rgb(232, 232, 232)',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
            }
        }
    }
}))

function Chats() {
    const gridRef = useRef(null)
    const classes = useStyles()
    const [value, setValue] = useState(0);
    const tabs = ['All', 'Equities', 'Insider Trades']
    const chats = Array(40).fill(1)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        console.log('hieght of the container', gridRef.current.clientHeight);
    }, [])
    return (
        <Grid style={{ height: 'calc(100% - 72px)', display: 'flex', flexDirection: 'column' }} ref={gridRef}>
            <Tabs
                value={value}
                onChange={handleChange}
                // indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                // textColor="secondary"
                aria-label="secondary tabs example"
                className={classes.tabsContainer}
            >
                {
                    tabs.map((tab, index) => (
                        <Tab
                            label={tab}
                            key={index}
                            className={classes.customTab}
                            disableFocusRipple={true}
                            disableRipple={true}
                        />
                    ))
                }
            </Tabs>

            <Grid style={{ width: '100%', height: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <Grid style={{ overflowY: 'auto', padding: '5px' }}>
                    {
                        chats.map((chat, index) => (
                            <Grid style={{ height: '72px', width: '100%', marginBottom: '5px' }}>
                                <Chat/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Chats