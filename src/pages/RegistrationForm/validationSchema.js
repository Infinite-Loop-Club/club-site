import * as Yup from 'yup';

export default Yup.object({
	name: Yup.string().required('Required').trim(),
	registerNumber: Yup.string()
		.min(12, 'Invalid Register Number')
		.max(12, 'Invalid Register Number')
		.required('Required'),
	email: Yup.string().email('Invalid Email').required('Required'),
	phoneNumber: Yup.string()
		.min(10, 'Phone Number must have 10 digits')
		.max(10, 'Phone Number must have 10 digits')
		.required('Required'),
	year: Yup.number().required('Required').min(1).max(4),
	gender: Yup.string().required('Required'),
	dept: Yup.string().required('Required')
});
