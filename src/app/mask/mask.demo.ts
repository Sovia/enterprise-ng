import { Component, HostBinding, Input } from '@angular/core';

/**
 * This example:
 * - shows basic mask functionality on input elements with an angular template
 */
@Component({
  selector:    'soho-mask-demo',
  templateUrl: './mask.demo.html',
  styles:      [
      `
      .alignRight {
        text-align: right;
      }
    `
  ]
})
export class MaskDemoComponent {
  @HostBinding('class.alignRight') @Input() alignRight = false;

  public model = {
    nomask:               '123456',
    numberlegacy:         '123',
    decimallegacy:        '123456.78',
    percentlegacy:        '85.23',
    currencylegacy:       '876543.21',
    signednumberlegacy:   '-123',
    signeddecimallegacy:  '-123456.78',
    signedpercentlegacy:  '-85.23',
    signedcurrencylegacy: '-876543.21',
    custommask:           'ZZZ',
    number:               '123',
    decimal:              '123456.78',
    percent:              '85.23',
    currency:             '876543.21',
    signednumber:         '-123',
    signeddecimal:        '-123456.78',
    signedpercent:        '-85.23',
    signedcurrency:       '-876543.21'
  };
  private _symbols: SohoMaskPatternSymbols = {
    currency: Locale.currentLocale.data.currencySign,
    decimal: Locale.currentLocale.data.numbers.decimal,
    negative: Locale.currentLocale.data.numbers.minusSign,
    thousands: Locale.currentLocale.data.numbers.group
  };
  private _patternOptions: SohoMaskPatternOptions = {
    allowDecimal: true,
    allowNegative: true,
    allowThousandsSeparator: true,
    integerLimit: 6,
    decimalLimit: 2,
    symbols: this._symbols
  };
  private _options: SohoMaskOptions = {
    process: 'number',
    patternOptions: this._patternOptions,
    placeholderChar: '#'
  };

  public showModel = true;
  /**
   * I cannot workout the syntax for a RexExp that works correctly in
   * an angular template, so the definitions have to be loaded from align
   * property.
   */
  public definitions = { 'U': /[A-Z]/ };

  constructor() {
  }

  pipe = (processResult, opts) => {
    console.log('pipe was executed');
    return processResult.conformedValue + ' | ';
  };

  get symbols(): string {
    return JSON.stringify(this._symbols);
  }

  get patternOptions(): string {
    return JSON.stringify(this._patternOptions);
  }

  get options(): string {
    return JSON.stringify(this._options);
  }

  toggleModel() {
    this.showModel = !this.showModel;
  }

  onMaskWrite(event: SohoMaskEvent) {
    console.log('MaskDemoComponent.onMaskWrite');
  }

}
