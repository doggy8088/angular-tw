
consts: function() {
  let $I18N_0$;
  if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const $MSG_EXTERNAL_7128002169381370313$$APP_SPEC_TS_1$ = goog.getMsg("{$startTagXhtmlDiv} Count: {$startTagXhtmlSpan}5{$closeTagXhtmlSpan}{$closeTagXhtmlDiv}", {
      "startTagXhtmlDiv": "�#3�",
      "startTagXhtmlSpan": "�#4�",
      "closeTagXhtmlSpan": "�/#4�",
      "closeTagXhtmlDiv": "�/#3�"
    });
    $I18N_0$ = $MSG_EXTERNAL_7128002169381370313$$APP_SPEC_TS_1$;
  }
  else {
    $I18N_0$ = $localize `${"�#3�"}:START_TAG__XHTML_DIV: Count: ${"�#4�"}:START_TAG__XHTML_SPAN:5${"�/#4�"}:CLOSE_TAG__XHTML_SPAN:${"�/#3�"}:CLOSE_TAG__XHTML_DIV:`;
  }
          return [
    ["xmlns", "http://www.w3.org/2000/svg"],
    $i18n_0$,
    ["xmlns", "http://www.w3.org/1999/xhtml"]
  ];
},
template: function MyComponent_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵnamespaceSVG();
    $r3$.ɵɵelementStart(0, "svg", 0);
    $r3$.ɵɵelementStart(1, "foreignObject");
    $r3$.ɵɵi18nStart(2, 1);
    $r3$.ɵɵnamespaceHTML();
    $r3$.ɵɵelementStart(3, "div", 2);
    $r3$.ɵɵelement(4, "span");
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵi18nEnd();
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵelementEnd();
  }
}
