import {db} from "../config/db.config";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import {AddressParams} from "../models";
import {sortItems} from "../helpers";
import {builtFilterExpressionAddress} from "../utils";

const TableName = 'Address';

const addressSearch = async ({ id, name, address, start, end, sort, limit, lastCode, lastName }: AddressParams) => {
    try {
        const exclusiveStartKey =
            lastCode && lastName ? {code: lastCode, name: lastName} : undefined;

        const scanParams: DocumentClient.ScanInput = {
            TableName,
            Limit: limit,
            ExclusiveStartKey: exclusiveStartKey
        };

        if (id || name || address || start || end) {
            const {
                filterExpression,
                expressionAttributeNames,
                expressionAttributeValues,
            } = builtFilterExpressionAddress({id, name, address, start, end});

            scanParams.FilterExpression = filterExpression;
            scanParams.ExpressionAttributeNames = expressionAttributeNames;
            scanParams.ExpressionAttributeValues = expressionAttributeValues;
        }

        const result = await db.scan(scanParams).promise();
        const [sortField, sortOrder] = sort?.split(",") ?? [];
        let items = result.Items || [];

        if (!id) {
            items = sortItems(items, sortField, sortOrder);
        }

        result.Items = items;

        return result;
    } catch (e) {
        throw e;
    }
};

export {addressSearch};
