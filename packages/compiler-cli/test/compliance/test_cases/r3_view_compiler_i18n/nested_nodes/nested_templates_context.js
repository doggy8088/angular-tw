function MyComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵi18nStart(0, 0, 2);
    $r3$.ɵɵelementStart(1, "div");
    $r3$.ɵɵelement(2, "div");
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵi18nEnd();
  }
  if (rf & 2) {
    const $ctx_r2$ = $r3$.ɵɵnextContext(2);
    $r3$.ɵɵadvance(2);
    $r3$.ɵɵi18nExp($ctx_r2$.valueC)($ctx_r2$.valueD);
    $r3$.ɵɵi18nApply(0);
  }
}
function MyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵi18nStart(0, 0, 1);
    $r3$.ɵɵelementStart(1, "div");
    $r3$.ɵɵelementStart(2, "div");
    $r3$.ɵɵpipe(3, "uppercase");
    $r3$.ɵɵtemplate(4, MyComponent_div_2_div_4_Template, 3, 2, "div", 1);
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵi18nEnd();
  }
  if (rf & 2) {
    const $ctx_r0$ = $r3$.ɵɵnextContext();
    $r3$.ɵɵadvance(4);
    $r3$.ɵɵproperty("ngIf", $ctx_r0$.exists);
    $r3$.ɵɵi18nExp($ctx_r0$.valueA)($r3$.ɵɵpipeBind1(3, 3, $ctx_r0$.valueB));
    $r3$.ɵɵi18nApply(0);
  }
}
…
function MyComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵi18nStart(0, 0, 3);
    $r3$.ɵɵelementStart(1, "div");
    $r3$.ɵɵelement(2, "div");
    $r3$.ɵɵpipe(3, "uppercase");
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵi18nEnd();
  }
  if (rf & 2) {
    const $ctx_r1$ = $r3$.ɵɵnextContext();
    $r3$.ɵɵadvance(3);
    $r3$.ɵɵi18nExp($ctx_r1$.valueE + $ctx_r1$.valueF)($r3$.ɵɵpipeBind1(3, 2, $ctx_r1$.valueG));
    $r3$.ɵɵi18nApply(0);
  }
}
…
decls: 4,
vars: 2,
consts: function() {
  __i18nMsgWithPostprocess__(' Some content {$startTagDiv_2} Some other content {$interpolation} {$startTagDiv} More nested levels with bindings {$interpolation_1} {$startTagDiv_1} Content inside sub-template {$interpolation_2} {$startTagDiv} Bottom level element {$interpolation_3} {$closeTagDiv}{$closeTagDiv}{$closeTagDiv}{$closeTagDiv}{$startTagDiv_3} Some other content {$interpolation_4} {$startTagDiv} More nested levels with bindings {$interpolation_5} {$closeTagDiv}{$closeTagDiv}', [['startTagDiv_2', String.raw`�*2:1��#1:1�`], [ 'closeTagDiv', String.raw`[�/#2:2�|�/#1:2��/*4:2�|�/#2:1�|�/#1:1��/*2:1�|�/#2:3�|�/#1:3��/*3:3�]`], ['startTagDiv_3', String.raw`�*3:3��#1:3�`], ['interpolation', String.raw`�0:1�`], ['startTagDiv', String.raw`[�#2:1�|�#2:2�|�#2:3�]`], ['interpolation_1', String.raw`�1:1�`], ['startTagDiv_1', String.raw`�*4:2��#1:2�`], ['interpolation_2', String.raw`�0:2�`], ['interpolation_3', String.raw`�1:2�`], ['interpolation_4', String.raw`�0:3�`], ['interpolation_5', String.raw`�1:3�`]], {}, [])
  return [
    $i18n_0$,
    [__AttributeMarker.Template__, "ngIf"]
  ];
},
template: function MyComponent_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵelementStart(0, "div");
    $r3$.ɵɵi18nStart(1, 0);
    $r3$.ɵɵtemplate(2, MyComponent_div_2_Template, 5, 5, "div", 1);
    $r3$.ɵɵtemplate(3, MyComponent_div_3_Template, 4, 4, "div", 1);
    $r3$.ɵɵi18nEnd();
    $r3$.ɵɵelementEnd();
  }
  if (rf & 2) {
    $r3$.ɵɵadvance(2);
    $r3$.ɵɵproperty("ngIf", ctx.visible);
    $r3$.ɵɵadvance(1);
    $r3$.ɵɵproperty("ngIf", !ctx.visible);
  }
}
