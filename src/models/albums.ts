export interface Albums {
    userId: number;
    id: number | string;
    title: string;
}

export interface UserUpdate {
    id: number;
    dataUser: {
        email: string;
        website: string;
        phone: string;
    };
}
