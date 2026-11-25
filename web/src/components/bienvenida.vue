<template>
    <section id="inicio" class="hero" aria-labelledby="hero-title">
        <div class="frame">
            <img
                class="hero-photo"
                src="../assets/hero.jpg"
                alt=""
                fetchpriority="high"
            >
            <div class="hero-shade" aria-hidden="true"></div>
            <div class="hero-grain" aria-hidden="true"></div>

            <div class="hero-bottom">
                <h1 id="hero-title" class="wordmark enter" style="--d: 0ms">
                    kiney<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" fill="currentColor"/></svg>
                </h1>

                <div class="hero-side">
                    <p class="hero-blurb enter" style="--d: 120ms">
                        Hey, me alegra verte aquí. Setups, tecnología y proyectos contados
                        sin prisa. ¿Por dónde quieres empezar?
                    </p>

                    <div class="hero-actions enter" style="--d: 220ms">
                        <a href="#contenido" class="btn">
                            Ver vídeos
                            <span class="btn-arrow" aria-hidden="true"><i class="pi pi-arrow-right"></i></span>
                        </a>
                        <a href="#setup" class="btn-ghost">Mi setup</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Bienvenida'
}
</script>

<style scoped>
.hero {
    padding: var(--gutter);
}

.frame {
    position: relative;
    isolation: isolate;
    overflow: hidden;

    min-height: calc(100svh - 2 * var(--gutter));
    border-radius: var(--r-frame);

    display: flex;
    align-items: flex-end;

    background: var(--surface);
}

.hero-photo {
    position: absolute;
    inset: 0;
    z-index: -3;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;

    filter: saturate(0.9) contrast(1.05);
    animation: settle 1600ms var(--ease) both;
}

/* Degradado para que el texto se lea sobre la foto */
.hero-shade {
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
        linear-gradient(180deg, rgba(11, 10, 9, 0.35) 0%, rgba(11, 10, 9, 0) 22%),
        linear-gradient(0deg, rgba(11, 10, 9, 0.92) 0%, rgba(11, 10, 9, 0.55) 30%, rgba(11, 10, 9, 0) 62%);
}

/* Grano de película */
.hero-grain {
    position: absolute;
    inset: -50%;
    z-index: -1;

    opacity: 0.16;
    mix-blend-mode: overlay;
    pointer-events: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.hero-bottom {
    width: 100%;
    padding: 0 clamp(20px, 3.2vw, 48px) clamp(20px, 3vw, 40px);

    display: grid;
    grid-template-columns: 1fr minmax(260px, 340px);
    align-items: end;
    gap: 32px;
}

.wordmark {
    display: flex;
    align-items: flex-start;

    margin: 0 0 0 -0.04em;

    color: var(--cream);
    font-size: clamp(6rem, 22vw, 20rem);
    font-weight: 500;
    line-height: 0.92;
    letter-spacing: -0.065em;
}

.star {
    width: 0.16em;
    height: 0.16em;
    margin: 0.02em 0 0 0.1em;
    flex-shrink: 0;
}

.hero-side {
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-bottom: 6px;
}

.hero-blurb {
    margin: 0;
    color: var(--cream-dim);
    font-size: 15px;
    line-height: 1.45;
    letter-spacing: -0.012em;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.hero-actions .btn-ghost {
    background: rgba(11, 10, 9, 0.35);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

/* Entrada */
.enter {
    animation: rise 900ms var(--ease) both;
    animation-delay: var(--d, 0ms);
}

@keyframes rise {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
}

@keyframes settle {
    from { transform: scale(1.06); }
    to { transform: scale(1); }
}

@media (max-width: 820px) {
    .hero-bottom {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .hero-photo {
        object-position: 35% 30%;
    }

    .wordmark {
        font-size: 30vw;
    }
}

@media (prefers-reduced-motion: reduce) {
    .enter,
    .hero-photo {
        animation: none;
    }
}
</style>
