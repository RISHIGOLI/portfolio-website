import { makeStyles, Grid, Box } from '@material-ui/core'
import ChatWindow from './ChatWindow'

function RightSideMessagesSection() {
    return (
        <Grid style={{ width: 'calc(100% - 16rem)', height: '100%', backgroundColor: 'red' }}>
            <ChatWindow />
        </Grid>
    )
}

export default RightSideMessagesSection