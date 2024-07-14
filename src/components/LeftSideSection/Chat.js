import { Grid, Box } from '@material-ui/core'

function Chat() {
    return (
        // main container
        <Grid style={{ width: '100%', height: '100%', backgroundColor: 'pink', display: 'flex', justifyContent: 'flex-start' }}>
            {/* badge container */}
            <Grid style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box style={{ height: '54px', width: '54px', borderRadius: '50%', backgroundColor: 'blue' }}></Box>
            </Grid>
            {/* info container */}
            <Grid style={{ width: '80%', height: '100%', backgroundColor: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Grid style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box style={{marginLeft: '5px'}}>Nobel Chat</Box>
                    <Box style={{marginRight: '5px'}}>06:30 PM</Box>
                </Grid>
                <Grid style={{width: '100%', margin: '0px 5px'}}>
                    message and message count row
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Chat