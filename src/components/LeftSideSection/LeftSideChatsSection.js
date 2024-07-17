import { makeStyles, Grid, Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Chats from './Chats'
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    leftSideChatsSectionContainer: {
        height: '100%', width: '24rem', backgroundColor: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid lightgray',
        [theme.breakpoints.down(767)]: {
            width: '100vw'
        }
    }
}))

function LeftSideChatsSection() {
    const classes = useStyles()
    const [chats, setChats] = useState([])

    return (
        <Grid className={classes.leftSideChatsSectionContainer}>
            <Header />
            <Chats />
        </Grid>
    )
}

export default LeftSideChatsSection