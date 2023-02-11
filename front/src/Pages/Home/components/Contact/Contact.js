import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';

function Contact() {

    const defaultValues = {
        name: "",
        mail: "",
        subject: "",
        text: ""
    }

    const { register, handleSubmit, getValues, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues
    });

    // function submit(values) {

    //     let xhr = new XMLHttpRequest();
    //     xhr.open('POST', '/');
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.onload = function(){
    //         console.log(xhr.responseText);
    //         if(xhr.responseText === 'success') {
    //             alert('Email sent');
    //             reset(defaultValues);
    //         } else {
    //             alert('Sending error') 
    //         }
    //     }
    //     xhr.send(JSON.stringify(getValues()))
    // }

    async function submit(values) {

        let response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(getValues())
        });
        if (response.ok) {
            alert('Message envoyé')
            reset(defaultValues)
        } else {
            alert("Erreur lors de l'envoi")
        }
    }

    return (
        <div className={styles.container}>
            <h2 id='contact'>Contact</h2>
            <div className='d-flex justify-content p-20'>
                <p className={styles.contactMe}>Pour plus d'informations, contactez moi </p>
            </div>
            <form className='mt-20' onSubmit={ handleSubmit(submit) } method="POST">
                <div className='d-flex flex-column mb-20'>
                    <input { ...register('name', {
                        minLength: {
                            value:2,
                            message: 'Merci de saisir un nom qui contient au moins 2 caractères'
                        },
                        required: {
                            value: true,
                            message: 'Champ requis'
                        }
                    })} id='name' placeholder='Nom' type="text" />
                    <div className={styles.error}>
                        { errors?.name && <p>{errors.name.message}</p> }
                    </div>
                    <input { ...register('mail', {
                        required: {
                            value: true,
                            message: 'Champ requis'
                        }
                    }) } id='mail' placeholder='Email' type="email" />
                    <div className={styles.error}>
                        { errors?.mail && <p>{errors.mail.message}</p> }
                    </div>
                    <input { ...register('subject') } type="text" placeholder='Sujet' />
                    <textarea { ...register('text', {
                        required: {
                            value: true,
                            message: 'Champ requis'
                        },
                    }) } id="message" placeholder='Message' cols="30" rows="10"></textarea>
                    <div className={styles.error}>
                        { errors?.text && <p>{errors.text.message}</p> }
                    </div>
                </div>
                <button disabled={ isSubmitting } className='btn btn-primary'>Envoyer</button>
            </form>
            <div className={styles.icons}>
                <div className={styles.squares}>
                    <a href="mailto:samuel.gustin.dev@gmail.com" className={styles.squareMail}><i className="fa-solid fa-square-envelope"></i></a>
                    <i onClick={() => window.open('https://github.com/SGdevWeb', '_blank')} className="fa-brands fa-square-github"></i>
                    <i onClick={() => window.open('https://linkedin.com/in/sgwebdev', '_blank')} className="fa-brands fa-linkedin"></i>
                    <i onClick={() => window.open('https://twitter.com/SG_devWeb', '_blank')}  className="fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Contact;