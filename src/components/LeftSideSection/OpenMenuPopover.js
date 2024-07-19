import { Grid, makeStyles } from '@material-ui/core'
import Popover from '@mui/material/Popover'
import { CiUser } from "react-icons/ci";
import { FiPlayCircle } from "react-icons/fi";
import { RiSettings3Line } from "react-icons/ri";
import { RxMoon } from "react-icons/rx";
import { MdAnimation } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { GoBug } from "react-icons/go";
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    popover: {
        top: '3rem !important',
        right: '8px !important',
        borderRadius: '10px !important',
        width: '225px !important',
        height: 'max-content !important',
        // opacity: '0.8 !important',
        background: 'rgb(255,255,255,0.533) !important',
        backdropFilter: 'blur(10px)',
        minWidth: '17rem !important',
        maxHeight: 'calc(100 * 6.41px - 3.75rem)',
        padding: '0.25rem 0'
    },
    popoverItem: {
        fontSize: '.875rem',
        margin: '.125rem .25rem',
        padding: '.25rem',
        paddingInlineEnd: '.75rem',
        borderRadius: '.375rem',
        paddingTop: '0.5rem',
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

function OpenMenuPopover({open,onClose}) {
    const classes = useStyles()
    const items = Array(12).fill(1)
    const popoverItems = [
        {
            icon: <FaRegUser className={classes.itemIcon} />,
            title: 'Contacts'
        },
        {
            icon: <FiPlayCircle className={classes.itemIcon} />,
            title: 'My Stories'
        },
        {
            icon: <RiSettings3Line className={classes.itemIcon} />,
            title: 'Settings'
        },
        {
            icon: <RxMoon className={classes.itemIcon} />,
            title: 'Night Mode'
        },
        {
            icon: <MdAnimation className={classes.itemIcon} />,
            title: 'Animations'
        },
        {
            icon: <FiHelpCircle className={classes.itemIcon} />,
            title: 'Telegram Features'
        },
        {
            icon: <GoBug className={classes.itemIcon} />,
            title: 'Report a Bug'
        },
        {
            icon: <MdAddCircleOutline className={classes.itemIcon} />,
            title: 'Install App '
        }
    ]
    return (
        <Popover
            open={open}
            onClose={onClose}
            classes={{ paper: classes.popover }}
        >
            <Grid style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    popoverItems.map((item, index) => (
                        <Grid
                            className={classes.popoverItem}
                            key={index}
                        >
                            <Grid style={{
                                maxWidth: '1.25rem',
                                marginInline: '.5rem 1.25rem'
                            }}>
                                {item.icon}
                            </Grid>
                            <Grid >
                                {item.title}
                            </Grid>
                        </Grid>
                    ))
                }
                <Grid
                    style={{
                        padding: '.5rem 0',
                        // background: 'rgb(244,244,245)',
                        cursor: 'default',
                        color: 'rgb(112,117,121)',
                        fontSize: '.8125rem',
                        textAlign: 'center'
                    }}
                >
                    Telegram Web A 10.9.8
                </Grid>
            </Grid>
        </Popover >
    )
}

export default OpenMenuPopover