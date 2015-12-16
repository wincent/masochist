/**
 * @flow
 */

/**
 * Return a non-cryptographic, numeric hash code for the provided string.
 *
 * Note that the code may be negative.
 *
 * Based on:
 *
 * - http://stackoverflow.com/a/7616484/2103996
 * - http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
 */
export default function hashString(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        let char = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer.
    }
    return hash;
}
