export declare class KatexExpression
{
    /**
     * Katex expression to render
     */
    expression: string;

    /**
     * Katex render options
     */
    katexOptions: string;

    /**
     * Function object to pass the error object. Argument is either a KatexExpressionError or a Katex.ParseError
    */
    errorHandler: Function;

    /**
     * [render html]
     * @return {none} [Nothing]
     */
    render(): any;
}

export declare class KatexExpressionError extends Error 
{

}