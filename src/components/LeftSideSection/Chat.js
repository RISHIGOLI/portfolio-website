import { Grid, Box, makeStyles,Button } from '@material-ui/core'
import { getRandomDarkColor } from '../../Util/utils'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', textTransform: 'none',
        borderRadius: '10px'
    }
}))

function Chat({ chat, selected }) {
    const randomColor = getRandomDarkColor()
    const classes = useStyles()
    return (
        // main container
        <Button className={classes.mainContainer} style={{color: selected && 'white', fontWeight: selected && '600'}}>
            {/* badge container */}
            <Grid style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box style={{ height: '54px', width: '54px', borderRadius: '50%', backgroundColor: randomColor, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'whitesmoke', fontWeight: 'bold' }}>{chat.creator.name?.substring(0, 2)}</Box>
            </Grid>
            {/* info container */}
            <Grid style={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Grid style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box style={{ marginLeft: '5px' }}>{chat.creator?.name || chat.creator.phone || "Unknown"}</Box>
                    <Box style={{ marginRight: '5px' }}>06:30 PM</Box>
                </Grid>
                <Grid style={{ width: '100%', margin: '0px 5px', display: 'flex' }}>
                    message and message count row
                </Grid>
            </Grid>
        </Button>
    )
}

export default Chat