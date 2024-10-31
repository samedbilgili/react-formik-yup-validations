import { useFormik } from 'formik';
import * as Yup from 'yup';

function BasicRegisterTemplate() {
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Zorunlu Alan"),
        password: Yup.string().min(5).required("Zorunlu Alan"),
        passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "Parolalarınız Eşleşmiyor.")
    });

    const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema
    });


    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
            />
            {errors.email && touched.email && <span style={{ color: 'red' }}>{errors.email} </span>}
            <br />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
            />
            {errors.password && touched.password && <span style={{ color: 'red' }}>{errors.password} </span>}
            <br />
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input
                id="passwordConfirm"
                name="passwordConfirm"
                onChange={handleChange}
                value={values.passwordConfirm}
                onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && <span style={{ color: 'red' }}>{errors.passwordConfirm} </span>}
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default BasicRegisterTemplate