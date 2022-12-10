import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';

function Contact() {

    const defaultValues = {
        name: "",
        mail: "",
        text: ""
    }

    const { register, handleSubmit, getValues, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues
    });

    function submit(values) {

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8000/');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText === 'success') {
                alert('Email sent');
                reset(defaultValues);
            } else {
                alert('Sending error') 
            }
        }
        xhr.send(JSON.stringify(getValues()))
    }

    return (
        <div className={styles.container}>
            <h2 id='contact'>Contact</h2>
            <form onSubmit={ handleSubmit(submit) } method="POST">
                <div className='d-flex flex-column mb-20'>
                    <input { ...register('name', {
                        minLength: {
                            value:2,
                            message: 'Merci de saisir un nom comportant plus de 2 caractères'
                        },
                        required: {
                            value: true,
                            message: 'Champ requis'
                        }
                    })} id='name' placeholder='Name' type="text" />
                    <div>
                        { errors?.name && <p>{errors.name.message}</p> }
                    </div>
                    <input { ...register('mail', {
                        required: {
                            value: true,
                            message: 'Champ requis'
                        }
                    }) } id='mail' placeholder='Email' type="email" />
                    <div>
                        { errors?.mail && <p>{errors.mail.message}</p> }
                    </div>
                    <textarea { ...register('text', {
                        required: {
                            value: true,
                            message: 'Champ requis'
                        },
                    }) } id="message" placeholder='Message' cols="30" rows="10"></textarea>
                    <div>
                        { errors?.text && <p>{errors.text.message}</p> }
                    </div>
                </div>
                <button disabled={ isSubmitting } className='btn btn-primary'>SEND</button>
            </form>
        </div>
    )
}

export default Contact;