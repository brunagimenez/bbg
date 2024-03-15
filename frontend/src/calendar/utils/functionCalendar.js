import { dayNames } from "./month";

export const getNumberOfDaysInMonth = (year, month) => {
    return new Date(year,month + 1, 0).getDate();
}

export const getSortedDay = (year, month) => {
    const dayIndex = new Date(year, month, 1).getDay();
    const firtHalf = dayNames.slice(dayIndex);
    return [...firtHalf, ...dayNames.slice(0, dayIndex)]
}

export const range = (start, end) => {
    const length = Math.abs((end - start)/1);
    
    const { result } = Array.from({ length }).reduce(({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
    }), { result: [], current: start });

    return result;
};
