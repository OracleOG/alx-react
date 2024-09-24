import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils functions", () => {
    test("getFullYear", () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    test("getFooterCopy", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });

    test("getLatestNotification", () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
});