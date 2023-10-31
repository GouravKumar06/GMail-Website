import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import InputBase from '@mui/material/InputBase';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)({
    background : '#F5F5F5',
    boxShadow:'none'
})

const SearchWrapper = styled(Box)({
    background:"#EAF1FB",
    height:48,
    maxWidth:720,
    minWidth:690,
    marginLeft:80,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:8,
    padding:"0 20px",
    '& > div' :{
        width:'100%',
        padding:'0 10px'
    }
})

const OptionsWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20
    }
})

const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar position="static">
        <Toolbar>
            <MenuIcon color='action' onClick={toggleDrawer}/>
            <img src={gmailLogo} alt="Logo" style={{ width:110,marginLeft:15 }}/>

            <SearchWrapper>
                <SearchIcon color='action'/>
                <InputBase
                    placeholder='Search mail'
                />
                <TuneIcon color='action'/>
            </SearchWrapper>

            <OptionsWrapper>
                <HelpOutlineOutlinedIcon color='action'/>
                <SettingsOutlinedIcon color='action'/>
                <AppsOutlinedIcon color='action'/>
                <AccountCircleOutlinedIcon color='action'/>
            </OptionsWrapper>

        </Toolbar>
    </StyledAppBar>
  )
}

export default Header;