import {assertEquals} from './daily.js'

test('Compare two parameters', () => {
    expect(assertEquals("a","b")).toBe(false);
    expect(assertEquals("a","a")).toBe(true);
    expect(assertEquals(1,2)).toBe(false);
    expect(assertEquals(2,2)).toBe(true);
    expect(assertEquals("2",2)).toBe(false);
    expect(assertEquals("This value","This value")).toBe(true);
});

test("test testing", () => {
    console.log("Hello World")
})