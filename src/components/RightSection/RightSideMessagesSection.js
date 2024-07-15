import { makeStyles, Grid, Box } from '@material-ui/core'
import ChatWindow from './ChatWindow'

function RightSideMessagesSection() {
    return (
        <Grid style={{ width: '70%', height: '100%', backgroundColor: 'red' }}>
            <ChatWindow />
        </Grid>
    )
}

export default RightSideMessagesSection