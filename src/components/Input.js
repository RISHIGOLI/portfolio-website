import { Grid, Box } from '@material-ui/core'

function Input() {
    return (
        <Grid style={{ width: '100%', height: '100%', backgroundColor: 'lightgray', borderRadius: '1.375rem', display: 'flex', alignItems: 'center' }}>
            <Box style={{ marginLeft: '.8125rem' }}>Search</Box>
        </Grid>
    )
}

export default Input