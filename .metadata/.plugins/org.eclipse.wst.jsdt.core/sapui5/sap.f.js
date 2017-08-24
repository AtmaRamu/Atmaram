
// ---- sap.f --------------------------------------------------------------------------


// ---- sap.f.DynamicPage --------------------------------------------------------------------------

/**
 * Constructor for a new Dynamic Page.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll} : boolean (default: false)</li>
 * <li>{@link #getHeaderExpanded headerExpanded} : boolean (default: true)</li>
 * <li>{@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick} : boolean (default: true)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.f.DynamicPageTitle</li>
 * <li>{@link #getHeader header} : sap.f.DynamicPageHeader</li>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.m.IBar</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * <strong><i>Overview</i></strong>
 * <br><br>
 * A {@link sap.f.DynamicPage} is a control that is used as a layout for an
 * application. It consists of a title, a header, content and a footer.
 * Additionally it offers dynamic behavior when scrolling, where part of the
 * header snaps to the title.
 * <br><br>
 * <strong>Notes:</strong>
 * <ul><li>If you're displaying a {@link sap.m.FlexBox FlexBox} control with
 * non-adaptive content (doesn't stretch to fill the available space), it is
 * recommended to set the <code>fitContainer</code> property of the
 * {@link sap.m.FlexBox FlexBox} to <code>false</code>.</li>
 * <li>If you are displaying a {@link sap.ui.table.Table}, keep in mind that it is
 * non-adaptive and may cause unpredicted behavior for the
 * {@link sap.f.DynamicPage DynamicPage} on smaller screen sizes, such as mobile.</li>
 * </ul>
 * <strong><i>Structure</i></strong>
 * <br><br>
 * The control consist of several components -
 * {@link sap.f.DynamicPageTitle DynamicPageTitle},
 * {@link sap.f.DynamicPageHeader DynamicPageHeader}, a content area, and a footer:
 * <ul><li>{@link sap.f.DynamicPageTitle DynamicPageTitle} - consists of a heading
 * on the left side, content in the middle, and actions on the right. The displayed
 * content changes based on the current mode of the {@link sap.f.DynamicPageHeader
 * DynamicPageHeader}.</li>
 * <li>{@link sap.f.DynamicPageHeader DynamicPageHeader} - a generic container, which
 * can contain a single layout control and does not care about the content alignment
 * and responsiveness. The header works in two modes - expanded and snapped and its
 * behavior can be adjusted with the help of different properties.</li>
 * <li>Content area - a generic container, which can have a single UI5 layout control
 * and does not care about the content alignment and responsiveness.</li>
 * <li>Footer - positioned at the bottom with a small offset and used for additional
 * actions, the footer floats above the content. It can be any {@link sap.m.IBar}
 * control.</li>
 * </ul>
 * <strong><i>Usage</i></strong>
 * <br><br>
 * Use the {@link sap.f.DynamicPage DynamicPage} if you need to have a title, that is
 * always visible and a header, that has configurable Expanding/Snapping functionality.
 * If you don't need the Expanding/Snapping functionality it is better to use the
 * {@link sap.m.Page} as a lighter control.
 * <br><br>
 * <strong><i>Responsive Behavior</i></strong>
 * <br><br>
 * The responsive behavior of the {@link sap.f.DynamicPage DynamicPage} depends on the
 * behavior of the content that is displayed.
 * @extends sap.ui.core.Control
 * @version 1.44.13
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPage = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation <code>content</code>.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyContent = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the footer in the aggregation <code>footer</code>.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyFooter = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the header in the aggregation <code>header</code>.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyHeader = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the title in the aggregation <code>title</code>.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyTitle = function() { return new sap.f.DynamicPage(); };

/**
 * Creates a new subclass of class sap.f.DynamicPage with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.DynamicPage.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * <code>DynamicPage</code> content.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation <code>footer</code>.
 * 
 * <code>DynamicPage</code> floating footer.
 * @returns {sap.m.IBar}
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getFooter = function() { return new sap.m.IBar(); };

/**
 * Gets content of aggregation <code>header</code>.
 * 
 * <code>DynamicPage</code> header.
 * @returns {sap.f.DynamicPageHeader}
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getHeader = function() { return new sap.f.DynamicPageHeader(); };

/**
 * Gets current value of property <code>headerExpanded</code>.
 * 
 * Determines whether the header is expanded.
 * <br><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example
 * when the expanded header is larger than the available screen area. For those cases a warning is logged.
 * The header can be also expanded/collapsed by user interaction, which requires the property to be
 * internally mutated by the control to reflect the changed state.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerExpanded</code>
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getHeaderExpanded = function() { return false; };

/**
 * Returns a metadata object for class sap.f.DynamicPage.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPage.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>preserveHeaderStateOnScroll</code>.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * <br><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>preserveHeaderStateOnScroll</code>
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getPreserveHeaderStateOnScroll = function() { return false; };

/**
 * Gets current value of property <code>showFooter</code>.
 * 
 * Determines whether the footer is visible.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFooter</code>
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getShowFooter = function() { return false; };

/**
 * Gets content of aggregation <code>title</code>.
 * 
 * <code>DynamicPage</code> title.
 * @returns {sap.f.DynamicPageTitle}
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getTitle = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Gets current value of property <code>toggleHeaderOnTitleClick</code>.
 * 
 * Determines whether the the user can switch between the expanded/collapsed states of the
 * <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code>. If set to
 * <code>false</code>, the <code>DynamicPageTitle</code> is not clickable and the application
 * must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toggleHeaderOnTitleClick</code>
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getToggleHeaderOnTitleClick = function() { return false; };

/**
 * Sets the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setContent = function(oContent) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated <code>footer</code>.
 * @param {sap.m.IBar} oFooter The footer to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setFooter = function(oFooter) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated <code>header</code>.
 * @param {sap.f.DynamicPageHeader} oHeader The header to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setHeader = function(oHeader) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property <code>headerExpanded</code>.
 * 
 * Determines whether the header is expanded.
 * <br><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example
 * when the expanded header is larger than the available screen area. For those cases a warning is logged.
 * The header can be also expanded/collapsed by user interaction, which requires the property to be
 * internally mutated by the control to reflect the changed state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderExpanded New value for property <code>headerExpanded</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setHeaderExpanded = function(bHeaderExpanded) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property <code>preserveHeaderStateOnScroll</code>.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * <br><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPreserveHeaderStateOnScroll New value for property <code>preserveHeaderStateOnScroll</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setPreserveHeaderStateOnScroll = function(bPreserveHeaderStateOnScroll) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property <code>showFooter</code>.
 * 
 * Determines whether the footer is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFooter New value for property <code>showFooter</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setShowFooter = function(bShowFooter) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated <code>title</code>.
 * @param {sap.f.DynamicPageTitle} oTitle The title to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setTitle = function(oTitle) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property <code>toggleHeaderOnTitleClick</code>.
 * 
 * Determines whether the the user can switch between the expanded/collapsed states of the
 * <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code>. If set to
 * <code>false</code>, the <code>DynamicPageTitle</code> is not clickable and the application
 * must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToggleHeaderOnTitleClick New value for property <code>toggleHeaderOnTitleClick</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setToggleHeaderOnTitleClick = function(bToggleHeaderOnTitleClick) { return new sap.f.DynamicPage(); };


// ---- sap.f.DynamicPageHeader --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPageHeader</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPinnable pinnable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * <strong><i>Overview</i></strong>
 * <br><br>
 * The {@link sap.f.DynamicPageHeader DynamicPageHeader} control is part
 * of the {@link sap.f.DynamicPage} family and is used to serve as header
 * of the {@link sap.f.DynamicPage DynamicPage}.
 * <br><br>
 * <strong><i>Usage</i></strong>
 * <br><br>
 * The {@link sap.f.DynamicPageHeader DynamicPageHeader} can hold any
 * layout control and has two states - expanded and collapsed (snapped).
 * The switching between these states happens when:
 * <ul>
 * <li>the user scrolls below its bottom margin</li>
 * <li>the user clicks on the
 * {@link sap.f.DynamicPageTitle DynamicPageTitle}</li>
 * <li>through the {@link sap.f.DynamicPage DynamicPage}
 * property <code>headerExpanded</code></li>
 * </ul>
 * <strong><i>Responsive Behavior</i></strong>
 * <br><br>
 * The responsive behavior of the
 * {@link sap.f.DynamicPageHeader DynamicPageHeader} depends on the
 * behavior of the content that is displayed.
 * @extends sap.ui.core.Control
 * @version 1.44.13
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageHeader = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.addContent = function(oContent) { return new sap.f.DynamicPageHeader(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.destroyContent = function() { return new sap.f.DynamicPageHeader(); };

/**
 * Creates a new subclass of class sap.f.DynamicPageHeader with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.DynamicPageHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content of the header.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageHeader.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>pinnable</code>.
 * 
 * Determines whether the header is pinnable.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>pinnable</code>
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getPinnable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.insertContent = function(oContent,iIndex) { return new sap.f.DynamicPageHeader(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>pinnable</code>.
 * 
 * Determines whether the header is pinnable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPinnable New value for property <code>pinnable</code>
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.setPinnable = function(bPinnable) { return new sap.f.DynamicPageHeader(); };


// ---- sap.f.DynamicPageTitle --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPageTitle</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeading heading} : sap.ui.core.Control</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li>
 * <li>{@link #getSnappedContent snappedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getExpandedContent expandedContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * <strong><i>Overview</i></strong>
 * <br><br>
 * The {@link sap.f.DynamicPageTitle DynamicPageTitle} control is part of
 * the {@link sap.f.DynamicPage} family and is used to serve as title of
 * the {@link sap.f.DynamicPage DynamicPage}.
 * <br><br>
 * <strong><i>Usage</i></strong>
 * <br><br>
 * The {@link sap.f.DynamicPageTitle DynamicPageTitle} can hold any
 * control and displays the most important information regarding the
 * object that will always remain visible while scrolling.
 * <br><br>
 * <b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls,
 * suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
 * <br><br>
 * If the <code>toggleHeaderOnTitleClick</code> property of the
 * {@link sap.f.DynamicPage DynamicPage} is set to <code>true</code>, the user can
 * switch between the expanded/collapsed states of the
 * {@link sap.f.DynamicPageHeader DynamicPageHeader} by clicking on the
 * <code>DynamicPageTitle</code>. If set to <code>false</code>, the
 * <code>DynamicPageTitle</code> is not clickable and the application must provide
 * other means for expanding/collapsing the <code>DynamicPageHeader</code>,
 * if necessary.
 * <br><br>
 * <strong><i>Responsive Behavior</i></strong>
 * <br><br>
 * The responsive behavior of the
 * {@link sap.f.DynamicPageTitle DynamicPageTitle} depends on the
 * behavior of the content that is displayed.
 * @extends sap.ui.core.Control
 * @version 1.44.13
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageTitle = function(sId,mSettings) {};
/**
 * Adds some action to the aggregation <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addAction = function(oAction) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some expandedContent to the aggregation <code>expandedContent</code>.
 * @param {sap.ui.core.Control}
 *            oExpandedContent the expandedContent to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addExpandedContent = function(oExpandedContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some snappedContent to the aggregation <code>snappedContent</code>.
 * @param {sap.ui.core.Control}
 *            oSnappedContent the snappedContent to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addSnappedContent = function(oSnappedContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the actions in the aggregation <code>actions</code>.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyActions = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the expandedContent in the aggregation <code>expandedContent</code>.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyExpandedContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the heading in the aggregation <code>heading</code>.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyHeading = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the snappedContent in the aggregation <code>snappedContent</code>.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroySnappedContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Creates a new subclass of class sap.f.DynamicPageTitle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.DynamicPageTitle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>actions</code>.
 * 
 * The <code>DynamicPageTitle</code> actions.
 * <br><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls,
 * suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation <code>expandedContent</code>.
 * 
 * The content that is displayed in the <code>DynamicPageTitle</code> in expanded state.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getExpandedContent = function() { return new Array(); };

/**
 * Gets content of aggregation <code>heading</code>.
 * 
 * The title or any other UI5 control that serves as a heading for the object.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getHeading = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageTitle.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageTitle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>snappedContent</code>.
 * 
 * The content that is displayed in the <code>DynamicPageTitle</code> in collapsed (snapped) state.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getSnappedContent = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>actions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>expandedContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oExpandedContent The expandedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfExpandedContent = function(oExpandedContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>snappedContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSnappedContent The snappedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfSnappedContent = function(oSnappedContent) { return 0; };

/**
 * Inserts a action into the aggregation <code>actions</code>.
 * @param {sap.ui.core.Control}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertAction = function(oAction,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a expandedContent into the aggregation <code>expandedContent</code>.
 * @param {sap.ui.core.Control}
 *            oExpandedContent the expandedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the expandedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the expandedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the expandedContent is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertExpandedContent = function(oExpandedContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a snappedContent into the aggregation <code>snappedContent</code>.
 * @param {sap.ui.core.Control}
 *            oSnappedContent the snappedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the snappedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the snappedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the snappedContent is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertSnappedContent = function(oSnappedContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Removes a action from the aggregation <code>actions</code>.
 * @param {int | string | sap.ui.core.Control} vAction The action to remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls from the aggregation <code>actions</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>expandedContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllExpandedContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>snappedContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllSnappedContent = function() { return new Array(); };

/**
 * Removes a expandedContent from the aggregation <code>expandedContent</code>.
 * @param {int | string | sap.ui.core.Control} vExpandedContent The expandedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed expandedContent or <code>null</code>
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeExpandedContent = function(vExpandedContent) { return new sap.ui.core.Control(); };

/**
 * Removes a snappedContent from the aggregation <code>snappedContent</code>.
 * @param {int | string | sap.ui.core.Control} vSnappedContent The snappedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed snappedContent or <code>null</code>
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeSnappedContent = function(vSnappedContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated <code>heading</code>.
 * @param {sap.ui.core.Control} oHeading The heading to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setHeading = function(oHeading) { return new sap.f.DynamicPageTitle(); };


// ---- sap.f.ThreeColumnLayoutType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.ThreeColumnLayoutType.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.f.ThreeColumnLayoutType --------------------------------------------------------------------------

/**
 * Emphasized last column (endColumn) - column layout 25/25/50
 * @public
 * 
 */
sap.f.ThreeColumnLayoutType.EndColumnEmphasized = "";

/**
 * Emphasized middle column (midColumn) - column layout 25/50/25
 * @public
 * 
 */
sap.f.ThreeColumnLayoutType.MidColumnEmphasized = "";

