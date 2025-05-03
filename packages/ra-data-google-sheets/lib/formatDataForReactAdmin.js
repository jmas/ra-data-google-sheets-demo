"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processSheet = exports.processRows = exports.processRow = void 0;
const processRow = (headers, row) => {
    return row.reduce((acc, cur, index) => {
        acc[headers[index]] = cur;
        return acc;
    }, {});
};
exports.processRow = processRow;
const processRows = ([headers, ...rows]) => {
    return {
        headers,
        data: rows.map((row) => (0, exports.processRow)(headers, row)),
    };
};
exports.processRows = processRows;
const processSheet = (rows) => {
    const processedData = (0, exports.processRows)(rows);
    return {
        data: processedData.data,
        headers: processedData.headers,
        total: processedData.data.length,
    };
};
exports.processSheet = processSheet;
//# sourceMappingURL=formatDataForReactAdmin.js.map