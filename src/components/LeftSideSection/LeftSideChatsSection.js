import { makeStyles, Grid, Box } from '@material-ui/core'
import Chats from './Chats'
import Header from './Header'

function LeftSideChatsSection() {
    return (
        <Grid style={{ height: '100%', width: '16rem', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Chats />
        </Grid>
    )
}

export default LeftSideChatsSection