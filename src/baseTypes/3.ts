let some: unknown;
some = 'Text';
let str: string;
str = typeof some === 'string' ? some as string : '';

export {};