import { Grid, Box } from '@material-ui/core'
import { MdMenu } from "react-icons/md";
import Input from '../Input';

function Header() {
    return (
        <Grid style={{ height: '60px', backgroundColor: '#FFFFFF', padding: '6px 12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box style={{ width: '10%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}><MdMenu /></Box>
            <Box style={{ width: '90%', height: '75%',  }}><Input /></Box>
        </Grid>
    )
}

export default Header