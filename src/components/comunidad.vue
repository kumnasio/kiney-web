<template>
    <section class="discord-section">

        <h2>Únete a la comunidad</h2>

        <div class="discord-card">

            <div class="discord-info">

                <div class="discord-icon">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.54 5.31A16.84 16.84 0 0 0 15.36 4l-.52 1.06a15.4 15.4 0 0 0-5.68 0L8.64 4a16.84 16.84 0 0 0-4.18 1.31C1.81 9.26 1.09 13.1 1.45 16.89A16.9 16.9 0 0 0 6.6 19.5l1.27-1.72c-.7-.27-1.36-.61-1.97-1.02l.48-.37c3.81 1.79 7.95 1.79 11.71 0l.48.37c-.61.41-1.27.75-1.97 1.02l1.27 1.72a16.9 16.9 0 0 0 5.15-2.61c.42-4.38-.72-8.18-3.48-11.58ZM8.9 14.75c-1.14 0-2.08-1.04-2.08-2.32s.91-2.32 2.08-2.32c1.18 0 2.1 1.04 2.08 2.32 0 1.28-.91 2.32-2.08 2.32Zm6.2 0c-1.14 0-2.08-1.04-2.08-2.32s.91-2.32 2.08-2.32c1.18 0 2.1 1.04 2.08 2.32 0 1.28-.91 2.32-2.08 2.32Z"
                        />
                    </svg>
                </div>

                <div class="discord-name">
                    <h3>Discord del canal</h3>
                    <span>La comunidad de kiney</span>
                </div>

            </div>


            <a
                :href="discordInvite"
                target="_blank"
                rel="noopener noreferrer"
                class="join-button"
            >
                Unirse
            </a>


            <p class="discord-description">
                Aquí podrás enviar tu setup y pedir consejos,
                hablar conmigo e incluso participar en futuros
                contenidos para el canal...
            </p>

        </div>

    </section>
</template>


<script>
export default {
    name: 'DiscordWidget',

    data() {
        return {
            discordInvite: 'https://discord.gg/TU_INVITACION'
        }
    }
}
</script>


<style scoped>

.discord-section {
    width: 80%;
    max-width: 1100px;

    margin: 80px auto;
}


.discord-section h2 {
    margin: 0 0 45px;

    text-align: center;

    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;

    color: #f5f5f5;
}


/* =========================
   CARD
========================= */

.discord-card {
    position: relative;

    display: grid;

    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;

    gap: 35px;

    padding: 35px 40px;

    border: 1px solid #303030;
    border-radius: 25px;

    background: #151515;

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        background-color 0.25s ease;
}


.discord-card:hover {
    transform: translateY(-3px);

    border-color: #5865f2;

    background: #181818;
}


/* =========================
   INFO
========================= */

.discord-info {
    display: flex;

    align-items: center;

    gap: 20px;
}


.discord-icon {
    width: 70px;
    height: 70px;

    flex-shrink: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: #5865f2;
    color: white;
}


.discord-icon svg {
    width: 42px;
    height: 42px;
}


.discord-name h3 {
    margin: 0 0 5px;

    font-size: 24px;
    font-weight: 600;

    color: #f5f5f5;
}


.discord-name span {
    color: #999;

    font-size: 14px;
}


/* =========================
   BUTTON
========================= */

.join-button {
    align-self: center;

    padding: 12px 30px;

    border: 1px solid #5865f2;
    border-radius: 12px;

    background: transparent;
    color: #f5f5f5;

    text-decoration: none;

    font-size: 16px;
    font-weight: 600;

    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
}


.join-button:hover {
    background: #5865f2;
    color: white;

    transform: scale(1.03);
}


/* =========================
   DESCRIPTION
========================= */

.discord-description {
    grid-column: 1 / -1;

    max-width: 900px;

    margin: 0;

    color: #b5b5b5;

    font-size: 16px;
    line-height: 1.6;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 600px) {

    .discord-section {
        width: 90%;
    }

    .discord-card {
        grid-template-columns: 1fr;

        padding: 25px;

        gap: 25px;
    }

    .discord-info {
        align-items: flex-start;
    }

    .discord-icon {
        width: 55px;
        height: 55px;
    }

    .discord-icon svg {
        width: 32px;
        height: 32px;
    }

    .discord-name h3 {
        font-size: 20px;
    }

    .join-button {
        width: 100%;

        text-align: center;
    }
}

</style>