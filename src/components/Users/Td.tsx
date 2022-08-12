import { NavLink } from 'react-router-dom';
interface TdRow {
    children: String | number;
    to: string;
    className: string;
}
export default function Td({ children, to, className }: TdRow) {
    const ContentTag = to ? NavLink : 'td';

    return (
        <td>
            <ContentTag to={to} className={className}>
                {children}
            </ContentTag>
        </td>
    );
}
