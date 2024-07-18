decls: 9,
vars: 5,
consts: function() {
  __i18nMsg__(' My i18n block #{$interpolation} {$startTagSpan}Plain text in nested element{$closeTagSpan}', [['interpolation', String.raw`�0�`], ['startTagSpan', String.raw`�#2�`], ['closeTagSpan', String.raw`�/#2�`]], {})
  __i18nMsgWithPostprocess__(' My i18n block #{$interpolation} {$startTagDiv}{$startTagDiv}{$startTagSpan} More bindings in more nested element: {$interpolation_1} {$closeTagSpan}{$closeTagDiv}{$closeTagDiv}', [['interpolation', String.raw`�0�`], ['startTagDiv', String.raw`[�#6�|�#7�]`], ['startTagSpan', String.raw`�#8�`], ['interpolation_1', String.raw`�1�`], ['closeTagSpan', String.raw`�/#8�`], ['closeTagDiv', String.raw`[�/#7�|�/#6�]`]], {}, [])
  return [
    $i18n_0$,
    $i18n_1$
  ];
},
template: function MyComponent_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵelementStart(0, "div");
    $r3$.ɵɵi18nStart(1, 0);
    $r3$.ɵɵelement(2, "span");
    $r3$.ɵɵi18nEnd();
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵelementStart(3, "div");
    $r3$.ɵɵi18nStart(4, 1);
    $r3$.ɵɵpipe(5, "uppercase");
    $r3$.ɵɵelementStart(6, "div");
    $r3$.ɵɵelementStart(7, "div");
    $r3$.ɵɵelement(8, "span");
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵelementEnd();
    $r3$.ɵɵi18nEnd();
    $r3$.ɵɵelementEnd();
  }
  if (rf & 2) {
    $r3$.ɵɵadvance(2);
    $r3$.ɵɵi18nExp(ctx.one);
    $r3$.ɵɵi18nApply(1);
    $r3$.ɵɵadvance(6);
    $r3$.ɵɵi18nExp($r3$.ɵɵpipeBind1(5, 3, ctx.two))(ctx.nestedInBlockTwo);
    $r3$.ɵɵi18nApply(4);
  }
}
