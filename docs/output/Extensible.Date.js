Ext.data.JsonP.Extensible_Date({"tagname":"class","name":"Extensible.Date","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Extensible.Date","members":{"cfg":[],"property":[{"name":"use24HourTime","tagname":"property","owner":"Extensible.Date","meta":{},"id":"property-use24HourTime"}],"method":[{"name":"add","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-add"},{"name":"compare","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-compare"},{"name":"copyTime","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-copyTime"},{"name":"diff","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-diff"},{"name":"diffDays","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-diffDays"},{"name":"isMidnight","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-isMidnight"},{"name":"isToday","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-isToday"},{"name":"isWeekday","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-isWeekday"},{"name":"isWeekend","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-isWeekend"},{"name":"max","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-max"},{"name":"min","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-min"},{"name":"rangesOverlap","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-rangesOverlap"},{"name":"today","tagname":"method","owner":"Extensible.Date","meta":{},"id":"method-today"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":70,"files":[{"filename":"Extensible.js","href":"Extensible.html#Extensible-Date"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Extensible.html#Extensible-Date' target='_blank'>Extensible.js</a></div></pre><div class='doc-contents'><p>Contains utility date functions used by the calendar components.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-use24HourTime' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-property-use24HourTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-property-use24HourTime' class='name expandable'>use24HourTime</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines whether times used throughout all Extensible components should be displayed as\n12 hour times with am/pm (d...</div><div class='long'><p>Determines whether times used throughout all Extensible components should be displayed as\n12 hour times with am/pm (default) or 24 hour / military format. Note that some locale files\nmay override this value by default.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-add' class='name expandable'>add</a>( <span class='pre'>dt, o</span> ) : Date</div><div class='description'><div class='short'>Add time to the specified date and returns a new Date instance as the result (does not\nalter the original date object). ...</div><div class='long'><p>Add time to the specified date and returns a new Date instance as the result (does not\nalter the original date object). Time can be specified in any combination of milliseconds\nto years, and the function automatically takes leap years and daylight savings into account.\nSome syntax examples:</p>\n\n<pre><code>var now = new Date();\n// Add 24 hours to the current date/time:\nvar tomorrow = <a href=\"#!/api/Extensible.Date-method-add\" rel=\"Extensible.Date-method-add\" class=\"docClass\">Extensible.Date.add</a>(now, { days: 1 });\n// More complex, returning a date only with no time value:\nvar futureDate = <a href=\"#!/api/Extensible.Date-method-add\" rel=\"Extensible.Date-method-add\" class=\"docClass\">Extensible.Date.add</a>(now, {\n    weeks: 1,\n    days: 5,\n    minutes: 30,\n    clearTime: true\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt</span> : Date<div class='sub-desc'><p>The starting date to which to add time</p>\n</div></li><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>A config object that can contain one or more of the following\nproperties, each with an integer value:</p>\n\n<ul>\n<li>millis</li>\n<li>seconds</li>\n<li>minutes</li>\n<li>hours</li>\n<li>days</li>\n<li>weeks</li>\n<li>months</li>\n<li>years</li>\n</ul>\n\n\n<p>You can also optionally include the property \"clearTime: true\" which will perform all of the\ndate addition first, then clear the time value of the final date before returning it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>A new date instance containing the resulting date/time value</p>\n</div></li></ul></div></div></div><div id='method-compare' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-compare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-compare' class='name expandable'>compare</a>( <span class='pre'>dt1, dt2, [precise]</span> ) : Number</div><div class='description'><div class='short'>Compares two dates and returns a value indicating how they relate to each other. ...</div><div class='long'><p>Compares two dates and returns a value indicating how they relate to each other.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt1</span> : Date<div class='sub-desc'><p>The first date</p>\n</div></li><li><span class='pre'>dt2</span> : Date<div class='sub-desc'><p>The second date</p>\n</div></li><li><span class='pre'>precise</span> : Boolean (optional)<div class='sub-desc'><p>If true, the milliseconds component is included in the comparison,\nelse it is ignored (the default).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of milliseconds difference between the two dates. If the dates are equal\nthis will be 0.  If the first date is earlier the return value will be positive, and if the second date\nis earlier the value will be negative.</p>\n</div></li></ul></div></div></div><div id='method-copyTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-copyTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-copyTime' class='name expandable'>copyTime</a>( <span class='pre'>fromDt, toDt</span> ) : Date</div><div class='description'><div class='short'>Copies the time value from one date object into another without altering the target's\ndate value. ...</div><div class='long'><p>Copies the time value from one date object into another without altering the target's\ndate value. This function returns a new Date instance without modifying either original value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fromDt</span> : Date<div class='sub-desc'><p>The original date from which to copy the time</p>\n</div></li><li><span class='pre'>toDt</span> : Date<div class='sub-desc'><p>The target date to copy the time to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>The new date/time value</p>\n</div></li></ul></div></div></div><div id='method-diff' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-diff' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-diff' class='name expandable'>diff</a>( <span class='pre'>start, end, [unit]</span> ) : Number</div><div class='description'><div class='short'>Returns the time duration between two dates in the specified units. ...</div><div class='long'><p>Returns the time duration between two dates in the specified units. For finding the number of\ncalendar days (ignoring time) between two dates use diffDays instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : Date<div class='sub-desc'><p>The start date</p>\n</div></li><li><span class='pre'>end</span> : Date<div class='sub-desc'><p>The end date</p>\n</div></li><li><span class='pre'>unit</span> : String (optional)<div class='sub-desc'><p>The time unit to return. Valid values are 'millis' (the default),\n'seconds', 'minutes' or 'hours'.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The time difference between the dates in the units specified by the unit param,\nrounded to the nearest even unit via Math.round().</p>\n</div></li></ul></div></div></div><div id='method-diffDays' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-diffDays' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-diffDays' class='name expandable'>diffDays</a>( <span class='pre'>start, end</span> ) : Number</div><div class='description'><div class='short'>Calculates the number of calendar days between two dates, ignoring time values. ...</div><div class='long'><p>Calculates the number of calendar days between two dates, ignoring time values.\nA time span that starts at 11pm (23:00) on Monday and ends at 1am (01:00) on Wednesday is\nonly 26 total hours, but it spans 3 calendar days, so this function would return 2. For the\nexact time difference, use diff instead.</p>\n\n<p>NOTE that the dates passed into this function are expected to be in local time matching the\nsystem timezone. This does not work with timezone-relative or UTC dates as the exact date\nboundaries can shift with timezone shifts, affecting the output. If you need precise control\nover the difference, use diff instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : Date<div class='sub-desc'><p>The start date</p>\n</div></li><li><span class='pre'>end</span> : Date<div class='sub-desc'><p>The end date</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of calendar days difference between the dates</p>\n</div></li></ul></div></div></div><div id='method-isMidnight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-isMidnight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-isMidnight' class='name expandable'>isMidnight</a>( <span class='pre'>dt</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the specified date's time component equals 00:00, ignoring\nseconds and milliseconds. ...</div><div class='long'><p>Returns true if the specified date's time component equals 00:00, ignoring\nseconds and milliseconds.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt</span> : Object<div class='sub-desc'><p>The date to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the time is midnight, else false</p>\n</div></li></ul></div></div></div><div id='method-isToday' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-isToday' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-isToday' class='name expandable'>isToday</a>( <span class='pre'>dt</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the specified date is the current browser-local date, else false. ...</div><div class='long'><p>Returns true if the specified date is the current browser-local date, else false.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt</span> : Object<div class='sub-desc'><p>The date to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the date is today, else false</p>\n</div></li></ul></div></div></div><div id='method-isWeekday' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-isWeekday' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-isWeekday' class='name expandable'>isWeekday</a>( <span class='pre'>dt</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the specified date falls on a Monday through Friday, else false. ...</div><div class='long'><p>Returns true if the specified date falls on a Monday through Friday, else false.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt</span> : Date<div class='sub-desc'><p>The date to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the date is a week day, else false</p>\n</div></li></ul></div></div></div><div id='method-isWeekend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-isWeekend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-isWeekend' class='name expandable'>isWeekend</a>( <span class='pre'>dt</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the specified date is a Saturday or Sunday, else false. ...</div><div class='long'><p>Returns true if the specified date is a Saturday or Sunday, else false.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt</span> : Date<div class='sub-desc'><p>The date to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the date is a weekend day, else false</p>\n</div></li></ul></div></div></div><div id='method-max' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-max' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-max' class='name expandable'>max</a>( <span class='pre'>dt1, dt2, [dtN]</span> ) : Date</div><div class='description'><div class='short'>Returns the maximum date value passed into the function. ...</div><div class='long'><p>Returns the maximum date value passed into the function. Any number of date\nobjects can be passed as separate params.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt1</span> : Date<div class='sub-desc'><p>The first date</p>\n</div></li><li><span class='pre'>dt2</span> : Date<div class='sub-desc'><p>The second date</p>\n</div></li><li><span class='pre'>dtN</span> : Date (optional)<div class='sub-desc'><p>The Nth date, etc.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>A new date instance with the latest date value that was passed to the function</p>\n</div></li></ul></div></div></div><div id='method-min' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-min' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-min' class='name expandable'>min</a>( <span class='pre'>dt1, dt2, [dtN]</span> ) : Date</div><div class='description'><div class='short'>Returns the minimum date value passed into the function. ...</div><div class='long'><p>Returns the minimum date value passed into the function. Any number of date\nobjects can be passed as separate params.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dt1</span> : Date<div class='sub-desc'><p>The first date</p>\n</div></li><li><span class='pre'>dt2</span> : Date<div class='sub-desc'><p>The second date</p>\n</div></li><li><span class='pre'>dtN</span> : Date (optional)<div class='sub-desc'><p>The Nth date, etc.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>A new date instance with the earliest date value that was passed to the function</p>\n</div></li></ul></div></div></div><div id='method-rangesOverlap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-rangesOverlap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-rangesOverlap' class='name expandable'>rangesOverlap</a>( <span class='pre'>start1, end1, start2, end2</span> ) : Booelan</div><div class='description'><div class='short'>Returns true if two date ranges overlap (either one starts or ends within the other, or one completely\noverlaps the s...</div><div class='long'><p>Returns true if two date ranges overlap (either one starts or ends within the other, or one completely\noverlaps the start and end of the other), else false if they do not.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start1</span> : Date<div class='sub-desc'><p>The start date of range 1</p>\n</div></li><li><span class='pre'>end1</span> : Date<div class='sub-desc'><p>The end date of range 1</p>\n</div></li><li><span class='pre'>start2</span> : Date<div class='sub-desc'><p>The start date of range 2</p>\n</div></li><li><span class='pre'>end2</span> : Date<div class='sub-desc'><p>The end date of range 2</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Booelan</span><div class='sub-desc'><p>True if the ranges overlap, else false</p>\n</div></li></ul></div></div></div><div id='method-today' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.Date'>Extensible.Date</span><br/><a href='source/Extensible.html#Extensible-Date-method-today' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.Date-method-today' class='name expandable'>today</a>( <span class='pre'></span> ) : Date</div><div class='description'><div class='short'>Convenience method to get the current browser-local date with no time value. ...</div><div class='long'><p>Convenience method to get the current browser-local date with no time value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>The current date, with time 00:00</p>\n</div></li></ul></div></div></div></div></div></div></div>"});