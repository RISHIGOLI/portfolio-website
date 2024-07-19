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
                                            <Grid style={{ width: 'fit-content', maxWidth: '70%', height: 'auto', marginBottom: '5px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '15px 15px 15px 0px', position: 'relative' }}>
                                                <Grid style={{ width: 'fit-content', position: 'absolute', left: '-9px', bottom: '-7px' }}><svg width="9" height="20" class="svg-appendix"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="messageAppendix"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#FFF" filter="url(#messageAppendix)"></path><path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#FFF" class="corner"></path></g></svg></Grid>
                                                <Grid>
                                                    {message.message}
                                                </Grid>
                                            </Grid>
                                        </> :
                                        <>
                                            <Grid style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
                                                <Grid style={{ maxWidth: '70%', width: 'fit-content', display: 'flex', justifyContent: 'flex-end', backgroundColor: 'pink', padding: '10px', borderRadius: '15px 15px 0px 15px', position: 'relative' }}>
                                                    <Grid style={{ width: 'fit-content', position: 'absolute', right: '-9px', bottom: '-7px' }}><svg width="9" height="20" class="svg-appendix"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="messageAppendix"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="pink" filter="url(#messageAppendix)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="pink" class="corner"></path></g></svg></Grid>
                                                    <Grid style={{ width: 'auto', height: 'auto', marginBottom: '5px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                                        <Grid>
                                                            {message.message}
                                                        </Grid>
                                                    </Grid>
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
                            <input type="text" placeholder='Message' style={{ height: '50%', background: 'none', border: 'none', width: '100%', outline: 'none', color: 'white' }} />
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
                openMoreActionsPopover && <MoreActionsPopover open={openMoreActionsPopover} onClose={() => setOpenMoreActionPopover(false)} />
            }
        </Grid>
    )
}

export default ChatWindow