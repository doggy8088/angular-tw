function MyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵi18n(0, 0, 1);
    $r3$.ɵɵpipe(1, "uppercase");
  }
  if (rf & 2) {
    const $ctx_r0$ = $r3$.ɵɵnextContext();
    $r3$.ɵɵadvance(1);
    $r3$.ɵɵi18nExp($r3$.ɵɵpipeBind1(1, 1, $ctx_r0$.valueA));
    $r3$.ɵɵi18nApply(0);
  }
}
…
decls: 5,
vars: 3,
consts: function() {
  __i18nMsg__('{$startTagNgTemplate}Template content: {$interpolation}{$closeTagNgTemplate}{$startTagNgContainer}Container content: {$interpolation_1}{$closeTagNgContainer}', [['startTagNgTemplate', String.raw`�*2:1�`], ['closeTagNgTemplate', String.raw`�/*2:1�`], ['startTagNgContainer', String.raw`�#3�`], ['interpolation_1', String.raw`�0�`], ['closeTagNgContainer', String.raw`�/#3�`], ['interpolation', String.raw`�0:1�`]], {})
  return [
    $i18n_0$
  ];
},
template: function MyComponent_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵelementStart(0, "div");
    $r3$.ɵɵi18nStart(1, 0);
    $r3$.ɵɵtemplate(2, MyComponent_ng_template_2_Template, 2, 3, "ng-template");
    $r3$.ɵɵelementContainer(3);
    $r3$.ɵɵpipe(4, "uppercase");
    $r3$.ɵɵi18nEnd();
    $r3$.ɵɵelementEnd();
  }
  if (rf & 2) {
    $r3$.ɵɵadvance(4);
    $r3$.ɵɵi18nExp($r3$.ɵɵpipeBind1(4, 1, ctx.valueB));
    $r3$.ɵɵi18nApply(1);
  }
}
