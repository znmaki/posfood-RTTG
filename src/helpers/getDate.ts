export const getDate = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return `${hoy.toLocaleString('en-US', { month: 'long' })} ${hoy.getDate()}, ${hoy.getFullYear()}`;
}