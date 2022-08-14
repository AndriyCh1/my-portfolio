export const formatDate = (date: Date): string => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    const dateNumber = date.getDate();

    return `${dateNumber} ${monthName} ${year}`;
};
