import { SetStateAction } from 'react';

export interface MainItemsProps {
    state: object;
    setState: React.Dispatch<SetStateAction<object>>;
    calculate?: Function;
}
