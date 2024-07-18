import { useState } from 'react'
import { Grid, Box, Button } from '@material-ui/core'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { GrMicrophone } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux'
import MoreActionsPopover from './MoreActionsPopover';

function ChatWindow() {
    const { error, loading, messages, success } = useSelector((state) => state.messages)
    const [openMoreActionsPopover, setOpenMoreActionPopover] = useState(false)
    const currentUserId = 1

    return (
        <Grid style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* header */}
            <Grid style={{ width: 'auto', height: '3.5rem', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', padding: '4px 10px', boxShadow: '1px 1px 2px lightgray', zIndex: 1 }}>
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
                    <Button style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', minWidth: 'auto' }}><IoSearchOutline fontSize={'1.5rem'} color={'rgb(112,117,121)'} /></Button>
                    <Button style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', minWidth: 'auto' }} onClick={() => setOpenMoreActionPopover(true)}><IoMdMore fontSize={'1.5rem'} color={'rgb(112,117,121)'} /></Button>
                </Grid>
            </Grid>

            {/* messages container */}
            <Grid style={{ height: 'calc(100% - 7rem)', width: '100%' }}>
                <Grid style={{ height: '100%', overflowY: 'auto', paddingLeft: '10%', paddingRight: '10%', backgroundColor: 'darkgray' }}>
                    {
                        messages.map((message, index) => (
                            <>
                                {
                                    message.sender_id === currentUserId ?
                                        <>
                                            <Grid style={{ width: 'fit-content', maxWidth: '70%', height: 'auto', marginBottom: '5px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '15px 15px 15px 0px' }}>
                                                {message.message}
                                            </Grid></> :
                                        <>
                                            <Grid style={{ width: 'auto', height: 'auto', marginBottom: '5px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <Grid style={{ maxWidth: '70%', width: 'fit-content', display: 'flex', justifyContent: 'flex-end', backgroundColor: 'pink', padding: '10px', borderRadius: '15px 15px 0px 15px' }}>
                                                    {message.message}
                                                </Grid>
                                            </Grid>
                                        </>
                                }

                            </>
                        ))
                    }
                </Grid>
            </Grid>
            {/* input container */}
            <Grid style={{ width: 'calc(100% - 20vw)', height: '3.5rem', marginBottom: '1.25rem', width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', bottom: '1rem' }}>
                <Grid style={{ marginLeft: 'auto', marginRight: 'auto', height: '100%', width: '75%', display: 'flex' }}>
                    <Grid style={{ width: 'calc(100% - 5rem)', height: '100%', display: 'flex', justifyContent: 'space-between', marginLeft: '1rem', backgroundColor: 'rgb(33,33,33)', borderRadius: '0.93752rem', color: 'rgb(170,170,170,0.8)' }}>
                        {/* emoji */}
                        <Grid style={{ height: '100%', width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <BsEmojiSmile style={{ fontSize: '1.5rem' }} />
                        </Grid>
                        {/* input */}
                        <Grid style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <input type="text" placeholder='Message' style={{ height: '50%', background: 'none', border: 'none', width: '100%' }} />
                        </Grid>
                        {/* attach files  */}
                        <Grid style={{ height: '100%', width: '10%', marginLeft: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <RiAttachment2 style={{ fontSize: '1.5rem' }} />
                        </Grid>
                    </Grid>
                    <Grid style={{ height: '3.5rem', width: '3.5rem', marginLeft: '0.625rem', borderRadius: '50%', marginRight: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(33,33,33)', color: 'rgb(170,170,170,0.8)' }}>
                        <GrMicrophone style={{ fontSize: '1.5rem' }} />
                    </Grid>
                </Grid>
            </Grid>
            {
                openMoreActionsPopover && <MoreActionsPopover open={openMoreActionsPopover} onClose={()=>setOpenMoreActionPopover(false)}/>
            }
        </Grid>
    )
}

export default ChatWindow