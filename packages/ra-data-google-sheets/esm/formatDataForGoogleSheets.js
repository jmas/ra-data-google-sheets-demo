export const processForm = (headers, id, formData) => {
    const values = headers.map((header) => {
        if (header === "id") {
            return id;
        }
        return formData[header] || "";
    });
    return [values];
};
//# sourceMappingURL=formatDataForGoogleSheets.js.map