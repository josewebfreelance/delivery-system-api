import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

export const sortItems = (
    items: DocumentClient.ItemList | undefined,
    sortField: string,
    sortOrder: string
) => {
    return items && items.length > 0 ? items.sort((a, b) => {
        if (!a[sortField] || !b[sortField]) return 0;

        if (sortOrder === 'ASC') {
            return a[sortField] < b[sortField] ? -1 : 1;
        } else {
            return a[sortField] > b[sortField] ? -1 : 1;
        }
    }) : [];
}
