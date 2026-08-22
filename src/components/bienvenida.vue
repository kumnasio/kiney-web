<template>
    <div class="container">
        <div class="content">
            <h1>Hey, me alegra verte aquí...</h1>
            <p>
                Aquí encontrarás lo que buscas, ¿por dónde quieres empezar?
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bienvenida'
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
}

.content {
    max-width: 80vw;
}

.content h1 {
    margin: 0;

    font-size: clamp(2.5rem, 5vw, 5rem);
    font-weight: 700;
}

.content p {
    margin-top: 1rem;

    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #b7b7b7;
}

</style>