import {FilterExpressionAddressParams} from "../models";

export const builtFilterExpressionAddress = ({id, name, address, start, end }: FilterExpressionAddressParams) => {
    let filterExpression = '';
    let expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, unknown> = {};

    if (address) {
        filterExpression = 'contains(#address, :address)';
        expressionAttributeNames['#address'] = 'address';
        expressionAttributeValues[':address'] = address;
    }

    if (name) {
        if (filterExpression) {
            filterExpression += ' OR ';
        }
        filterExpression += 'contains(#name, :name)';
        expressionAttributeNames['#name'] = 'name';
        expressionAttributeValues[':name'] = name;
    }

    if (start && end) {
        if (filterExpression) {
            filterExpression += ' AND ';
        }

        filterExpression += '#createdAt BETWEEN :start AND :end';
        expressionAttributeNames['#createdAt'] = 'createdAt';
        expressionAttributeValues[':start'] = start;
        expressionAttributeValues[':end'] = end;
    }

    if (id) {
        filterExpression = '#code = :code';
        expressionAttributeNames['#code'] = 'code';
        expressionAttributeValues[':code'] = id;
    }

    return {filterExpression, expressionAttributeNames, expressionAttributeValues};
};
