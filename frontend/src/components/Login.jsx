import { Box, Card, CardHeader, CardContent, Container, Grid, TextField, Button, CircularProgress, InputAdornment } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Email, Password } from '@mui/icons-material'
import { login, reset } from '../app/redux-reducer/authSlice'
import { toast } from 'react-toastify'
import Spinner from './reusables/Spinner'

const Login = () => {
	const [formData, setFormData] = useState(
		{
			email: '',
			password: ''
		}
	)
	const [loading, setLoading] = useState(false)
	const { email, password } = formData
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)

	useEffect(() => {
		if(isError){
			toast.error(message)
		}
		if(isSuccess || user) {
			navigate('/')
		}
		dispatch(reset())
	},[user, isSuccess, isError, message, navigate, dispatch])

	const onChange = (event) => {
		const name = event.currentTarget.name
		const value = event.currentTarget.value

		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const onSubmit = async () => {
		const userData = {
			email,
			password
		}	
		dispatch(login(userData))
	}

	if(isLoading){
		return <Spinner/>
	}

	return (
		<Container maxWidth="sm">
			<Box mt={2} width="100%">
				<Card>
					<CardHeader title={<Box fontSize={16} fontFamily="Poppins">Login</Box>}/>
					<CardContent>	
						<Grid container spacing={2}>
							<Grid item lg={12} xs={12}>
								<TextField 
								name="email" 
								required 
								disabled={loading} 
								variant="outlined" 
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Email/>
                                        </InputAdornment>
                                    )
                                }}
								onChange={(e) => onChange(e)} 
								placeholder="Enter your email" 
								size="small" 
								fullWidth 
								type="email" 
                                inputProps={{ maxLength: 30 }}
								value={formData.email}/>
							</Grid>
							<Grid item lg={12} xs={12}>
								<TextField 
                                    name="password" 
                                    required 
                                    disabled={loading} 
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Password/>
                                            </InputAdornment>
                                        ),
                                    }} 
                                    inputProps={{ maxLength: 15 }}
                                    onChange={(e) => onChange(e)} 
                                    placeholder="Enter your password" 
                                    size="small" 
                                    fullWidth 
                                    type="password" 
                                    value={formData.password}/>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
						<Button color="primary" variant="contained" disabled={loading} onClick={onSubmit} sx={{ textTransform: 'none', fontFamily: 'Poppins' }}>{ loading ? <CircularProgress size={25} sx={{ color: '#fff' }}/> : 'Submit' }</Button>
					</CardContent>
				</Card>
			</Box>
		</Container>
	)
}

export default Login
