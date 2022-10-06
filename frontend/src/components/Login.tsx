import { Box, Card, CardHeader, CardContent, Container, Grid, TextField, Button, CircularProgress, InputAdornment } from '@mui/material'
import { useState, FC, ChangeEvent } from 'react'
import { Email, Password } from '@mui/icons-material'
import axios from 'axios'
import validator from 'validator'

type FormData = {
	email: string,
	password: string | number
}

type Preloader = boolean
type Validator = {
	value: boolean,
	msg: string
}

const Login: FC = () => {
	const [formData, setFormData] = useState<FormData>(
		{
			email: '',
			password: ''
		}
	)
	const [loading, setLoading] = useState<Preloader>(false)
	const [isValidEmail, setIsValidEmail] = useState<Preloader>(false)
	const [isEmpty, setIsEmpty] = useState<Validator>({
		value: false,
		msg: ''
	})

	const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
		if(name === 'email' && !validator.isEmail(value)){
			setIsValidEmail(false)
		}
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const onSubmit = async () => {
		// setLoading(!loading)
		// // validate request
		const { email, password } = formData

		if(!email || !password){
			setIsEmpty({...isEmpty, value: true, msg: 'This field is required!'})
			setLoading(false)
		}else{
			if(validator.isEmail(email)){
				setIsValidEmail(true)
				setIsEmpty({...isEmpty, value: false, msg: ''})
				try{
					const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
						body: formData
					})
					console.log(res)
					return false
					if(res) console.log(res.data)
					setLoading(false)
				}catch(error){
					console.log(error)
				}
			}
		}
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
								error={isEmpty.value && (formData.email === '' || !isValidEmail)} 
								helperText={isEmpty.value && ((formData.email === '' && isEmpty.msg) || (!isValidEmail && 'Invalid Email format!'))}
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
                                    error={isEmpty.value && formData.password === ''} 
                                    helperText={isEmpty.value && formData.password === '' && isEmpty.msg} 
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
						<Button color="primary" variant="contained" disabled={loading && !isEmpty.value} onClick={onSubmit} sx={{ textTransform: 'none', fontFamily: 'Poppins' }}>{ loading ? <CircularProgress size={25} sx={{ color: '#fff' }}/> : 'Submit' }</Button>
					</CardContent>
				</Card>
			</Box>
		</Container>
	)
}

export default Login
