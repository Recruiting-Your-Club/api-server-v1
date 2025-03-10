interface GetRecruitmentStatusProps {
    startDate: string;
    endDate: string;
}

const convertToDate = (inputDate: string) => {
    const formattedDate = inputDate.replace(/\./g, '-');
    return new Date(formattedDate);
};

const convertToStartDate = (inputDate: string) => {
    const startDate = convertToDate(inputDate);
    startDate.setHours(0, 0, 0, 0);
    return startDate;
};
const convertToEndDate = (inputDate: string) => {
    const endDate = convertToDate(inputDate);
    endDate.setHours(23, 59, 59, 999);
    return endDate;
};

export const getStatus = ({ startDate, endDate }: GetRecruitmentStatusProps) => {
    const current = new Date();
    const start = convertToStartDate(startDate);
    const end = convertToEndDate(endDate);

    if (current < start) return 'primary';
    else if (end < current) return 'end';
    else return 'progress';
};
