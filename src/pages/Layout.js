import { makeStyles, Grid, Box } from '@material-ui/core'
import LeftSideChatsSection from '../components/LeftSideSection/LeftSideChatsSection'
import RightSideMessagesSection from '../components/RightSection/RightSideMessagesSection'

function Layout() {
    return (
        <Grid style={{ height: '100vh', display: 'flex', justifyContent: 'flex-start' }}>
            <LeftSideChatsSection />
            <RightSideMessagesSection />
        </Grid>
    )
}

export default Layout