/*
 * (c)2002-2015 Skava. All rights reserved. The Skava system, including without
 * limitation, all software and other elements thereof, are owned or controlled
 * exclusively by Skava and protected by copyright, patent, and other laws. Use
 * without permission is prohibited. For further information contact Skava at
 * info@skava.com.
 */

Product_detail_widget = Product_detail_widget.extend(
{
    /*
     * Config to define Widget Properties to be rendered in the left pane
     */
    propertiesConfig: [],

    /*
     * Config to define Item Facets to be rendered in the left pane
     */
    itemFacetsConfig: [],

    /*
     * Triggered when the user Creates a new widget and used to initialize the widget properties
     */
    create: function(cbk)
    {
        if (cbk)
        {
            this._super();
            cbk();
        }
    }
});

var params = {};
params.hasMultipleItems = false;
params.hasAreaSpecificEvents = false;
Studio.registerWidget("Product_detail_widget", "Product_detail_widget", params);