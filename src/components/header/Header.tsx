import style from './Header.module.scss';
import {ReactComponent as Hydra} from "../../assets/imgs/hydra.svg";
import {ReactComponent as Logo} from "../../assets/imgs/logo.svg";
import {ReactComponent as HumburgerMenu} from "../../assets/imgs/Hamburger-Button.svg";
import React, {useState} from "react";
import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Drawer, ListItemIcon, ListItemText} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoOutlinedIconServ from '@mui/icons-material/InfoOutlined';
import InfoOutlinedIconHowv from '@mui/icons-material/InfoOutlined';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const Header = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const indexes = [
        <InfoOutlinedIcon/>, <InfoOutlinedIconServ/>, <InfoOutlinedIcon/>, <InfoOutlinedIconHowv/>
    ]
    const list = (anchor: Anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}

        >
            <List>
                {['About', 'SERVICES', 'TECHNOLOGIES', 'How to'].map((text, index) => {
                    console.log(indexes[0])

                    return (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} className={style.Link}/>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            <Divider/>
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text}/>*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </Box>
    );
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                console.log('lupa lupa lu pa pa ')
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({...state, [anchor]: open});
            };

    return (
        <header className={style.Wrapper}>
            <div className={style.Container}>
                <a href={'fb304887679127863://qwerty'} target={"_blank"} className={style.LogoBlock}>
                    <Logo className={style.Logo}/>
                    <Hydra className={style.Hydra}/>
                </a>
                <div className={style.NavBlock}>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Technologies</a>
                        </li>
                        <li>
                            <a href="#">How to</a>
                        </li>
                    </ul>
                </div>
                <div className={style.BtnsBlock}>
                    <button className={style.ContactUsBtn}>Contact Us</button>
                    <button className={style.JoinHydraBtn}>JOIN HYDRA</button>
                </div>

                <Box className={style.HumburgerMenu}>
                    <Button onClick={toggleDrawer('right', true)}>
                        <HumburgerMenu/>
                    </Button>
                    <Drawer
                        className={style.WrapperSideBar}
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                    >
                        {list('right')}
                    </Drawer>
                </Box>
            </div>
        </header>
    )
}