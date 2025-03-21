export interface AddressParams {
    id: string | undefined;
    name: string | undefined;
    address: string | undefined;
    start: string | undefined;
    end: string | undefined;
    sort: string | undefined;
    limit: number | undefined;
    lastCode: string | undefined;
    lastName: string | undefined;
}

export interface FilterExpressionAddressParams {
    id?: string;
    name?: string;
    address?: string;
    start?: string;
    end?: string;
}

export class AddressModel extends Document {
    id = 0;
    name = '';
    department = '';
    municipality = '';
    address = '';
}
