<template>
    <div class="youtube-page">

        <!-- CABECERA DEL CANAL -->
        <section class="channel">

            <div class="channel-info">

                <div class="channel-main">
                    <img
                        class="channel-logo"
                        src="../assets/kiney-logo.jpg"
                        alt="Kiney"
                    >

                    <div class="channel-data">
                        <h1>kiney</h1>

                        <p class="handle">
                            @kiney
                        </p>

                        <p class="subscribers">
                            3,67 mil suscriptores · 42 vídeos
                        </p>

                        <p class="description">
                            Bienvenido a mi canal. Aquí encontrarás contenido,
                            proyectos, setups y mucho más.
                        </p>
                    </div>
                </div>

                <button class="subscribe">
                    Suscribirse
                </button>

            </div>


        </section>


        <!-- CONTENIDO -->
        <main class="content">

            <div class="content-header">
                <h2>Vídeos</h2>

                <div class="filters">

                    <button class="filter active">
                        Más populares
                    </button>
                </div>
            </div>


            <!-- GRID DE VÍDEOS -->
            <div class="videos">

                <article
                    class="video"
                    v-for="video in videos"
                    :key="video.id"
                >

                    <div class="thumbnail-container">

                        <img
                            class="thumbnail"
                            :src="video.thumbnail"
                            :alt="video.title"
                        >

                        <span class="duration">
                            {{ video.duration }}
                        </span>

                    </div>

                    <div class="video-info">

                        <img
                            class="video-avatar"
                            src="../assets/kiney-logo.jpg"
                            alt="Kiney"
                        >

                        <div>
                            <h3>
                                {{ video.title }}
                            </h3>

                            <p>
                                kiney
                            </p>

                            <p>
                                {{ video.views }} visualizaciones ·
                                {{ video.date }}
                            </p>
                        </div>

                    </div>

                </article>

            </div>

        </main>

    </div>
</template>


<script>
// import video1 from '../assets/video1-thumbnail.jpg'
// import video2 from '../assets/video2-thumbnail.jpg'
// import video3 from '../assets/video3-thumbnail.jpg'

export default {
    name: 'contenido',

    data() {
        return {
            videos: [
                {
                    id: 1,
                    title: 'Mi setup definitivo para crear contenido',
                    thumbnail: null,
                    duration: '12:34',
                    views: '12 mil',
                    date: 'hace 2 días'
                },
                {
                    id: 2,
                    title: 'Construyendo mi nuevo setup',
                    thumbnail: null,
                    duration: '18:42',
                    views: '8,4 mil',
                    date: 'hace 1 semana'
                },
                {
                    id: 3,
                    title: 'Así organizo todo mi escritorio',
                    thumbnail: null,
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

.youtube-page {
    width: 80vw;
    max-width: 80vw;

    margin: 0 auto;

    background: #0f0f0f;
    color: #f1f1f1;

    /* border: 1px solid rgba(255, 0, 0, 0.5); */
    border-radius: 1rem;

    padding-bottom: 80px;
}


/* =========================
   CANAL
========================= */

.channel {
    width: 100%;
}

.channel-banner {
    width: 100%;
    height: 220px;

    background:
        linear-gradient(
            135deg,
            #181818,
            #292929
        );

    border-radius: 0 0 12px 12px;
}


.channel-info {
    max-width: 1200px;

    margin: 0 auto;

    padding: 30px 20px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}


.channel-main {
    display: flex;
    align-items: center;
    gap: 25px;
}


.channel-logo {
    width: 120px;
    height: 120px;

    object-fit: cover;

    border-radius: 50%;
}


.channel-data h1 {
    margin: 0;

    font-size: 32px;
    font-weight: 700;
}


.handle {
    margin: 5px 0;

    color: #aaa;
}


.subscribers {
    margin: 8px 0;

    color: #aaa;

    font-size: 14px;
}


.description {
    max-width: 600px;

    margin-top: 15px;

    color: #ddd;
}


/* =========================
   SUSCRIBIRSE
========================= */

.subscribe {
    border: none;

    padding: 12px 22px;

    border-radius: 20px;

    background: #f1f1f1;
    color: #0f0f0f;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;
}


.subscribe:hover {
    background: #d9d9d9;
}


/* =========================
   TABS
========================= */

.channel-tabs {
    max-width: 1200px;

    margin: auto;

    display: flex;

    border-bottom: 1px solid #303030;
}


.channel-tabs button {
    position: relative;

    padding: 18px 25px;

    border: none;

    background: transparent;

    color: #aaa;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
}


.channel-tabs button:hover {
    color: white;
}


.channel-tabs button.active {
    color: white;
}


.channel-tabs button.active::after {
    content: "";

    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 3px;

    background: white;
}


/* =========================
   CONTENIDO
========================= */

.content {
    max-width: 1200px;

    margin: 0 auto;

    padding: 30px 20px;
}


.content-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;
}


.content-header h2 {
    margin: 0;

    font-size: 24px;
}


.filters {
    display: flex;
    gap: 10px;
}


.filter {
    padding: 8px 15px;

    border: 1px solid #303030;

    border-radius: 20px;

    background: #181818;
    color: #aaa;

    cursor: pointer;
}


.filter:hover {
    background: #272727;
    color: white;
}


.filter.active {
    background: #f1f1f1;
    color: #0f0f0f;
}


/* =========================
   VIDEOS
========================= */

.videos {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 35px 20px;
}


.video {
    min-width: 0;

    cursor: pointer;
}


.thumbnail-container {
    position: relative;

    width: 100%;

    aspect-ratio: 16 / 9;

    overflow: hidden;

    border-radius: 10px;

    background: #222;
}


.thumbnail {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.3s ease;
}


.video:hover .thumbnail {
    transform: scale(1.03);
}


.duration {
    position: absolute;

    right: 8px;
    bottom: 8px;

    padding: 3px 5px;

    border-radius: 4px;

    background: rgba(0, 0, 0, 0.85);

    color: white;

    font-size: 12px;
}


.video-info {
    display: flex;

    gap: 12px;

    margin-top: 12px;
}


.video-avatar {
    flex-shrink: 0;

    width: 36px;
    height: 36px;

    object-fit: cover;

    border-radius: 50%;
}


.video-info h3 {
    margin: 0 0 6px;

    font-size: 16px;
    line-height: 1.3;

    color: #f1f1f1;
}


.video-info p {
    margin: 3px 0;

    color: #aaa;

    font-size: 13px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

    .videos {
        grid-template-columns: repeat(2, 1fr);
    }

    .channel-info {
        align-items: flex-start;
    }

}


@media (max-width: 600px) {

    .channel-banner {
        height: 130px;
    }

    .channel-info {
        flex-direction: column;
    }

    .channel-main {
        align-items: flex-start;
        flex-direction: column;
    }

    .channel-logo {
        width: 90px;
        height: 90px;
    }

    .channel-tabs {
        overflow-x: auto;
    }

    .channel-tabs button {
        white-space: nowrap;
    }

    .videos {
        grid-template-columns: 1fr;
    }

    .content-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

}

</style>