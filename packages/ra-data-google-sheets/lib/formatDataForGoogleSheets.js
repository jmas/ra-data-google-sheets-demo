"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processForm = void 0;
const processForm = (headers, id, formData) => {
    const values = headers.map((header) => {
        if (header === "id") {
            return id;
        }
        return formData[header] || "";
    });
    return [values];
};
exports.processForm = processForm;
//# sourceMappingURL=formatDataForGoogleSheets.js.map