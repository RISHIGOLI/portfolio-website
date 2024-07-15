import { makeStyles, Grid, Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getAllChats } from '../../services/chats-service'
import Chats from './Chats'
import Header from './Header'

function LeftSideChatsSection() {
    const [chats, setChats] = useState([])
    useEffect(() => {
        getAllChats().then((response) => {
            console.log('chats', response.data)
            setChats(response.data.data)
        })
            .catch((error) => console.log('error', error))
    }, [])
    return (
        <Grid style={{ height: '100%', width: '24rem', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Chats chats={chats}/>
        </Grid>
    )
}

export default LeftSideChatsSection