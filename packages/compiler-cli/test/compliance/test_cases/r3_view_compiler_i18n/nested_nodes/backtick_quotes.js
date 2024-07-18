// NOTE: Keeping raw content (avoiding `__i18nMsg__` macro) to illustrate backticks escaping.
let $I18N_0$;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
  const $MSG_APP_SPEC_TS_1$ = goog.getMsg("`{$interpolation}`", { "interpolation": "�0�" });
  $I18N_0$ = $MSG_APP_SPEC_TS_1$;
}
else {
  $I18N_0$ = $localize `\`${"�0�"}:INTERPOLATION:\``;
}
