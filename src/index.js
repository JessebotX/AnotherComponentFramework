/*
-----
ACF (AnotherComponentFramework) is under the 0BSD License
-----

Permission to use, copy, modify, and/or distribute this software for any purpose with or 
without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO 
THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT
SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR
ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH 
THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

/**
 * Create a reusable AnotherComponentFramework component
 */
class Component {
    /**
     * Constructs a Component in AnotherComponentFramework
     * 
     * @constructor
     * @param {string} selector the element's selector that will have inner html injected into it (i.e. #item -> <element id="item">)
     * @param {string} html the inner html
     */
    constructor(selector, html) {
        this.selector = selector;
        this.html = html;

        build();
    }

    /**
     * Get the custom component's html
     */
    getHtml() {
        return this.html;
    }

    /**
     * Set the custom component's html
     * 
     * @param {string} val the new value you want to set
     */
    setHtml(val) {
        this.html = val;
    }

    /**
     * Get the parent element selector
     */
    getSelector() {
        return this.selector;
    }

    /**
     * Set the parent element selector
     * 
     * @param {string} val the new value
     */
    setSelector(val) {
        this.selector = val;
    }

    /**
     * Calls build again which will build and render the component
     */
    rebuild() {
        this.build();
    }

    /**
     * Build and render component
     * 
     * @access private
     * @private
     */
    build() {
        let el = document.querySelectorAll(this.selector);

        for (let i = 0; i < el.length; i++)
            el[i].innerHTML = this.html;
    }
}

export default Component;
