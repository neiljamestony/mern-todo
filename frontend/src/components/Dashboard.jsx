import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  	const { user } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if(!user){
			navigate('/login')
		}
	},[user, navigate])

	return (
		<div>{ user ? `Welcome ${user.name.toUpperCase()}` : 'Dashboard' }</div>
	)
}
export default Dashboard