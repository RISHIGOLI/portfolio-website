import { Grid, Box, Button } from '@material-ui/core'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { GrMicrophone } from "react-icons/gr";

function ChatWindow() {
    return (
        <Grid style={{ height: '100%', width: '100%', backgroundColor: 'pink', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* header */}
            <Grid style={{ width: 'auto', height: '3.5rem', backgroundColor: 'red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 10px' }}>
                <Grid style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {/* avatar container */}
                    <Grid style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'blue', marginRight: '0.625rem', borderRadius: '50%' }}></Grid>
                    {/* chat name and info */}
                    <Grid style={{ display: 'flex', flexDirection: 'column' }}>
                        <Box>User name</Box>
                        <Box>100 Subscribers</Box>
                    </Grid>
                </Grid>
                <Grid style={{ display: 'flex' }}>
                    <Button><IoSearchOutline /></Button>
                    <Button><IoMdMore /></Button>
                </Grid>
            </Grid>
            {/* input container */}
            <Grid style={{ width: 'calc(100% - 20vw)', height: '3.5rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between',marginLeft: 'auto', marginRight: 'auto' }}>
                <Grid style={{ width: 'calc(100% - 5rem)', height: '100%', display: 'flex', justifyContent: 'space-between', marginLeft: '1rem', backgroundColor: 'rgb(33,33,33)', borderRadius: '0.93752rem', color: 'rgb(170,170,170,0.8)' }}>
                    {/* emoji */}
                    <Grid style={{ height: '100%', width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BsEmojiSmile style={{fontSize: '1.5rem'}}/>
                    </Grid>
                    {/* input */}
                    <Grid style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <input type="text" placeholder='Message' style={{ height: '50%', background: 'none', border: 'none', width: '100%' }} />
                    </Grid>
                    {/* attach files  */}
                    <Grid style={{ height: '100%', width: '10%', marginLeft: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <RiAttachment2 style={{fontSize: '1.5rem'}}/>
                    </Grid>
                </Grid>
                <Grid style={{ height: '3.5rem', width: '3.5rem', marginLeft: '0.625rem', borderRadius: '50%', marginRight: '0.75rem',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(33,33,33)', color: 'rgb(170,170,170,0.8)' }}>
                    <GrMicrophone style={{fontSize: '1.5rem'}}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ChatWindow