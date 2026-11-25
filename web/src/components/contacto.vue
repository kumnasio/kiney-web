<template>
    <section id="contacto" class="section" aria-labelledby="contacto-title">

        <header class="section-head">
            <span class="eyebrow">Business</span>
            <h2 id="contacto-title" class="display">Hablemos.</h2>
            <p class="lead">
                Escríbeme a
                <a href="mailto:kiney.contact@gmail.com">kiney.contact@gmail.com</a>
                o rellena este formulario.
            </p>
        </header>


        <form class="contact-form" @submit.prevent="submitForm">

            <div class="form-row">
                <label class="field">
                    <span>Nombre</span>
                    <input
                        v-model="form.name"
                        type="text"
                        name="name"
                        autocomplete="name"
                        placeholder="Tu nombre…"
                        required
                    >
                </label>

                <label class="field">
                    <span>Asunto</span>
                    <input
                        v-model="form.subject"
                        type="text"
                        name="subject"
                        autocomplete="off"
                        placeholder="Colaboración, patrocinio…"
                        required
                    >
                </label>
            </div>

            <label class="field">
                <span>Mensaje</span>
                <textarea
                    v-model="form.message"
                    name="message"
                    placeholder="Cuéntame tu idea…"
                    required
                ></textarea>
            </label>

            <div class="form-foot">
                <p class="status" role="status" aria-live="polite">{{ status }}</p>

                <button type="submit" class="btn" :disabled="sending">
                    {{ sending ? 'Enviando…' : 'Enviar' }}
                    <span class="btn-arrow" aria-hidden="true"><i class="pi pi-send"></i></span>
                </button>
            </div>

        </form>

    </section>
</template>


<script>
export default {
    name: 'Contacto',

    data() {
        return {
            sending: false,
            status: '',

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
            this.status = ''

            try {

                console.log('Formulario enviado:', this.form)

                /*
                 * TODO: el formulario aún no envía nada.
                 * Aquí irá el fetch(...) a tu backend o servicio de formularios.
                 */

                this.status = 'Mensaje enviado. Te responderé lo antes posible.'

                this.form = {
                    name: '',
                    subject: '',
                    message: ''
                }

            } catch (error) {

                console.error('Error enviando el formulario:', error)

                this.status = 'No se ha podido enviar. Prueba de nuevo o escríbeme por correo.'

            } finally {

                this.sending = false

            }
        }
    }
}
</script>


<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 760px;
    margin: 0 auto;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.field span {
    color: var(--cream-dim);
    font-size: 14px;
    font-weight: 500;
}

.field input,
.field textarea {
    width: 100%;

    border: 1px solid var(--glass-edge);
    border-radius: 14px;

    background: rgba(255, 255, 255, 0.05);
    -webkit-backdrop-filter: var(--glass-blur);
    backdrop-filter: var(--glass-blur);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
    color: var(--cream);

    font: inherit;
    font-size: 17px;

    transition:
        border-color var(--fast) var(--ease),
        background-color var(--fast) var(--ease);
}

.field input {
    height: 54px;
    padding: 0 18px;
}

.field textarea {
    min-height: 220px;
    padding: 16px 18px;
    resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
    color: var(--muted);
}

.field input:hover,
.field textarea:hover {
    border-color: var(--cream-dim);
}

.field input:focus-visible,
.field textarea:focus-visible {
    outline: 2px solid var(--link);
    outline-offset: 2px;
    border-color: transparent;
    background: rgba(255, 255, 255, 0.09);
}

.form-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.status {
    margin: 0;
    color: var(--cream-dim);
    font-size: 15px;
}

@media (max-width: 700px) {
    .form-row {
        grid-template-columns: 1fr;
    }

    .form-foot {
        flex-direction: column-reverse;
        align-items: stretch;
    }

    .form-foot .btn {
        justify-content: space-between;
    }
}
</style>
