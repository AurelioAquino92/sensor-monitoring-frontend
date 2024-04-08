export const dateFormatter = (date: Date | null) => {
    if (!date) return 'Sem Data Selecionada'
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date)
}