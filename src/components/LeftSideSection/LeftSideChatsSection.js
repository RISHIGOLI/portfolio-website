import { makeStyles, Grid, Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Chats from './Chats'
import Header from './Header'

function LeftSideChatsSection() {
    const [chats, setChats] = useState([])

    return (
        <Grid style={{ height: '100%', width: '24rem', backgroundColor: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid lightgray' }}>
            <Header />
            <Chats />
        </Grid>
    )
}

export default LeftSideChatsSection