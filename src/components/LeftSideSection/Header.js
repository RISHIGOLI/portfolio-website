import React, { useState } from 'react';
import { Grid, Box, Button } from '@material-ui/core'
import { MdMenu } from "react-icons/md";
import Input from '../Input';
import OpenMenuPopover from './OpenMenuPopover';

function Header() {
    const [openMenuPopover, setOpenMenuPopover] = useState(false)
    return (
        <>
            <Grid style={{ height: '2.5rem', backgroundColor: '#FFFFFF', padding: '.375rem .8125rem .5rem .8125rem' }}>
                <Grid style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Button style={{ width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', minWidth: 'unset', borderRadius: '50%' }} onClick={()=>setOpenMenuPopover(true)}><MdMenu /></Button>
                    <Box style={{ width: '90%', height: '2.5rem', marginLeft: '.8125rem' }}><Input /></Box>
                </Grid>
            </Grid>
            {
                openMenuPopover && <OpenMenuPopover open={openMenuPopover} onClose={()=>setOpenMenuPopover(false)}/>
            }
        </>
    )
}

export default Header