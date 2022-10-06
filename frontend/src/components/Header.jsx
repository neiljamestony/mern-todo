import { Box, AppBar, Toolbar, Typography, Menu, MenuItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import { Login, Logout, AppRegistration, Settings } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { NavButton } from './assets/StyledComponents'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../app/redux-reducer/authSlice'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const { user } = useSelector((state) => state.auth)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    useEffect(() => {
        setAnchorEl(null)
    },[user])

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography>TODO APP</Typography>
                    <Box sx={{ flexGrow: 1 }}/>
                    {
                        user ? (
                            <>
                                <IconButton sx={{ color: '#fff' }} onClick={(event) => setAnchorEl(event.currentTarget)}><Settings fontSize="small"/></IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={() => setAnchorEl(null)}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={onLogout}>
                                        <ListItemIcon><Logout fontSize="small"/></ListItemIcon>
                                        <ListItemText>Logout</ListItemText>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Link to='/register' style={{ textDecoration: 'none', color: '#fff' }}>
                                    <NavButton startIcon={<AppRegistration fontSize="small"/>}>Register</NavButton>
                                </Link>
                                <Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>
                                    <NavButton onClick={() => navigate('/login')} startIcon={<Login fontSize="small"/>}>Login</NavButton>
                                </Link>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header