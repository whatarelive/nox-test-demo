const EnumStatus = {
    PENDING: 'PENDING',
    TRANSPORTING: 'TRANSPORTING',
    PACKAGING: 'PACKAGING',
    DELIVERED: 'DELIVERED',
    CANCELED: 'CANCELED'
}

export function badgeProps( status: string ) {
    switch (status) {
        case EnumStatus.PENDING:
            return "gray";
        case EnumStatus.TRANSPORTING:
            return "blue";
        case EnumStatus.PACKAGING:
            return "orange";
        case EnumStatus.DELIVERED:
            return "green";
        case EnumStatus.CANCELED:
            return 'red';
        default:
            return ""
    }
}
