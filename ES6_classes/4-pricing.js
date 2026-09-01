import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}
	get amount() {
		return this._amount;
	}
	set amount(val) {
		this._amount;
	}
	get currency() {
		return this._currency;
	}
	set currency(val) {
		this.currency;
	}

	displayFullPrice() {
		return '${this._name} (${this._currency})`;
	}

	static convertPrice(amount, conversionRate) {
		return conversionRate * amount;
	}
}
