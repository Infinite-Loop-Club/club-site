import * as Yup from 'yup';

export default Yup.object({
	name: Yup.string().required('Required').trim(),
	registerNumber: Yup.number().min(12).max(12).required('Required').positive().integer(),
	email: Yup.string().email(),
	phoneNumber: Yup.number().min(10).max(10).required('Required').positive().integer(),
	year: Yup.number().required('Required').min(1).max(4),
	gender: Yup.string().required('Required'),
	dept: Yup.string().required('Required'),
	avatar: Yup.string().url()
});
