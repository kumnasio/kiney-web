<template>
    <section id="comunidad" class="section" aria-labelledby="comunidad-title">

        <header class="section-head">
            <span class="eyebrow">Comunidad</span>
            <h2 id="comunidad-title" class="display">Únete a la comunidad.</h2>
            <p class="lead">
                Enseña tu setup, pide consejo, habla conmigo y participa en los
                próximos vídeos del canal.
            </p>
        </header>

        <div class="discord-card">
            <div class="discord-info">
                <div class="discord-icon" aria-hidden="true">
                    <i class="pi pi-discord"></i>
                </div>

                <div>
                    <h3>Discord del canal</h3>
                    <p>La comunidad de kiney</p>
                </div>
            </div>

            <a
                :href="discordInvite"
                target="_blank"
                rel="noopener noreferrer"
                class="btn"
            >
                Unirse
                <span class="btn-arrow" aria-hidden="true"><i class="pi pi-arrow-right"></i></span>
            </a>
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
.discord-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    max-width: 760px;
    margin: 0 auto;
    padding: 28px 28px 28px 32px;

    background: var(--glass-fill);
    -webkit-backdrop-filter: var(--glass-blur);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-edge);
    box-shadow: var(--glass-shadow);
    border-radius: var(--r-card);

    transition:
        transform var(--base) var(--ease),
        border-color var(--base) var(--ease);
}

.discord-card:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.32);
}

.discord-info {
    display: flex;
    align-items: center;
    gap: 18px;
}

.discord-icon {
    display: grid;
    place-items: center;

    width: 56px;
    height: 56px;
    flex-shrink: 0;

    border-radius: 16px;

    background: var(--discord);
    color: #fff;
    font-size: 26px;
}

.discord-info h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.025em;
}

.discord-info p {
    margin: 2px 0 0;
    color: var(--muted);
    font-size: 14px;
}

@media (max-width: 600px) {
    .discord-card {
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
    }
}
</style>
