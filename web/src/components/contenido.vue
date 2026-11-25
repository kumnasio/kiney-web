<template>
    <section id="contenido" class="section" aria-labelledby="contenido-title">

        <header class="section-head">
            <span class="eyebrow">Contenido</span>
            <h2 id="contenido-title" class="display">Lo último del canal.</h2>
            <p class="lead">
                Setups, proyectos y todo lo que voy montando por el camino.
            </p>
        </header>

        <!-- CABECERA DEL CANAL -->
        <div class="channel">
            <div class="channel-main">
                <img
                    class="channel-logo"
                    src="../assets/kiney-logo.jpg"
                    alt=""
                >

                <div>
                    <h3 class="channel-name">kiney</h3>
                    <p class="channel-meta">
                        @kiney · {{ channel.subscribers }} suscriptores · {{ channel.videos }} vídeos
                    </p>
                </div>
            </div>

            <a
                class="btn"
                :href="channel.url"
                target="_blank"
                rel="noopener noreferrer"
            >
                Suscribirse
                <span class="btn-arrow" aria-hidden="true"><i class="pi pi-youtube"></i></span>
            </a>
        </div>

        <!-- GRID DE VÍDEOS -->
        <div class="videos">
            <article
                v-for="video in videos"
                :key="video.id"
                class="video"
            >
                <a class="video-link" :href="video.url || channel.url" target="_blank" rel="noopener noreferrer">
                    <div class="thumb">
                        <img
                            v-if="video.thumbnail"
                            :src="video.thumbnail"
                            alt=""
                            loading="lazy"
                        >
                        <div v-else class="placeholder" aria-hidden="true">
                            <i class="pi pi-play-circle"></i>
                        </div>

                        <span class="duration">{{ video.duration }}</span>
                    </div>

                    <h3 class="video-title">{{ video.title }}</h3>
                    <p class="video-meta">
                        {{ video.views }} visualizaciones · {{ video.date }}
                    </p>
                </a>
            </article>
        </div>

    </section>
</template>


<script>
// Cuando tengas las miniaturas, impórtalas y ponlas en `thumbnail`:
// import video1 from '../assets/video1-thumbnail.jpg'

export default {
    name: 'contenido',

    data() {
        return {
            channel: {
                // TODO: confirmar la URL del canal
                url: 'https://www.youtube.com/@kiney',
                subscribers: '3,67 mil',
                videos: 42
            },

            videos: [
                {
                    id: 1,
                    title: 'Mi setup definitivo para crear contenido',
                    thumbnail: null,
                    url: null,
                    duration: '12:34',
                    views: '12 mil',
                    date: 'hace 2 días'
                },
                {
                    id: 2,
                    title: 'Construyendo mi nuevo setup',
                    thumbnail: null,
                    url: null,
                    duration: '18:42',
                    views: '8,4 mil',
                    date: 'hace 1 semana'
                },
                {
                    id: 3,
                    title: 'Así organizo todo mi escritorio',
                    thumbnail: null,
                    url: null,
                    duration: '9:21',
                    views: '5,2 mil',
                    date: 'hace 2 semanas'
                }
            ]
        }
    }
}
</script>


<style scoped>
/* =========================
   CANAL
========================= */

.channel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    margin-bottom: 28px;
    padding: 20px 20px 20px 24px;

    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: var(--r-card);
}

.channel-main {
    display: flex;
    align-items: center;
    gap: 18px;
    min-width: 0;
}

.channel-logo {
    width: 64px;
    height: 64px;
    flex-shrink: 0;

    object-fit: cover;
    border-radius: 50%;
}

.channel-name {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.025em;
}

.channel-meta {
    margin: 2px 0 0;
    color: var(--muted);
    font-size: 14px;
}

/* =========================
   VÍDEOS
========================= */

.videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px 20px;
}

.video {
    min-width: 0;
}

.video-link {
    display: block;
    color: inherit;
}

.video-link:hover {
    text-decoration: none;
}

.thumb {
    position: relative;
    overflow: hidden;

    aspect-ratio: 16 / 9;
    border-radius: var(--r-thumb);
    border: 1px solid var(--hairline);

    background: var(--surface-raised);
}

.thumb img,
.thumb .placeholder {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform var(--base) var(--ease);
}

.video-link:hover .thumb img,
.video-link:hover .thumb .placeholder {
    transform: scale(1.03);
}

.duration {
    position: absolute;
    right: 10px;
    bottom: 10px;

    padding: 3px 7px;
    border-radius: 6px;

    background: rgba(11, 10, 9, 0.8);
    color: var(--cream);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
}

.video-title {
    margin: 14px 0 4px;

    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.022em;
}

.video-meta {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {
    .videos {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .channel {
        flex-direction: column;
        align-items: flex-start;
    }

    .videos {
        grid-template-columns: 1fr;
    }
}
</style>
