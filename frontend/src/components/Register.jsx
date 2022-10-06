import { Box, Card, CardHeader, CardContent, Container, Grid, TextField, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { AccountCircle, Email, Password } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../app/redux-reducer/authSlice'
import Spinner from './reusables/Spinner'

const Register = () => {

	const [formData, setFormData] = useState(
		{
			name: '',
			email: '',
			password: '',
			password2: '',
		}
	)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)
	
	const { name, email, password, password2 } = formData

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

	const onSubmit = async (e) => {
		e.preventDefault()
		if(password !== password2){
			toast.error('Password did not match')
		}else{
			const userData = {
				name,
				email,
				password
			}

			dispatch(register(userData))
		}
	}

	if(isLoading){
		return <Spinner/>
	}

	return (
		<Container maxWidth="sm">
			<Box mt={2} width="100%">
				<Card>
					<CardHeader title={<Box fontSize={16} fontFamily="Poppins">Sign Up</Box>}/>
					<CardContent>	
						<Grid container spacing={2}>
							<Grid item lg={12} xs={12}>
								<TextField 
								name="name" 
								required 
								variant="outlined" 
								onChange={(e) => onChange(e)} 
								placeholder="Name" 
								size="small" 
								InputProps={{
									endAdornment: (
										<AccountCircle/>
									)
								}}
								inputProps={{ maxLength: 30 }}
								fullWidth 
								type="text" 
								value={name}/>
							</Grid>
							<Grid item lg={12} xs={12}>
								<TextField 
								name="email" 
								required 
								InputProps={{
									endAdornment: (
										<Email/>
									)
								}}
								inputProps={{ maxLength: 30 }}
								variant="outlined" 
								onChange={(e) => onChange(e)} 
								placeholder="Email" 
								size="small" 
								fullWidth 
								type="email" 
								value={email}/>
							</Grid>
							<Grid item lg={12} xs={12}>
								<TextField name="password" 
								required 
								variant="outlined" 
								InputProps={{
									endAdornment: (
										<Password/>
									)
								}}
								inputProps={{ maxLength: 15 }}
								onChange={(e) => onChange(e)} 
								placeholder="Password" 
								size="small" 
								fullWidth 
								type="password" 
								value={password}/>
							</Grid>
							<Grid item lg={12} xs={12}>
								<TextField name="password2" 
								required 
								variant="outlined" 
								onChange={(e) => onChange(e)} 
								placeholder="Confirm Password" 
								size="small" 
								fullWidth 
								InputProps={{
									endAdornment: (
										<Password/>
									)
								}}
								inputProps={{ maxLength: 15 }}
								type="password" 
								value={password2}/>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
						<Button color="primary" variant="contained" onClick={(e) => onSubmit(e)} sx={{ textTransform: 'none', fontFamily: 'Poppins' }}>Submit</Button>
					</CardContent>
				</Card>
			</Box>
		</Container>
	)
}

export default Register
