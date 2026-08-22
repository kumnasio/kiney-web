<template>
    <section class="contact">

        <div class="contact-header">
            <h1>Contacto - Business</h1>

            <p>
                Puedes contactarme enviando un correo a
                <a href="mailto:kiney.contact@gmail.com">
                    kiney.contact@gmail.com
                </a>
                o directamente rellenando este formulario
            </p>
        </div>


        <form class="contact-form" @submit.prevent="submitForm">

            <div class="form-row">

                <input
                    v-model="form.name"
                    type="text"
                    placeholder="Nombre"
                    required
                >

                <input
                    v-model="form.subject"
                    type="text"
                    placeholder="Asunto"
                    required
                >

            </div>


            <textarea
                v-model="form.message"
                placeholder="Mensaje"
                required
            ></textarea>


            <button
                type="submit"
                :disabled="sending"
            >
                {{ sending ? 'Enviando...' : 'Enviar' }}
            </button>

        </form>

    </section>
</template>


<script>
export default {
    name: 'Contacto',

    data() {
        return {
            sending: false,

            form: {
                name: '',
                subject: '',
                message: ''
            }
        }
    },

    methods: {
        async submitForm() {

            this.sending = true

            try {

                console.log('Formulario enviado:', this.form)

                /*
                 * Aquí posteriormente puedes hacer:
                 *
                 * await fetch(...)
                 *
                 * para enviar el formulario a tu backend
                 */

                alert('Mensaje enviado correctamente')

                this.form = {
                    name: '',
                    subject: '',
                    message: ''
                }

            } catch (error) {

                console.error('Error enviando el formulario:', error)

                alert('Ha ocurrido un error al enviar el mensaje')

            } finally {

                this.sending = false

            }
        }
    }
}
</script>


<style scoped>

.contact {
    width: 80%;
    max-width: 1100px;

    margin: 120px auto 80px;

    color: #f5f5f5;
}


/* =========================
   HEADER
========================= */

.contact-header {
    text-align: center;

    margin-bottom: 45px;
}


.contact-header h1 {
    margin: 0 0 20px;

    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;

    letter-spacing: -1px;
}


.contact-header p {
    max-width: 850px;

    margin: 0 auto;

    color: #aaa;

    font-size: clamp(1rem, 2vw, 1.3rem);

    line-height: 1.6;
}


.contact-header a {
    color: #f5f5f5;

    font-weight: 600;

    text-decoration: none;

    transition: color 0.2s ease;
}


.contact-header a:hover {
    color: #8b5cf6;
}


/* =========================
   FORM
========================= */

.contact-form {
    display: flex;

    flex-direction: column;

    gap: 25px;
}


.form-row {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 25px;
}


.contact-form input,
.contact-form textarea {
    width: 100%;

    box-sizing: border-box;

    border: 1px solid #303030;
    border-radius: 15px;

    outline: none;

    background: #151515;
    color: #f5f5f5;

    font-family: inherit;
    font-size: 16px;

    transition:
        border-color 0.2s ease,
        background-color 0.2s ease,
        box-shadow 0.2s ease;
}


.contact-form input {
    height: 65px;

    padding: 0 20px;
}


.contact-form textarea {
    min-height: 360px;

    padding: 20px;

    resize: vertical;
}


.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: #999;
}


/* =========================
   FOCUS
========================= */

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #8b5cf6;

    background: #181818;

    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
}


/* =========================
   BUTTON
========================= */

.contact-form button {
    width: 100%;

    height: 60px;

    border: none;
    border-radius: 12px;

    background: #f5f5f5;
    color: #111;

    font-family: inherit;
    font-size: 17px;
    font-weight: 700;

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        transform 0.2s ease;
}


.contact-form button:hover:not(:disabled) {
    background: #dcdcdc;

    transform: translateY(-2px);
}


.contact-form button:active:not(:disabled) {
    transform: translateY(0);
}


.contact-form button:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 700px) {

    .contact {
        width: 90%;

        margin-top: 100px;
    }


    .form-row {
        grid-template-columns: 1fr;

        gap: 20px;
    }


    .contact-form textarea {
        min-height: 280px;
    }

}

</style>