import { Grid, makeStyles } from '@material-ui/core'
import Popover from '@mui/material/Popover'
import { HiUserAdd } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoFlagOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { MdOutlineDeleteOutline } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    popover: {
        top: '4rem !important',
        right: '8px !important',
        borderRadius: '10px !important',
        width: '225px !important',
        height: 'max-content !important',
        // opacity: '0.8 !important',
        background: 'rgb(255,255,255,0.533) !important',
        backdropFilter: 'blur(10px)',
        minWidth: '13.5rem !important',
        maxHeight: 'calc(100 * 6.41px - 3.75rem)',
        padding: '0.25rem 0'
    },
    popoverItem: {
        fontSize: '.875rem',
        margin: '.125rem .25rem',
        padding: '.25rem',
        paddingInlineEnd: '.75rem',
        borderRadius: '.375rem',
        width: 'auto',
        fontWeight: 500,
        transform: 'scale(1)',
        transition: '.15s ease-in-out transform',
        display: 'flex',
        justifyContent: 'flex-start',
        '&:hover': {
            background: 'rgb(0,0,0,0.067)',
            cursor: 'pointer'
        }
    },
    itemIcon: {
        fontSize: '1.25rem', color: 'rgb(112,117,121)', fontWeight: '900'
    }
}))

function MoreActionsPopover({ open, onClose }) {
    const classes = useStyles()
    const items = Array(12).fill(1)
    const popoverItems = [
        {
            icon: <HiUserAdd className={classes.itemIcon} />,
            title: 'Add To Contacts'
        },
        {
            icon: <HiOutlineVideoCamera className={classes.itemIcon} />,
            title: 'Video Call'
        },
        {
            icon: <MdOutlineNotificationsOff className={classes.itemIcon} />,
            title: 'Mute...'
        },
        {
            icon: <FaRegCircleCheck className={classes.itemIcon} />,
            title: 'Select Messages'
        },
        {
            icon: <IoFlagOutline className={classes.itemIcon} />,
            title: 'Report'
        },
        {
            icon: <FiGift className={classes.itemIcon} />,
            title: 'Gift Premium'
        },
        {
            icon: <HiOutlineHandRaised className={classes.itemIcon} />,
            title: 'Block User'
        },
        {
            icon: <MdOutlineDeleteOutline className={classes.itemIcon} />,
            title: 'Delete Chat'
        }
    ]
    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            classes={{ paper: classes.popover }}
        >
            <Grid style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    popoverItems.map((item, index) => (
                        <Grid style={{ borderTop: index === popoverItems.length - 1 && '1px solid rgb(0,0,0,0.102)' }}>
                            <Grid
                                className={classes.popoverItem}
                                key={index}
                            >
                                <Grid style={{
                                    maxWidth: '1.25rem',
                                    marginInline: '.5rem 1.25rem',
                                    color: index === popoverItems.length - 1 && '#e53935 !important'
                                }}>
                                    {item.icon}
                                </Grid>
                                <Grid style={{ color: index === popoverItems.length - 1 && '#e53935' }}>
                                    {item.title}
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Popover >
    )
}

export default MoreActionsPopover