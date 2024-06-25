import { format, parseISO } from 'date-fns';

const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, 'dd MMM yyyy');
};

export default formatDate;
