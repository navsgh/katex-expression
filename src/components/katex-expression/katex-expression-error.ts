export class KatexExpressionError extends Error 
{
    constructor(message: string) 
    {
        super(message);
        Object.setPrototypeOf(this, KatexExpressionError.prototype);
    }
}