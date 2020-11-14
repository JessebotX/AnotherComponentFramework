export default Component;
/**
 * Create a reusable AnotherComponentFramework component
 */
declare class Component {
    /**
     * Constructs a Component in AnotherComponentFramework
     *
     * @constructor
     * @param {string} selector the element's selector that will have inner html injected into it (i.e. #item -> <element id="item">)
     * @param {string} html the inner html
     */
    constructor(selector: string, html: string);
    selector: string;
    html: string;
    /**
     * Get the custom component's html
     */
    getHtml(): string;
    /**
     * Set the custom component's html
     *
     * @param {string} val the new value you want to set
     */
    setHtml(val: string): void;
    /**
     * Get the parent element selector
     */
    getSelector(): string;
    /**
     * Set the parent element selector
     *
     * @param {string} val the new value
     */
    setSelector(val: string): void;
    /**
     * Calls build again which will build and render the component
     */
    rebuild(): void;
    /**
     * Build and render component
     *
     * @access private
     * @private
     */
    private build;
}
