
class TwoFixedNumberBuilder {

	constructor(vm) {
		this.selector = new TwoFixedNumberSelector();
		this.vm = vm;
	}

	fixed() {
		if (!vm.fixed.selected && !vm.fixed.deleted) return this;
		this.selector.location(vm.fixed.selected ? 's' : 'd', 
			vm.fixed.thousand, vm.fixed.hundred, vm.fixed.ten, vm.fixed.unit);
		return this;
	}

	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd';
		this.selector.fit(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2);
		return this;
	}

	summation() {
		if (!vm.summation.selected && !vm.summation.deleted) return this;
		let action = vm.summation.selected ? 's' : 'd';
		this.selector.summation(
			action, 
			this._summation(vm.summation.items[0]),
			this._summation(vm.summation.items[1]),
			this._summation(vm.summation.items[2]),
			this._summation(vm.summation.items[3])
		);
		return this;
	}

	_summation(item) {
		if (!item.indexs.thousand && !item.indexs.hundred && 
			!item.indexs.ten && !item.indexs.unit)
			return null;
		if (!item.value) return null;
		let index = '';
		if (item.indexs.thousand) index += '0';
		if (item.indexs.hundred) index += '1';
		if (item.indexs.ten) index += '2';
		if (item.indexs.unit) index += '3';
		if (item.indexs.five) index += '4';
		return {index:index, value:item.value};
	}

	combineSummation() {
		if (vm.combineSummation.two && vm.combineSummation.value) {
			this.selector.combineSummation(vm.combineSummation.value);
		}
		return this;
	}

	fullTurn() {
		if (vm.fullTurn) {
			this.selector.fullTurn(vm.fullTurn);
		}
		return this;
	}

	exclude() {
		if (vm.exclude) {
			this.selector.exclude(vm.exclude);
		}
		return this;
	}

	symbolLocation() {
		this.selector.symbolLocation(
			vm.symbolLocation.thousand,
			vm.symbolLocation.hundred,
			vm.symbolLocation.ten,
			vm.symbolLocation.unit
		);
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action, 2);
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action, 2);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().summation().fullTurn().exclude().combineSummation()
			.symbolLocation().digit().repeat().serial().opposite().attr().fixed();
		return this.selector.numbers;
	}

}

class ThreeFixedNumberBuilder {

	constructor(vm) {
		this.selector = new ThreeFixedNumberSelector();
		this.vm = vm;
	}

	fixed() {
		if (!vm.fixed.selected && !vm.fixed.deleted) return this;
		this.selector.location(vm.fixed.selected ? 's' : 'd', 
			vm.fixed.thousand, vm.fixed.hundred, vm.fixed.ten, vm.fixed.unit);
		return this;
	}

	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd';
		this.selector.fit(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2, vm.matchFullTurn.value3);
		return this;
	}

	summation() {
		if (!vm.summation.selected && !vm.summation.deleted) return this;
		let action = vm.summation.selected ? 's' : 'd';
		this.selector.summation(
			action, 
			this._summation(vm.summation.items[0]),
			this._summation(vm.summation.items[1]),
			this._summation(vm.summation.items[2]),
			this._summation(vm.summation.items[3])
		);
		return this;
	}

	_summation(item) {
		if (!item.indexs.thousand && !item.indexs.hundred && !item.indexs.ten && !item.indexs.unit)
			return null;
		if (!item.value) return null;
		let index = '';
		if (item.indexs.thousand) index += '0';
		if (item.indexs.hundred) index += '1';
		if (item.indexs.ten) index += '2';
		if (item.indexs.unit) index += '3';
		if (item.indexs.five) index += '4';
		return {index:index, value:item.value};
	}

	combineSummation() {
		if ((vm.combineSummation.two || vm.combineSummation.three) && vm.combineSummation.value) {
			this.selector.combineSummation(vm.combineSummation.value, vm.combineSummation.two ? 2 : 3);
		}
		return this;
	}

	fullTurn() {
		if (vm.fullTurn) {
			this.selector.fullTurn(vm.fullTurn);
		}
		return this;
	}

	exclude() {
		if (vm.exclude) {
			this.selector.exclude(vm.exclude);
		}
		return this;
	}

	symbolLocation() {
		this.selector.symbolLocation(
			vm.symbolLocation.thousand,
			vm.symbolLocation.hundred,
			vm.symbolLocation.ten,
			vm.symbolLocation.unit
		);
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action, 2);
		}
		return this;
	}

	repeat3() {
		if (vm.repeat3.selected || vm.repeat3.deleted) {
			let action = vm.repeat3.selected ? 's' : 'd';
			this.selector.repeat(action, 3);
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action, 2);
		}
		return this;
	}

	serial3() {
		if (vm.serial3.selected || vm.serial3.deleted) {
			let action = vm.serial3.selected ? 's' : 'd';
			this.selector.serial(action, 3);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().summation().fullTurn().exclude().repeat3().serial3().combineSummation()
			.symbolLocation().digit().repeat().serial().opposite().attr().fixed();
		return this.selector.numbers;
	}

}

class FourFixedNumberBuilder {

	constructor() {
		this.selector = new FourFixedNumberSelector();
	}

	fixed() {
		if (!vm.fixed.selected && !vm.fixed.deleted) return this;
		this.selector.location(vm.fixed.selected ? 's' : 'd', 
			vm.fixed.thousand, vm.fixed.hundred, vm.fixed.ten, vm.fixed.unit);
		return this;
	}

	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd';
		this.selector.fit(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2, 
			vm.matchFullTurn.value3, vm.matchFullTurn.value4);
		return this;
	}

	summation() {
		if (!vm.summation.selected && !vm.summation.deleted) return this;
		let action = vm.summation.selected ? 's' : 'd';
		this.selector.summation(
			action, 
			this._summation(vm.summation.items[0]),
			this._summation(vm.summation.items[1]),
			this._summation(vm.summation.items[2]),
			this._summation(vm.summation.items[3])
		);
		return this;
	}

	_summation(item) {
		if (!item.indexs.thousand && !item.indexs.hundred && !item.indexs.ten && !item.indexs.unit)
			return null;
		if (!item.value) return null;
		let index = '';
		if (item.indexs.thousand) index += '0';
		if (item.indexs.hundred) index += '1';
		if (item.indexs.ten) index += '2';
		if (item.indexs.unit) index += '3';
		if (item.indexs.five) index += '4';
		return {index:index, value:item.value};
	}

	combineSummation() {
		if ((vm.combineSummation.two || vm.combineSummation.three) && vm.combineSummation.value) {
			this.selector.combineSummation(vm.combineSummation.value, vm.combineSummation.two ? 2 : 3);
		}
		return this;
	}

	fullTurn() {
		if (vm.fullTurn) {
			this.selector.fullTurn(vm.fullTurn);
		}
		return this;
	}

	exclude() {
		if (vm.exclude) {
			this.selector.exclude(vm.exclude);
		}
		return this;
	}

	symbolLocation() {
		this.selector.symbolLocation(
			vm.symbolLocation.thousand,
			vm.symbolLocation.hundred,
			vm.symbolLocation.ten,
			vm.symbolLocation.unit
		);
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action, 2);
		}
		return this;
	}

	repeat3() {
		if (vm.repeat3.selected || vm.repeat3.deleted) {
			let action = vm.repeat3.selected ? 's' : 'd';
			this.selector.repeat(action, 3);
		}
		return this;
	}

	repeat4() {
		if (vm.repeat4.selected || vm.repeat4.deleted) {
			let action = vm.repeat4.selected ? 's' : 'd';
			this.selector.repeat(action, 4);
		}
		return this;
	}

	repeat22() {
		if (vm.repeat22.selected || vm.repeat22.deleted) {
			let action = vm.repeat22.selected ? 's' : 'd';
			this.selector.repeat(action, 22);
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action, 2);
		}
		return this;
	}

	serial3() {
		if (vm.serial3.selected || vm.serial3.deleted) {
			let action = vm.serial3.selected ? 's' : 'd';
			this.selector.serial(action, 3);
		}
		return this;
	}

	serial4() {
		if (vm.serial4.selected || vm.serial4.deleted) {
			let action = vm.serial4.selected ? 's' : 'd';
			this.selector.serial(action, 4);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1;
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().summation().fullTurn().exclude().repeat3().serial3().repeat4().repeat22().serial4()
			.combineSummation().symbolLocation().digit().repeat().serial().opposite().attr().fixed();
		return this.selector.numbers;
	}

}

class TwoPresentNumberBuilder {

	constructor() {
		this.selector = new TwoPresentNumberSelector();
	}
	
	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd'
		this.selector.match(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2);
		return this;
	}

	combineSummation() {
		if (vm.combineSummation.two && vm.combineSummation.value) {
			this.selector.composite(vm.combineSummation.value);
		}
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action);
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().combineSummation().digit().repeat().serial().opposite().attr();
		return this.selector.numbers;
	}

}

class ThreePresentNumberBuilder {

	constructor() {
		this.selector = new ThreePresentNumberSelector();
	}
	
	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd'
		this.selector.match(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2, vm.matchFullTurn.value3);
		return this;
	}

	combineSummation() {
		if ((vm.combineSummation.two || vm.combineSummation.three) && vm.combineSummation.value) {
			this.selector.composite(vm.combineSummation.two ? 2 : 3, vm.combineSummation.value);
		}
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action, 2);
		}
		return this;
	}

	repeat3() {
		console.log(vm.repeat3)
		if (vm.repeat3.selected || vm.repeat3.deleted) {
			let action = vm.repeat3.selected ? 's' : 'd';
			this.selector.repeat(action, 3);
			
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action);
		}
		return this;
	}

	serial3() {
		if (vm.serial3.selected || vm.serial3.deleted) {
			let action = vm.serial3.selected ? 's' : 'd';
			this.selector.serial(action, 3);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数');
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1;
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().combineSummation().digit().repeat().repeat3().serial().serial3().opposite().attr();
		return this.selector.numbers;
	}

}

class FourPresentNumberBuilder {

	constructor() {
		this.selector = new FourPresentNumberSelector();
	}
	
	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd';
		this.selector.match(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2, 
			vm.matchFullTurn.value3, vm.matchFullTurn.value4);
		return this;
	}

	combineSummation() {
		if ((vm.combineSummation.two || vm.combineSummation.three) && vm.combineSummation.value) {
			this.selector.composite(vm.combineSummation.two ? 2 : 3, vm.combineSummation.value);
		}
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action);
		}
		return this;
	}

	repeat3() {
		if (vm.repeat3.selected || vm.repeat3.deleted) {
			let action = vm.repeat3.selected ? 's' : 'd';
			this.selector.repeat(action, 3);
		}
		return this;
	}

	repeat4() {
		if (vm.repeat4.selected || vm.repeat4.deleted) {
			let action = vm.repeat4.selected ? 's' : 'd';
			this.selector.repeat(action, 4);
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action, 2);
		}
		return this;
	}

	serial3() {
		if (vm.serial3.selected || vm.serial3.deleted) {
			let action = vm.serial3.selected ? 's' : 'd';
			this.selector.serial(action, 3);
		}
		return this;
	}

	serial4() {
		if (vm.serial4.selected || vm.serial4.deleted) {
			let action = vm.serial4.selected ? 's' : 'd';
			this.selector.serial(action, 4);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数')
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数')
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数')
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1;
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().combineSummation().digit().repeat().repeat3().serial().serial3().opposite().attr();
		this.repeat4().serial4();
		return this.selector.numbers;
	}

}

class TwoOutOfFiveNumberBuilder {

	constructor(vm) {
		this.selector = new TwoOutOfFiveNumberSelector();
		this.vm = vm;
	}

	fixed() {
		if (!vm.fixed.selected && !vm.fixed.deleted) return this;
		this.selector.location(vm.fixed.selected ? 's' : 'd', vm.fixed.five,
			vm.fixed.thousand, vm.fixed.hundred, vm.fixed.ten, vm.fixed.unit);
		return this;
	}

	matchFullTurn() {
		if (!vm.matchFullTurn.selected && !vm.matchFullTurn.deleted) return this;
		let action = vm.matchFullTurn.selected ? 's' : 'd'
		this.selector.fit(action, vm.matchFullTurn.value1, vm.matchFullTurn.value2);
		return this;
	}

	summation() {
		if (!vm.summation.selected && !vm.summation.deleted) return this;
		let action = vm.summation.selected ? 's' : 'd';
		this.selector.summation(
			action, 
			this._summation(vm.summation.items[0]),
			this._summation(vm.summation.items[1]),
			this._summation(vm.summation.items[2]),
			this._summation(vm.summation.items[3])
		)
		return this;
	}

	_summation(item) {
		if (!item.indexs.thousand && !item.indexs.hundred && !item.indexs.ten && !item.indexs.unit)
			return null;
		if (!item.value) return null;
		let index = '';
		if (item.indexs.thousand) index += '0';
		if (item.indexs.hundred) index += '1';
		if (item.indexs.ten) index += '2';
		if (item.indexs.unit) index += '3';
		if (item.indexs.five) index += '4';
		return {index:index, value:item.value}
	}

	combineSummation() {
		if (vm.combineSummation.two && vm.combineSummation.value) {
			this.selector.combineSummation(vm.combineSummation.value);
		}
		return this;
	}

	fullTurn() {
		if (vm.fullTurn) {
			this.selector.fullTurn(vm.fullTurn);
		}
		return this;
	}

	exclude() {
		if (vm.exclude) {
			this.selector.exclude(vm.exclude);
		}
		return this;
	}

	symbolLocation() {
		this.selector.symbolLocation(
			vm.symbolLocation.thousand,
			vm.symbolLocation.hundred,
			vm.symbolLocation.ten,
			vm.symbolLocation.unit
		);
		return this;
	}

	digit() {
		if (!vm.digit.selected && !vm.digit.deleted) return this;
		let action = vm.digit.selected ? 's' : 'd';
		if (vm.digit.contains) {
			this.selector.contains(action, vm.digit.contains);
		}
		if (vm.digit.compound) {
			this.selector.compound(action, vm.digit.compound);
		}
		return this;
	}

	repeat() {
		if (vm.repeat.selected || vm.repeat.deleted) {
			let action = vm.repeat.selected ? 's' : 'd';
			this.selector.repeat(action, 2);
		}
		return this;
	}

	serial() {
		if (vm.serial.selected || vm.serial.deleted) {
			let action = vm.serial.selected ? 's' : 'd';
			this.selector.serial(action, 2);
		}
		return this;
	}

	opposite() {
		if (!vm.opposite.selected && !vm.opposite.deleted) {
			return this;
		}
		if (!vm.opposite.value1 && !vm.opposite.value2 && !vm.opposite.value3) {
			return this;
		}
		if (vm.opposite.value1 && !this._isOpposite(vm.opposite.value1)) {
			throw Error('第一个输入框输入第不是对数, 请输入间隔为5的对数')
		}
		if (vm.opposite.value2 && !this._isOpposite(vm.opposite.value2)) {
			throw Error('第二个输入框输入第不是对数, 请输入间隔为5的对数')
		}
		if (vm.opposite.value3 && !this._isOpposite(vm.opposite.value3)) {
			throw Error('第三个输入框输入第不是对数, 请输入间隔为5的对数')
		}
		let action = vm.opposite.selected ? 's' : 'd';
		this.selector.opposite(action, vm.opposite.value1, vm.opposite.value2, vm.opposite.value3);
		return this;
	}
	_isOpposite(v) {
		return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'].indexOf(v) > -1;
	}

	attr() {
		for (let i = 0; i < 4; i++) {
			if (!vm.attr[i].selected && !vm.attr[i].deleted) continue;
			let action = vm.attr[i].selected ? 's' : 'd';
			if (i == 0) {
				this.selector.odd(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 1) {
				this.selector.even(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 2) {
				this.selector.large(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			} else if (i == 3) {
				this.selector.small(action, vm.attr[i].thousand, vm.attr[i].hundred, vm.attr[i].ten, vm.attr[i].unit);
			}
		}
		return this;
	}

	build() {
		this.matchFullTurn().summation().fullTurn().exclude().combineSummation()
			.symbolLocation().digit().repeat().serial().opposite().attr().fixed();
		return this.selector.numbers;
	}

}

Array.prototype.copy = function() {
	return JSON.parse(JSON.stringify(this));
}
Array.prototype.unique = function() {
	return Array.from(new Set(this));
}
Array.prototype.duplication = function() {
	let obj = {};
	this.forEach(t => {
		obj[t] = t;
	})
	return Object.values(obj);
}
Array.prototype.insert = function(index, value) {
	this.splice(index, 0, value)
}
String.prototype.sum = function() {
	let result = 0;
	this.split('').forEach(e => {
		result += parseInt(e);
	})
	return result % 10;
}

const SUM_MAP = {};
SUM_MAP[1] = {};
for (let i = 0; i < 10; i++) {
	SUM_MAP[1][i] = [i + ''];
}
SUM_MAP[2] = {};
for (let i = 0; i < 100; i++) {
	let temp = i < 10 ? ('0' + i ) : ('' + i);
	let sum = temp.sum();
	if (!SUM_MAP[2][sum]) {
		SUM_MAP[2][sum] = [];
	}
	SUM_MAP[2][sum].push(temp);
}
SUM_MAP[3] = {};
for (let i = 0; i < 1000; i++) {
	let temp = i < 10 ? ('00' + i ) : i < 100 ? ('0' + i) : ('' + i);
	let sum = temp.sum();
	if (!SUM_MAP[3][sum]) {
		SUM_MAP[3][sum] = [];
	}
	SUM_MAP[3][sum].push(temp);
}
SUM_MAP[4] = {};
for (let i = 0; i < 1000; i++) {
	let temp = i < 10 ? ('000' + i ) : i < 100 ? ('00' + i) : i < 1000 ? ('0' + i) : ('' + i);
	let sum = temp.sum();
	if (!SUM_MAP[4][sum]) {
		SUM_MAP[4][sum] = [];
	}
	SUM_MAP[4][sum].push(temp);
}

class Calculator {
	static fullSort(a) {
		let result = [];
		this._fullSort(a, 0, a.length - 1, result);
		return result;
	}

	static _fullSort(list, s, e, result) {
		if (s == e) {
			result.push(list.copy());
		}
		for (let i = s; i <= e; i++) {
			this.swap(list, s, i);
			this._fullSort(list, s + 1, e, result);
			this.swap(list, s, i);
		}
	}

	static swap(a, i, j) {
		let temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}

	static combine(arr, count, symbol = '') {
		let result = [];
		this._combine("", result, arr, count, 0, 0, symbol);
		return result;
	}

	static _combine(_stack, result, arr, tar, has, cur, symbol = '') {
		if (has == tar) {
			result.push(_stack);
			return;
		}
		for (let i = cur; i < arr.length; i++) {
			if (_stack.indexOf(arr[i]) == -1) {
				let stack = _stack + symbol + arr[i];
				this._combine(stack, result, arr, tar, has + 1, i, symbol);
			}
		}
	}

	static arrangement(arr, symbol = '') {
		for (let i = 0; i < arr.length - 1; i++) {
			arr[i + 1] = this._arrangement(arr[i], arr[i + 1], symbol);
		}
		return arr[arr.length - 1];
	}

	static _arrangement(arr1, arr2, symbol = '') {
		let result = [];
		let k = 0;
		for (let i = 0; i < arr1.length; i++) {
			for (let j = 0; j < arr2.length; j++) {
				result[k] = arr1[i]+symbol+arr2[j];
				k++;
			}
		}
		return result;
	}
}

class TwoOutOfFiveNumberSelector {

	constructor() {
		this.numbers = this.buildNumbers();
	}

	buildNumbers() {
		let result = [];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 10; j++) {
				for (let k = 0; k < 10; k++) {
					let temp = ['X','X','X','X', k+''];
					temp[i] = j+'';
					result.push(temp.join(''));
				}
			}
		}
		return result;
	}

	location(action, five, thousands, hundreds, tens, singleDigit) {
		let indexs = [];
		if (thousands) indexs.push({index : 0, value : thousands});
		if (hundreds) indexs.push({index : 1, value : hundreds});
		if (tens) indexs.push({index : 2, value : tens});
		if (singleDigit) indexs.push({index : 3, value : singleDigit});
		if (indexs.length != 1 || !five) {
			this.numbers = [];
			return this;
		}
		let selected = [];
		let arr = five.split('');
		let i = parseInt(indexs[0].index);
		indexs[0].value.split('').forEach(v => {
			arr.forEach(a => {
				let temp = ['X','X','X','X', a];
				temp[i] = v;
				selected.push(temp.join(''));
			});
		})
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1 && e[i] != 'X';
			}).sort();
		}
		return this;
	}

	fit(action, n1, n2) {
		if (!action || (!n1 && !n2)) return this;
		if (!n1) n1 = '0123456789';
		if (!n2) n2 = '0123456789';
		let arr1 = n1.split('');
		let arr2 = n2.split('');
		let selected = [];
		arr1.forEach(a1 => {
			arr2.forEach(a2 => {
				let temp = [a1, a2, 'X', 'X', 'X'];
				Calculator.fullSort(temp).duplication().forEach(f => {
					selected.push(f.join(''));
				})
			})
		})
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	summation(action, n1, n2, n3, n4) {
		if (!action) return this;
		let indexs = [];
		if (n1) indexs.push(n1);
		if (n2) indexs.push(n2);
		if (n3) indexs.push(n3);
		if (n4) indexs.push(n4);
		if (indexs.length == 0) return this;
		let selected = this._summation(indexs[0]);
		if (indexs.length > 1) {
			for (let i = 1; i < indexs.length; i++) {
				let s = this._summation(indexs[i]);
				selected = selected.filter(f => {
					return s.indexOf(f) > -1;
				})
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_summation(n) {
		let selected = []
		if (n.index.length == 1) {
			if (n.index == '4') {
				n.value.split('').forEach(e => {
					for (let j = 0; j < 10; j++) {
						let arr = ['X','X','X',j+''];
						Calculator.fullSort(arr).duplication().forEach(d => {
							d.push(e);
							selected.push(d.join(''));
						});
					}
				});
			} else {
				let idx = parseInt(n.index);
				n.value.split('').forEach(e => {
					for (let j = 0; j < 10; j++) {
						let arr = ['X','X','X','X', j+''];
						arr[idx] = e;
						selected.push(arr.join(''));
					}
				});
			}
		} else if (n.index.length == 2) {
			if (n.index.endsWith('4') == -1) throw new Error('无效参数,必须以下标4结尾');
			let indexN = parseInt(n.index[0]);
			let index4 = parseInt(n.index[1]);
			n.value.split('').forEach(e => {
				SUM_MAP[2][parseInt(e)].forEach(p => {
					let arr = ['X','X','X','X','X'];
					arr[indexN] = p[0];
					arr[index4] = p[1];
					selected.push(arr.join(''));
				})
			});
		} else {
			throw new Error('无效参数');
		}
		return selected;
	}

	combineSummation(value) {
		let selected = [];
		if (!value) return this;
		for (let i = 0; i < value.length; i++) {
			SUM_MAP[2][parseInt(value[i])].forEach(e => {
				let arr = [e[0], 'X', 'X','X'];
				Calculator.fullSort(arr).duplication().forEach(d => {
					d.push(e[1]);
					selected.push(d.join(''));
				});
			});
		}
		this.numbers = this.numbers.filter(e => {
			return selected.indexOf(e) > -1;
		}).sort();
		return this;
	}

	fullTurn(value) {
		if (!value) return this;
		let selected = [];
		let arr = value.split('');
		Calculator.combine(arr, 2).forEach(e => {
			for (let i = 0; i < 4; i++) {
				let temp = ['X','X','X','X'];
				temp[i] = e[0];
				temp.push(e[1]);
				selected.push(temp.join(''));
			}
			for (let i = 0; i < 4; i++) {
				let temp = ['X','X','X','X'];
				temp[i] = e[1];
				temp.push(e[0]);
				selected.push(temp.join(''));
			}
		})
		this.numbers = this.numbers.filter(e => {
			return selected.indexOf(e) > -1;
		}).sort();
		return this;
	}

	symbolLocation(thousands, hundreds, tens, singleDigit) {
		if (!thousands && !hundreds && !tens && !singleDigit) {
			return this;
		}
		this.numbers = this.numbers.filter(e => {
			if (thousands && e[0] != 'X') return false;
			if (hundreds && e[1] != 'X') return false;
			if (tens && e[2] != 'X') return false;
			if (singleDigit && e[3] != 'X') return false;
			return true;
		}).sort();
		return this;
	}

	exclude(value) {
		if (!value) {
			return this;
		}
		value.split('').forEach(s => {
			this.numbers = this.numbers.filter(f => {
				return f.indexOf(s) == -1;
			}).sort();
		});
		return this;
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				});
				return temp;
			});
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				});
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = 0; j < value.length; j++) {
				let temp = [value[i], 'X', 'X', 'X'];
				Calculator.fullSort(temp).forEach(t => {
					t.push(value[j]);
					selected.push(t.join(''));
				})
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action) {
		let original = ['11', '22','33','44','55','66','77','88','99','00'];
		let selected = [];
		original.forEach(o => {
			let temp = [o[0], 'X','X','X'];
			Calculator.fullSort(temp).forEach(s => {
				s.push(o[1]);
				selected.push(s.join(''));
			});
		});
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	serial(action) {
		let original = ['01','12','23','34','45','56','67','78','89','90'];
		let selected = [];
		original.forEach(o => {
			let temp = [o[0], 'X','X','X'];
			Calculator.fullSort(temp).forEach(s => {
				s.push(o[1]);
				selected.push(s.join(''));
			})
			temp = [o[1], 'X','X','X'];
			Calculator.fullSort(temp).forEach(s => {
				s.push(o[0]);
				selected.push(s.join(''));
			})
		})
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		this._opposite(n1, selected);
		this._opposite(n2, selected);
		this._opposite(n3, selected);
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_opposite(n, selected) {
		if (n) {
			let temp = [n[0], 'X','X','X'];
			Calculator.fullSort(temp).forEach(f => {
				f.push(n[1]);
				selected.push(f.join(''));
			});
			temp = [n[1], 'X','X','X'];
			Calculator.fullSort(temp).forEach(f => {
				f.push(n[0]);
				selected.push(f.join(''));
			});
		}
	}

	odd(action, thousands, hundreds, tens, singleDigit, five) {
		return this.common(action, thousands, hundreds, tens, singleDigit, five, "13579");
	}

	even(action, thousands, hundreds, tens, singleDigit, five) {
		return this.common(action, thousands, hundreds, tens, singleDigit, five, "24680");
	}

	large(action, thousands, hundreds, tens, singleDigit, five) {
		return this.common(action, thousands, hundreds, tens, singleDigit, five, "56789");
	}

	small(action, thousands, hundreds, tens, singleDigit, five) {
		return this.common(action, thousands, hundreds, tens, singleDigit, five, "01234");
	}

	common(action, thousands, hundreds, tens, singleDigit, five, number) {
		if (!action) return this;
		let indexs = [];
		if (thousands) indexs.push(0);
		if (hundreds) indexs.push(1);
		if (tens) indexs.push(2);
		if (singleDigit) indexs.push(3);
		if (five) indexs.push(4);
		if (indexs.length == 0 || indexs.length > 2) {
			this.numbers = [];
			return this;
		}
		let selected = [];
		if (indexs.length == 1) {
			if (indexs[0] == '4') {
				number.split('').forEach(n => {
					for (let i = 0; i < 10; i++) {
						let temp = [i+'', 'X','X','X'];
						Calculator.fullSort(temp).forEach(e => {
							e.push(n);
							selected.push(e.join(''));
						});
					}
				});
			} else {
				let index = parseInt(indexs[0]);
				number.split('').forEach(n => {
					for (let i = 0; i < 10; i++) {
						let temp = ['X', 'X','X','X', i+''];
						temp[index] = n;
						selected.push(temp.join(''));
					}
				})
			}
			
		} else {
			if (indexs[1] != '4') throw new Error('无效参数');
			let arr = number.split('');
			let index = parseInt(indexs[0]);
			arr.forEach(a1 => {
				arr.forEach(a2 => {
					let temp = ['X', 'X','X','X', a2];
					temp[index] = a1;
					selected.push(temp.join(''));
				});
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}

class TwoFixedNumberSelector {

	constructor() {
		this.numbers = this.buildNumbers();
	}

	buildNumbers() {
		let numbers = [];
		for (let i = 0; i < 100; i++) {
			let str = i < 10 ? ('0' + i + 'XX') : (i + 'XX');
			Calculator.fullSort(str.split('')).forEach(function(v, i) {
				numbers.push(v.join(''));
			})
		}
		return numbers.unique().sort();
	}

	location(action, thousands, hundreds, tens, singleDigit) {
		if (!action) return this;
		if (!thousands && !hundreds && !tens && !singleDigit) return this;
		let indexs = [];
		if (thousands) indexs.push({index:0, value:thousands});
		if (hundreds) indexs.push({index:1, value:hundreds});
		if (tens) indexs.push({index:2, value:tens});
		if (singleDigit) indexs.push({index:3, value:singleDigit});

		let selected;
		if (indexs.length == 1) {
			selected = action === 's' ? this._locationSelected1(indexs) : this._locationDeleted1(indexs);
		} else if (indexs.length == 2) {
			selected = action === 's' ? this._locationSelected2(indexs) : this._locationDeleted2(indexs);
		} else {
			this.numbers = [];
			return this;
		}
		this.numbers = this.numbers.filter(item => {
			return selected.indexOf(item) > -1;
		})
		return this;
	}

	_locationSelected1(indexs) {
		let locationNumbers = [];
		for (let i = 0; i < 4; i++) {
			if (indexs[0].index == i) continue;
			for (let j = 0; j < 10; j++) {
				indexs[0].value.split('').forEach( v => {
					let temp = ['X','X','X','X'];
					temp[indexs[0].index] = v;
					temp[i] = j+"";
					locationNumbers.push(temp.join(''));
				});
			}
		}
		return locationNumbers.sort();
	}

	_locationDeleted1(indexs) {
		let locationNumbers = this.buildNumbers();
		let selected = this._locationSelected1(indexs);
		return locationNumbers.filter(e => {
			return selected.indexOf(e) == -1 && e[indexs[0].index] != 'X';
		});
	}

	_locationSelected2(indexs) {
		let locationNumbers = [];
		indexs[0].value.split('').forEach(v1 => {
			indexs[1].value.split('').forEach(v2 => {
				let temp = ['X','X','X','X'];
				temp[indexs[0].index] = v1;
				temp[indexs[1].index] = v2;
				locationNumbers.push(temp.join(''));
			})
		})
		return locationNumbers.sort();
	}

	_locationDeleted2(indexs) {
		let locationNumbers = this.buildNumbers();
		let selected = this._locationSelected2(indexs);
		return locationNumbers.filter(e => {
			return selected.indexOf(e) == -1 && e[indexs[0].index] != 'X' && e[indexs[1].index] != 'X';
		});
	}

	fit(action, n1, n2) {
		if (!action || (!n1 && !n2)) return this;
		if (!n1) n1 = '0123456789';
		if (!n2) n2 = '0123456789';
		let selected = [];
		n1.split('').forEach(e1 => {
			n2.split('').forEach(e2 => {
				Calculator.fullSort((e1+e2+'XX').split('')).forEach(e => {
					selected.push(e.join(''));
				});
			});
		})
		selected = selected.unique();
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	summation(action, n1, n2, n3, n4) {
		if (!action) {
			return this;
		}
		let selected = [];
		let boxs = [];
		if (n1) boxs.push(n1);
		if (n2) boxs.push(n2);
		if (n3) boxs.push(n3);
		if (n4) boxs.push(n4);

		if (boxs.length == 0) {
			return this;
		}
		selected = this._summationSelected(boxs[0]);

		if (boxs.length > 1) {
			for (let i = 1; i < boxs.length; i++) {
				let s = this._summationSelected(boxs[i]);
				selected = selected.filter(f => {
					return s.indexOf(f) > -1;
				});
			}
		}

		selected = selected.unique();
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;

	}

	_summationSelected(n) {
		let selected = [];
		let nCount = n.index.split('');
		let nums = n.value.split('');

		if (nCount.length == 1) {
			nums.forEach(n => {
				for (let i = 0; i < 4; i++) {
					if (nCount[0] == i) continue;
					for (let j = 0; j < 10; j++) {
						let arr = ['X','X','X','X'];
						arr[parseInt(nCount[0])] = n;
						arr[i] = ''+j;
						selected.push(arr.join(''));
					}
				}
			})
		} else {
			for (let i = 0; i < nums.length; i++) {
				let sum = SUM_MAP[nCount.length][parseInt(nums[i])];
				sum.forEach(s => {
					let arr = ['X','X','X','X']
					for (let i = 0; i < nCount.length; i++) {
						arr[parseInt(nCount[i])] = s[i];
					}
					selected.push(arr.join(''));
				});
			}
		}
		return selected;
	}

	combineSummation(value) {
		if (value.length == 0) return this;
		let selected = [];
		value.split('').forEach(v => {
			SUM_MAP[2][parseInt(v)].forEach(s => {
				let temp = s+'XX';
				Calculator.fullSort(temp.split('')).forEach(c => {
					selected.push(c.join(''));
				});
			});
		})
		selected = selected.unique();
		this.numbers = this.numbers.filter(e => {
			return selected.indexOf(e) > -1;
		}).sort();

		return this;
	}

	fullTurn(value) {
		if (value.length < 2) return this;
		let selected = [];
		Calculator.combine(value.split(''), 2).forEach(c => {
			let temp = c + 'XX';
			Calculator.fullSort(temp.split('')).forEach(f => {
				selected.push(f.join(''));
			});
		})
		this.numbers = this.numbers.filter(e => {
			return selected.indexOf(e) > -1;
		}).sort();
		return this;
	}

	symbolLocation(thousands, hundreds, tens, singleDigit) {
		if (!thousands && !hundreds && !tens && !singleDigit) {
			return this;
		}
		this.numbers = this.numbers.filter(e => {
			if (thousands && e[0] != 'X') return false;
			if (hundreds && e[1] != 'X') return false;
			if (tens && e[2] != 'X') return false;
			if (singleDigit && e[3] != 'X') return false;
			return true;
		}).sort();
		return this;
	}

	exclude(value) {
		if (!value) {
			return this;
		}
		value.split('').forEach(s => {
			this.numbers = this.numbers.filter(f => {
				return f.indexOf(s) == -1;
			}).sort();
		})
		return this;
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				});
				return temp;
			})
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				});
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = 0; j < value.length; j++) {
				let temp = value[i]+''+value[j]+'XX';
				Calculator.fullSort(temp.split('')).forEach(t => {
					selected.push(t.join(''));
				});
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action) {
		let original = ['11', '22','33','44','55','66','77','88','99','00'];
		let selected = [];
		original.forEach(o => {
			Calculator.fullSort((o+'XX').split('')).forEach(s => {
				selected.push(s.join(''));
			});
		})
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	serial(action) {
		let original = ['01','12','23','34','45','56','67','78','89','90'];
		let selected = [];
		original.forEach(o => {
			Calculator.fullSort((o+'XX').split('')).forEach(s => {
				selected.push(s.join(''));
			});
		});
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) === -1;
			}).sort();
		}
		return this;
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		if (n1) {
			Calculator.fullSort((n1+'XX').split('')).forEach(f => {
				selected.push(f.join(''));
			});
		}
		if (n2) {
			Calculator.fullSort((n2+'XX').split('')).forEach(f => {
				selected.push(f.join(''));
			});
		}
		if (n3) {
			Calculator.fullSort((n3+'XX').split('')).forEach(f => {
				selected.push(f.join(''));
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	odd(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "13579");
	}

	even(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "24680");
	}

	large(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "56789");
	}

	small(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "01234");
	}

	common(action, thousands, hundreds, tens, singleDigit, number) {
		if (!action) return this;
		let indexs = [];
		if (thousands) indexs.push(0);
		if (hundreds) indexs.push(1);
		if (tens) indexs.push(2);
		if (singleDigit) indexs.push(3);
		if (indexs.length == 0 || indexs.length > 2) {
			this.numbers = [];
			return this;
		}
		let selected = []
		if (indexs.length == 1) {
			number.split('').forEach(x => {
				for (let y = 0; y < 4; y++) {
					if (indexs[0] == y) continue;
					for (let z = 0; z < 10; z++) {
						let temp = ['X','X','X','X'];
						temp[indexs[0]] = x;
						temp[y] = z+'';
						selected.push(temp.join(''));
					}
				}
			});
		} else {
			let arr = ['X','X','X','X'];
			indexs.forEach(f => {
				arr[parseInt(f)] = number;
			});
			let arrs = [
				arr[0].split(''),
				arr[1].split(''),
				arr[2].split(''),
				arr[3].split('')
			]
			Calculator.arrangement(arrs).forEach(a => {
				selected.push(a);
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}

class ThreeFixedNumberSelector {

	constructor() {
		this.numbers = this.buildNumbers();
	}

	buildNumbers() {
		let numbers = [];
		for (let i = 0; i < 1000; i++) {
			let str = i < 10 ? ('00' + i + 'X') : i < 100 ? ('0' + i + 'X') : i + 'X';
			Calculator.fullSort(str.split('')).forEach(function(v, i) {
				numbers.push(v.join(''));
			})
		}
		return numbers.unique().sort();
	}

	location(action, thousands, hundreds, tens, singleDigit) {
		if (!action) return this;
		if (!thousands && !hundreds && !tens && !singleDigit) return this;
		let indexs = [];
		if (thousands) indexs.push({index:0, value:thousands});
		if (hundreds) indexs.push({index:1, value:hundreds});
		if (tens) indexs.push({index:2, value:tens});
		if (singleDigit) indexs.push({index:3, value:singleDigit});

		let selected;
		if (indexs.length == 1) {
			selected = action === 's' ? this._locationSelected1(indexs) : this._locationDeleted1(indexs);
		} else if (indexs.length == 2) {
			selected = action === 's' ? this._locationSelected2(indexs) : this._locationDeleted2(indexs);
		} else if (indexs.length == 3) {
			selected = action === 's' ? this._locationSelected3(indexs) : this._locationDeleted3(indexs);
		} else {
			this.numbers = [];
			return this;
		}
		this.numbers = this.numbers.filter(item => {
			return selected.indexOf(item) > -1;
		})
		return this;
	}

	_locationSelected1(indexs) {
		let result = [];
		let p = 0;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				let temp = [i+'', j+'','X'];
				let res = Calculator.fullSort(temp);
				for (let k = 0; k < res.length; k++) {
					res[k].insert(indexs[0].index, indexs[0].value);
					res[k][0] = res[k][0].split('');
					res[k][1] = res[k][1].split('');
					res[k][2] = res[k][2].split('');
					res[k][3] = res[k][3].split('');
					Calculator.arrangement(res[k]).forEach(a => {
						result[p++] = a;
					});
				}
			}
		}
		return result.unique().sort();
	}

	_locationDeleted1(indexs) {
		let locationNumbers = this.buildNumbers();
		let selected = this._locationSelected1(indexs);
		return locationNumbers.filter(e => {
			return selected.indexOf(e) == -1 && e[indexs[0].index] != 'X';
		});
	}

	_locationSelected2(indexs) {
		let locationNumbers = [];
		indexs[0].value.split('').forEach(v1 => {
			indexs[1].value.split('').forEach(v2 => {
				let subIndexs = [];
				for (let i = 0; i < 4; i++) {
					if (indexs[0].index == i || indexs[1].index == i) continue;
					for (let j = 0; j < 10; j++) {
						let temp = ['X','X','X','X'];
						temp[indexs[0].index] = v1;
						temp[indexs[1].index] = v2;
						temp[i] = j+'';
						locationNumbers.push(temp.join(''));
					}
				}
			})
		})
		return locationNumbers.sort();
	}

	_locationDeleted2(indexs) {
		let locationNumbers = this.buildNumbers();
		let selected = this._locationSelected2(indexs);
		return locationNumbers.filter(e => {
			return selected.indexOf(e) == -1 && e[indexs[0].index] != 'X' && e[indexs[1].index] != 'X';
		});
	}

	_locationSelected3(indexs) {
		let result = [];
		let array = [['X'],['X'],['X'],['X']];
		indexs.forEach(i => {
			array[i.index] = i.value.split('');
		});
		Calculator.arrangement(array).forEach(a => {
			result.push(a);
		})
		return result;

	}

	_locationDeleted3(indexs) {
		let locationNumbers = this.buildNumbers();
		let selected = this._locationSelected3(indexs);
		return locationNumbers.filter(e => {
			return selected.indexOf(e) == -1 && e[indexs[0].index] != 'X'
				&& e[indexs[1].index] != 'X' && e[indexs[2].index] != 'X';
		})
	}

	fit(action, n1, n2, n3) {
		if (!action || (!n1 && !n2)) return this;
		if (!n1) n1 = '0123456789';
		if (!n2) n2 = '0123456789';
		if (!n3) n3 = '0123456789';
		let selected = [];
		n1.split('').forEach(e1 => {
			n2.split('').forEach(e2 => {
				n3.split('').forEach(e3 => {
					Calculator.fullSort((e1+e2+e3+'X').split('')).forEach(e => {
						selected.push(e.join(''));
					})
				})
			})
		})
		selected = selected.unique();
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	summation(action, n1, n2, n3, n4) {
		if (!action) {
			return this;
		}
		let selected = [];
		let boxs = [];
		if (n1) boxs.push(n1);
		if (n2) boxs.push(n2);
		if (n3) boxs.push(n3);
		if (n4) boxs.push(n4);

		if (boxs.length == 0) {
			return this;
		}
		selected = this._summationSelected(boxs[0]);
		if (boxs.length > 1) {
			for (let i = 1; i < boxs.length; i++) {
				let s = this._summationSelected(boxs[i]);
				selected = selected.filter(f => {
					return s.indexOf(f) > -1;
				});
			}
		}

		selected = selected.unique();
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;

	}

	_summationSelected(n) {
		let selected = [];
		let nCount = n.index.split('');
		let nums = n.value.split('');
		if (nCount.length == 1) {
			nums.forEach(n => {
				for (let i = 0; i < 100; i++) {
					let temp = i < 10 ? 'X0' + i : 'X' + i;
					Calculator.fullSort(temp.split('')).duplication().forEach(s => {
						s.insert(nCount[0], n);
						selected.push(s.join(''));
					});
				}
			});
		} else {
			for (let i = 0; i < nums.length; i++) {
				let sum = SUM_MAP[nCount.length][parseInt(nums[i])];
				sum.forEach(s => {
					if (nCount.length == 2) {
						for (let j = 0; j < 4; j++) {
							if (j == nCount[0] || j == nCount[1]) continue;
							for (let k = 0; k < 10; k++) {
								let arr = ['X','X','X','X'];
								for (let i = 0; i < nCount.length; i++) {
									arr[parseInt(nCount[i])] = s[i];
								}
								arr[j] = k+'';
								selected.push(arr.join(''));
							}
						}
					} else {
						let arr = ['X','X','X','X'];
						for (let i = 0; i < nCount.length; i++) {
							arr[parseInt(nCount[i])] = s[i];
						}
					}
				});
			}
		}
		return selected;
	}

	combineSummation(value, count) {
		let selected = count == 2 ? this._combineSummation2(value) : this._combineSummation3(value);
		this.numbers = this.numbers.filter(e => {
			return selected.indexOf(e) > -1;
		}).sort();
		return this;
	}

	_combineSummation2(value) {
		if (value.length == 0) return this;
		let selected = [];
		value.split('').forEach(v => {
			SUM_MAP[2][parseInt(v)].forEach(s => {
				for (let i = 0; i < 10; i++) {
					let temp = s+'X'+i;
					Calculator.fullSort(temp.split('')).forEach(c => {
						selected.push(c.join(''));
					});
				}
			});
		})
		return selected.unique();
	}

	_combineSummation3(value) {
		if (value.length == 0) return this;
		let selected = [];
		value.split('').forEach(v => {
			SUM_MAP[3][parseInt(v)].forEach(s => {
				let temp = s+'X';
				Calculator.fullSort(temp.split('')).forEach(c => {
					selected.push(c.join(''));
				});
			});
		});
		return selected.unique();
	}

	fullTurn(value) {
		if (!value) return this;
		if (value.length < 3) {
			this.numbers = [];
			return this;
		}
		let selected = [];
		Calculator.combine(value.split(''), 3).forEach(c => {
			let temp = c + 'X';
			Calculator.fullSort(temp.split('')).forEach(f => {
				selected.push(f.join(''));
			});
		});
		this.numbers = this.numbers.filter(e => {
			return selected.indexOf(e) > -1;
		}).sort();
		return this;
	}

	symbolLocation(thousands, hundreds, tens, singleDigit) {
		if (!thousands && !hundreds && !tens && !singleDigit) {
			return this;
		}
		this.numbers = this.numbers.filter(e => {
			if (thousands && e[0] != 'X') return false;
			if (hundreds && e[1] != 'X') return false;
			if (tens && e[2] != 'X') return false;
			if (singleDigit && e[3] != 'X') return false;
			return true;
		}).sort();
		return this;
	}

	exclude(value) {
		if (!value) {
			return this;
		}
		value.split('').forEach(s => {
			this.numbers = this.numbers.filter(f => {
				return f.indexOf(s) == -1;
			}).sort();
		})
		return this;
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				})
				return temp;
			})
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				})
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = 0; j < value.length; j++) {
				for (let k = 0; k < value.length; k++) {
					let temp = value[i]+''+value[j]+value[k]+'X';
					Calculator.fullSort(temp.split('')).forEach(t => {
						selected.push(t.join(''));
					});
				}
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action, count) {
		let selected = [];
		if (count == 2) {
			let original = ['11', '22','33','44','55','66','77','88','99','00'];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					Calculator.fullSort((o+'X'+i).split('')).forEach(s => {
						selected.push(s.join(''));
					});
				}
			});
		} else if (count == 3) {
			let original = ['111', '222','333','444','555','666','777','888','999','000'];
			original.forEach(o => {
				Calculator.fullSort((o+'X').split('')).forEach(s => {
					selected.push(s.join(''));
				});
			});
		}

		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	serial(action, count) {
		let selected = [];
		if (count == 2) {
			let original = ['01','12','23','34','45','56','67','78','89','90'];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					Calculator.fullSort((o+'X'+i).split('')).forEach(s => {
						selected.push(s.join(''));
					});
				}
			});
		} else if (count == 3) {
			let original = ['012', '123','234','345','456','567','678','789','890','901'];
			original.forEach(o => {
				Calculator.fullSort((o+'X').split('')).forEach(s => {
					selected.push(s.join(''));
				});
			});
		}

		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		this._opposite(n1, selected);
		this._opposite(n2, selected);
		this._opposite(n3, selected);

		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_opposite(n, selected) {
		if (n) {
			for (let i = 0; i < 10; i++) {
				Calculator.fullSort((n+'X'+i).split('')).forEach(f => {
					selected.push(f.join(''));
				});
			}
		}
	}

	odd(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "13579");
	}

	even(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "24680");
	}

	large(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "56789");
	}

	small(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "01234");
	}

	common(action, thousands, hundreds, tens, singleDigit, number) {
		if (!action) return this;
		let indexs = [];
		if (thousands) indexs.push(0);
		if (hundreds) indexs.push(1);
		if (tens) indexs.push(2);
		if (singleDigit) indexs.push(3);
		if (indexs.length == 0 || indexs.length > 3) {
			this.numbers = [];
			return this;
		}
		let selected = [];
		if (indexs.length == 1) {
			for (let i = 0; i < 100; i++) {
				let temp = i < 10 ? 'X0'+i : 'X'+i
				Calculator.fullSort(temp.split('')).forEach(e => {
					e.insert(indexs[0], number);
					e[0] = e[0].split('');
					e[1] = e[1].split('');
					e[2] = e[2].split('');
					e[3] = e[3].split('');
					Calculator.arrangement(e).forEach(a => {
						selected.push(a);
					});
				});
			}
			selected = selected.unique();
		} else if (indexs.length == 2) {
			for (let i = 0; i < 10; i++) {
				let temp = 'X'+i;
				Calculator.fullSort(temp.split('')).forEach(e => {
					let fristIndex;
					let lastIndex;
					if (indexs[0] < indexs[1]) {
						fristIndex = indexs[0];
						lastIndex = indexs[1];
					} else {
						fristIndex = indexs[1];
						lastIndex = indexs[0];
					}
					e.insert(fristIndex, number);
					e.insert(lastIndex, number);
					e[0] = e[0].split('');
					e[1] = e[1].split('');
					e[2] = e[2].split('');
					e[3] = e[3].split('');
					Calculator.arrangement(e).forEach(a => {
						selected.push(a);
					});
				});
			}
		} else {
			let arr = ['X','X','X','X'];
			indexs.forEach(f => {
				arr[parseInt(f)] = number;
			});
			let arrs = [
				arr[0].split(''),
				arr[1].split(''),
				arr[2].split(''),
				arr[3].split('')
			]
			Calculator.arrangement(arrs).forEach(a => {
				selected.push(a);
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}

class FourFixedNumberSelector {

	buildNumbers() {
		let numbers = [];
		for (let i = 0; i < 10000; i++) {
			let str = i < 10 ? ('000' + i) : i < 100 ? ('00' + i) : i < 1000 ? ('0'+i) : i + '';
			Calculator.fullSort(str.split('')).forEach(function(v, i) {
				numbers.push(v.join(''));
			})
		}
		return numbers.unique().sort();
	}

	location(action, thousands, hundreds, tens, singleDigit) {
		if (!action) return this;
		if (!thousands && !hundreds && !tens && !singleDigit) return this;

		let array = [];
		let selected = [];
		if (action === 's') {
			array[0] = thousands ? thousands.split('') : ['1','2','3','4','5','6','7','8','9','0'];
			array[1] = hundreds ? hundreds.split('') : ['1','2','3','4','5','6','7','8','9','0'];
			array[2] = tens ? tens.split('') : ['1','2','3','4','5','6','7','8','9','0'];
			array[3] = singleDigit ? singleDigit.split('') : ['1','2','3','4','5','6','7','8','9','0'];
		} else {
			array[0] = this._locationDeleted(thousands);
			array[1] = this._locationDeleted(hundreds);
			array[2] = this._locationDeleted(tens);
			array[3] = this._locationDeleted(singleDigit);
		}
		Calculator.arrangement(array).forEach(a => {
			selected.push(a);
		});

		if (!this.numbers) {
			this.numbers = selected;
		} else {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) > -1;
			});
		}
		return this;
	}

	_locationDeleted(n) {
		if (n) {
			let result = [];
			for (let i = 0; i < 10; i++) {
				if (n.indexOf(i+'') == -1) {
					result.push(i+'');
				}
			}
			return result;
		} else {
			return [1,2,3,4,5,6,7,8,9,0];
		}
	}

	fit(action, n1, n2, n3, n4) {
		if (!action || (!n1 && !n2)) return this;
		if (!n1) n1 = '0123456789';
		if (!n2) n2 = '0123456789';
		if (!n3) n3 = '0123456789';
		if (!n4) n4 = '0123456789';

		let selected = [];
		n1.split('').forEach(e1 => {
			n2.split('').forEach(e2 => {
				n3.split('').forEach(e3 => {
					n4.split('').forEach(e4 => {
						Calculator.fullSort((e1+e2+e3+e4).split('')).forEach(e => {
							selected.push(e.join(''));
						});
					});
				});
			});
		});
		selected = selected.unique();
		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected;
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			let unselected = this.buildNumbers().filter(f => {
				return selected.indexOf(f) == -1;
			});
			if (!this.numbers) {
				this.numbers = unselected;
			} else {
				this.numbers = this.numbers.filter(e => {
					return unselected.indexOf(e) == -1;
				}).sort();
			}
		}
		return this;
	}

	summation(action, n1, n2, n3, n4) {
		if (!action) {
			return this;
		}
		let selected = [];
		let boxs = [];
		if (n1) boxs.push(n1);
		if (n2) boxs.push(n2);
		if (n3) boxs.push(n3);
		if (n4) boxs.push(n4);

		if (boxs.length == 0) {
			return this;
		}
		selected = this._summationSelected(boxs[0])
		if (boxs.length > 1) {
			for (let i = 1; i < boxs.length; i++) {
				let s = this._summationSelected(boxs[i]);
				selected = selected.filter(f => {
					return s.indexOf(f) > -1;
				});
			}
		}

		selected = selected.unique();
		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			let unselected = this.buildNumbers().filter(f => {
				return selected.indexOf(f) == -1;
			})
			if (!this.numbers) {
				this.numbers = unselected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return unselected.indexOf(e) == -1;
				}).sort();
			}
		}
		return this;

	}

	_summationSelected(n) {
		let selected = [];
		let nCount = n.index.split('');
		let nums = n.value.split('');
		if (nCount.length == 1) {
			nums.forEach(n => {
				for (let i = 0; i < 1000; i++) {
					let temp = i < 10 ? '0' + i : i < 100 ? '0' + i : '' + i;
					Calculator.fullSort(temp.split('')).duplication().forEach(s => {
						s.insert(nCount[0], n);
						selected.push(s.join(''));
					});
				}
			});
		} else {
			for (let i = 0; i < nums.length; i++) {
				let sum = SUM_MAP[nCount.length][parseInt(nums[i])];
				sum.forEach(s => {
					if (nCount.length == 2) {
						for (let j = 0; j < 4; j++) {
							if (j == nCount[0] || j == nCount[1]) continue;
							for (let k = 0; k < 10; k++) {
								let arr = ['X','X','X','X'];
								arr[parseInt(nCount[0])] = s[0];
								arr[parseInt(nCount[1])] = s[1];
								arr[j] = k+'';
								for (let m = 0; m < 4; m ++) {
									if (arr[m] != 'X') continue;
									for (let n = 0; n < 10; n++) {
										arr[m] = n+'';
										selected.push(arr.join(''));
									}
								}
							}
						}
					} else if (nCount.length == 3) {
						for (let j = 0; j < 4; j++) {
							if (j == nCount[0] || j == nCount[1] || j == nCount[2]) continue;
							for (let k = 0; k < 10; k++) {
								let arr = ['X','X','X','X'];
								for (let i = 0; i < nCount.length; i++) {
									arr[parseInt(nCount[i])] = s[i];
								}
								arr[j] = k+'';
								selected.push(arr.join(''));
							}
						}
					} else {
						let arr = ['X','X','X','X']
						for (let i = 0; i < nCount.length; i++) {
							arr[parseInt(nCount[i])] = s[i];
						}
					}
				});
			}
		}
		return selected;
	}

	combineSummation(value, count) {
		let selected = count == 2 ? this._combineSummation2(value) : this._combineSummation3(value);
		if (!this.numbers) {
			this.numbers = selected.sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
			return this;
		}
	}

	_combineSummation2(value) {
		if (value.length == 0) return this;
		let selected = [];
		value.split('').forEach(v => {
			SUM_MAP[2][parseInt(v)].forEach(s => {
				for (let i = 0; i < 10; i++) {
					for (let j = 0; j < 10; j++) {
						let temp = s+''+j+''+i;
						Calculator.fullSort(temp.split('')).forEach(c => {
							selected.push(c.join(''));
						})
					}
				}
			})
		})
		return selected.unique();
	}

	_combineSummation3(value) {
		if (value.length == 0) return this;
		let selected = [];
		value.split('').forEach(v => {
			SUM_MAP[3][parseInt(v)].forEach(s => {
				for (let i = 0; i < 10; i++) {
					let temp = s + '' + i;
					Calculator.fullSort(temp.split('')).forEach(c => {
						selected.push(c.join(''));
					});
				}
			});
		});
		return selected.unique();
	}

	fullTurn(value) {
		if (!value) return this;
		if (value.length < 4) {
			this.numbers = [];
			return this;
		}
		let selected = [];
		Calculator.combine(value.split(''), 4).forEach(c => {
			let temp = c;
			Calculator.fullSort(temp.split('')).forEach(f => {
				selected.push(f.join(''));
			});
		});
		if (!this.numbers) {
			this.numbers = selected.sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		}
		return this;
	}

	symbolLocation(thousands, hundreds, tens, singleDigit) {
		if (!thousands && !hundreds && !tens && !singleDigit) {
			return this;
		}
		this.numbers = this.numbers.filter(e => {
			if (thousands && e[0] != 'X') return false;
			if (hundreds && e[1] != 'X') return false;
			if (tens && e[2] != 'X') return false;
			if (singleDigit && e[3] != 'X') return false;
			return true;
		}).sort();
		return this;
	}

	exclude(value) {
		if (!value) {
			return this;
		}
		if (!this.numbers) {
			this.numbers = this.buildNumbers();
		}
		value.split('').forEach(s => {
			this.numbers = this.numbers.filter(f => {
				return f.indexOf(s) == -1;
			}).sort();
		})
		return this;
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (!this.numbers) {
			this.numbers = this.buildNumbers();
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				})
				return temp;
			})
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				});
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = 0; j < value.length; j++) {
				for (let k = 0; k < value.length; k++) {
					for (let l = 0; l < value.length; l++) {
						let temp = value[i]+''+value[j]+value[k]+value[l]
						Calculator.fullSort(temp.split('')).duplication().forEach(t => {
							selected.push(t.join(''));
						});
					}
				}
			}
		}
		selected = selected.unique();
		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			if (!this.numbers) {
				this.numbers = this.buildNumbers();
			}
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action, count) {
		let selected = [];
		if (count == 2) {
			let original = ['11', '22','33','44','55','66','77','88','99','00'];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					for (let j = 0; j < 10; j++) {
						Calculator.fullSort((o+''+j+''+i).split('')).duplication().forEach(s => {
							selected.push(s.join(''));
						});
					}
				}
			});
			selected = selected.unique();
		} else if (count == 3) {
			let original = ['111', '222','333','444','555','666','777','888','999','000'];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					Calculator.fullSort((o+''+i).split('')).duplication().forEach(s => {
						selected.push(s.join(''));
					});
				}
			});
			selected = selected.unique();
		} else if (count == 4) {
			selected = ['1111', '2222','3333','4444','5555','6666','7777','8888','9999','0000'];
		} else if (count == 22) {
			let original = ['11', '22','33','44','55','66','77','88','99','00'];
			original.forEach(o1 => {
				original.forEach(o2 => {
					Calculator.fullSort((o1+o2).split('')).duplication().forEach(s => {
						selected.push(s.join(''));
					})
				})
				selected = selected.unique();
			});
		}

		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			if (!this.numbers) {
				this.numbers = this.buildNumbers();
			}
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	serial(action, count) {
		let selected = [];
		if (count == 2) {
			let original = ['01','12','23','34','45','56','67','78','89','90']
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					for(let j = 0; j < 10; j++) {
						Calculator.fullSort((o+''+j+''+i).split('')).forEach(s => {
							selected.push(s.join(''));
						});
					}
				}
			});
		} else if (count == 3) {
			let original = ['012', '123','234','345','456','567','678','789','890','901'];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					Calculator.fullSort((o+''+i).split('')).forEach(s => {
						selected.push(s.join(''));
					});
				}
			});
		} else if (count == 4) {
			let original = ['0123', '1234','2345','3456','4567','5678','6789','7890','8901','9012'];
			original.forEach(o => {
				Calculator.fullSort((o).split('')).forEach(s => {
					selected.push(s.join(''));
				});
			});
		}

		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			if (!this.numbers) {
				this.numbers = this.buildNumbers();
			}
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		this._opposite(n1, selected);
		this._opposite(n2, selected);
		this._opposite(n3, selected);
		selected = selected.unique();
		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			if (!this.numbers) {
				this.numbers = this.buildNumbers();
			}
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_opposite(n, selected) {
		if (n) {
			for (let i = 0; i < 10; i++) {
				for (let j = 0; j < 10; j++) {
					Calculator.fullSort((n+''+j+''+i).split('')).duplication().forEach(f => {
						selected.push(f.join(''));
					})
				}
			}
		}
	}

	odd(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "13579");
	}

	even(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "24680");
	}

	large(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "56789");
	}

	small(action, thousands, hundreds, tens, singleDigit) {
		return this.common(action, thousands, hundreds, tens, singleDigit, "01234");
	}

	common(action, thousands, hundreds, tens, singleDigit, number) {
		if (!action) return this;
		let indexs = [];
		if (thousands) indexs.push(0);
		if (hundreds) indexs.push(1);
		if (tens) indexs.push(2);
		if (singleDigit) indexs.push(3);
		if (indexs.length == 0 || indexs.length > 4) {
			this.numbers = [];
			return this;
		}
		let selected = [];
		if (indexs.length == 1) {
			for (let i = 0; i < 1000; i++) {
				let temp = i < 10 ? '00'+i : i < 100 ? '0'+i : '' + i;
				Calculator.fullSort(temp.split('')).forEach(e => {
					e.insert(indexs[0], number);
					e[0] = e[0].split('');
					e[1] = e[1].split('');
					e[2] = e[2].split('');
					e[3] = e[3].split('');
					Calculator.arrangement(e).forEach(a => {
						selected.push(a);
					});
				});
			}
			selected = selected.unique();
		} else if (indexs.length == 2) {
			for (let i = 0; i < 100; i++) {
				let temp = i < 10 ? '0' + i : '' + i;
				Calculator.fullSort(temp.split('')).duplication().forEach(e => {
					let fristIndex;
					let lastIndex;
					if (indexs[0] < indexs[1]) {
						fristIndex = indexs[0];
						lastIndex = indexs[1];
					} else {
						fristIndex = indexs[1];
						lastIndex = indexs[0];
					}
					e.insert(fristIndex, number);
					e.insert(lastIndex, number);
					e[0] = e[0].split('');
					e[1] = e[1].split('');
					e[2] = e[2].split('');
					e[3] = e[3].split('');
					Calculator.arrangement(e).forEach(a => {
						selected.push(a);
					});
				});
			}
			selected = selected.unique();
		} else if (indexs.length == 3) {
			let arrs = [['1','2','3','4','5','6','7','8','9','0'], 
			['1','2','3','4','5','6','7','8','9','0'], 
			['1','2','3','4','5','6','7','8','9','0'], 
			['1','2','3','4','5','6','7','8','9','0']];
			for (let i = 0; i < 4; i++) {
				if (indexs[i] != null) {
					arrs[indexs[i]] = number.split('');
				}
			}
			Calculator.arrangement(arrs).forEach(a => {
				selected.push(a);
			})
			selected = selected.unique();
		} else {
			let arr = ['X','X','X','X'];
			indexs.forEach(f => {
				arr[parseInt(f)] = number;
			})
			let arrs = [
				arr[0].split(''),
				arr[1].split(''),
				arr[2].split(''),
				arr[3].split('')
			];
			Calculator.arrangement(arrs).forEach(a => {
				selected.push(a);
			});
		}
		if (action === 's') {
			if (!this.numbers) {
				this.numbers = selected.sort();
			} else {
				this.numbers = this.numbers.filter(e => {
					return selected.indexOf(e) > -1;
				}).sort();
			}
		} else {
			if (!this.numbers) {
				this.numbers = this.buildNumbers();
			}
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}

class TwoPresentNumberSelector {

	constructor() {
		this.numbers = this.buildNumbers();
	}

	buildNumbers() {
		let result = [];
		for (let i = 0; i < 10; i++) {
			for (let j = i; j < 10; j++) {
				result.push(i + '' + j);
			}
		}
		return result;
	}

	match(action, n1, n2) {
		if (!n1 && !n2) return this;
		if (!n1) n1 = ['1','2','3','4','5','6','7','8','9','0'];
		else n1 = n1.split('');
		if (!n2) n2 = ['1','2','3','4','5','6','7','8','9','0'];
		else n2 = n2.split('');
		let selected = [];
		n1.forEach(f1 => {
			n2.forEach(f2 => {
				let arr = [f1, f2];
				arr.sort();
				selected.push(arr.join(''));
			});
		});
		if (action === 's') {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) > -1;
			});
		} else {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) == -1;
			});
		}

	}

	composite(value) {
		let selected = [];
		if (!value) return this;
		value.split('').forEach(e => {
			SUM_MAP[2][parseInt(e)].forEach(p => {
				let temp = [p[0], p[1]];
				temp.sort();
				selected.push(temp.join(''));
			});
		});
		this.numbers = this.numbers.filter(item => {
			return selected.indexOf(item) > -1;
		});
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				});
				return temp;
			});
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				});
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = i; j < value.length; j++) {
				let temp = value[i]+''+value[j];
				selected.push(temp);
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action) {
		let original = ['00','11','22','33','44','55','66','77','88','99'];
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return original.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return original.indexOf(e) == -1;
			}).sort();
		}
	}

	serial(action) {
		let original = ['01','09','12','23','34','45','56','67','78','89'];
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return original.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return original.indexOf(e) == -1;
			}).sort();
		}
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		let temp = [];
		if (n1) {
			temp = [n1[0], n1[1]];
			temp.sort();
			selected.push(temp.join(''));
		}
		if (n2) {
			temp = [n2[0], n2[1]];
			temp.sort();
			selected.push(temp.join(''));
		}
		if (n3) {
			temp = [n3[0], n3[1]];
			temp.sort();
			selected.push(temp.join(''));
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	odd(action, n1, n2) {
		return this.common(action, n1, n2, '13579');
	}

	even(action, n1, n2) {
		return this.common(action, n1, n2, '02468');
	}

	large(action, n1, n2) {
		return this.common(action, n1, n2, '56789');
	}

	small(action, n1, n2) {
		return this.common(action, n1, n2, '01234');
	}

	common(action, n1, n2, value) {
		if (!action || (!n1 && !n2)) return this
		let selected = this.numbers ? this.numbers : this.buildNumbers();
		if (n1) {
			selected = selected.filter(f => {
				return value.indexOf(f[0]) > -1;
			});
		}
		if (n2) {
			selected = selected.filter(f => {
				return value.indexOf(f[1]) > -1;
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}

class ThreePresentNumberSelector {

	constructor() {
		this.numbers = this.buildNumbers();
	}

	buildNumbers() {
		let result = [];
		for (let i = 0; i < 10; i++) {
			for (let j = i; j < 10; j++) {
				for (let k = j; k < 10; k++) {
					result.push(i + '' + j + '' + k);
				}
			}
		}
		return result;
	}

	match(action, n1, n2, n3) {
		if (!n1 && !n2 && !n3) return this;
		if (!n1) n1 = ['1','2','3','4','5','6','7','8','9','0'];
		else n1 = n1.split('');
		if (!n2) n2 = ['1','2','3','4','5','6','7','8','9','0'];
		else n2 = n2.split('');
		if (!n3) n3 = ['1','2','3','4','5','6','7','8','9','0'];
		else n3 = n3.split('');
		let selected = [];
		n1.forEach(f1 => {
			n2.forEach(f2 => {
				n3.forEach(f3 => {
					let arr = [f1, f2, f3];
					arr.sort();
					selected.push(arr.join(''));
				});
			});
		});
		if (action === 's') {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) > -1;
			});
		} else {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) == -1;
			});
		}
		return this;
	}

	composite(count, value) {
		if (!count || !value) {
			return this;
		}
		let selected = [];
		if (!value) return this;
		value.split('').forEach(e => {
			if (count == 2) {
				SUM_MAP[2][parseInt(e)].forEach(p => {
					for (let i = 0; i < 10; i++) {
						let temp = [p[0], p[1], i+'']
						temp.sort();
						selected.push(temp.join(''));
					}
				});
				selected.unique();
			} else if (count == 3) {
				SUM_MAP[3][parseInt(e)].forEach(p => {
					let temp = [p[0], p[1], p[2]];
					temp.sort();
					selected.push(temp.join(''));
				});
			} else {
				throw Error('错误参数count('+count+')');
			}
		})
		this.numbers = this.numbers.filter(item => {
			return selected.indexOf(item) > -1;
		})
		return this;
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				});
				return temp;
			});
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				});
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = i; j < value.length; j++) {
				for (let k = j; k < value.length; k++) {
					let temp = value[i]+''+value[j]+''+value[k];
					selected.push(temp);
				}
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action, count) {
		let selected = this._repeatOrSerial(count, ['00','11','22','33','44','55','66','77','88','99'],
			['000','111','222','333','444','555','666','777','888','999']);
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this
	}

	_repeatOrSerial(count, _original, _selected) {
		let selected;
		if (count === 2) {
			let original = _original;
			selected = [];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					let temp = o+''+i;
					let arr = [temp[0], temp[1], temp[2]];
					arr.sort();
					selected.push(arr.join(''));
				}
			});
			selected.unique();
		} else if(count === 3) {
			selected = _selected;
		} else {
			throw Error('错误参数count('+count+')');
		}
		return selected;
	}

	serial(action, count) {
		let selected = this._repeatOrSerial(count, ['01','09','12','23','34','45','56','67','78','89'],
			['012','019','089','123','234','345','456','567','678','789']);
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		let temp = [];
		this._opposite(n1, selected);
		this._opposite(n2, selected);
		this._opposite(n3, selected);

		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_opposite(n, selected) {
		if (n) {
			for (let i = 0; i < 10; i++) {
				let temp = [n[0], n[1], i+''];
				temp.sort();
				selected.push(temp.join(''));
			}
		}
	}

	odd(action, n1, n2, n3) {
		return this.common(action, n1, n2, n3, '13579');
	}

	even(action, n1, n2, n3) {
		return this.common(action, n1, n2, n3, '02468');
	}

	large(action, n1, n2, n3) {
		return this.common(action, n1, n2, n3, '56789');
	}

	small(action, n1, n2, n3) {
		return this.common(action, n1, n2, n3, '01234');
	}

	common(action, n1, n2, n3, value) {
		if (!action || (!n1 && !n2)) return this;
		let selected = this.numbers ? this.numbers : this.buildNumbers();
		if (n1) {
			selected = selected.filter(f => {
				return value.indexOf(f[0]) > -1;
			});
		}
		if (n2) {
			selected = selected.filter(f => {
				return value.indexOf(f[1]) > -1;
			});
		}
		if (n3) {
			selected = selected.filter(f => {
				return value.indexOf(f[2]) > -1;
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}

class FourPresentNumberSelector {

	constructor() {
		this.numbers = this.buildNumbers();
	}

	buildNumbers() {
		let result = []
		for (let i = 0; i < 10; i++) {
			for (let j = i; j < 10; j++) {
				for (let k = j; k < 10; k++) {
					for (let l = k; l < 10; l++) {
						result.push(i + '' + j + '' + k + '' + l);
					}
				}
			}
		}
		return result;
	}

	match(action, n1, n2, n3, n4) {
		if (!n1 && !n2 && !n3 && !n4) return this;
		if (!n1) n1 = ['1','2','3','4','5','6','7','8','9','0'];
		else n1 = n1.split('');
		if (!n2) n2 = ['1','2','3','4','5','6','7','8','9','0'];
		else n2 = n2.split('');
		if (!n3) n3 = ['1','2','3','4','5','6','7','8','9','0'];
		else n3 = n3.split('');
		if (!n4) n4 = ['1','2','3','4','5','6','7','8','9','0'];
		else n4 = n4.split('');
		let selected = [];
		n1.forEach(f1 => {
			n2.forEach(f2 => {
				n3.forEach(f3 => {
					n4.forEach(f4 => {
						let arr = [f1, f2, f3, f4];
						arr.sort();
						selected.push(arr.join(''));
					});
				});
			});
		});
		if (action === 's') {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) > -1;
			});
		} else {
			this.numbers = this.numbers.filter(item => {
				return selected.indexOf(item) == -1;
			});
		}
		return this;
	}

	composite(count, value) {
		if (!count || !value) {
			return this;
		}
		let selected = [];
		if (!value) return this;
		value.split('').forEach(e => {
			if (count == 2) {
				SUM_MAP[2][parseInt(e)].forEach(p => {
					for (let i = 0; i < 10; i++) {
						for (let j = i; j < 10; j++) {
							let temp = [p[0], p[1], i+'', j+''];
							temp.sort();
							selected.push(temp.join(''));
						}
					}
				});
				selected.unique();
			} else if (count == 3) {
				SUM_MAP[3][parseInt(e)].forEach(p => {
					for (let i = 0; i < 10; i++) {
						let temp = [p[0], p[1], p[2], i+''];
						temp.sort();
						selected.push(temp.join(''));
					}
				});
				selected.unique();
			} else {
				throw Error('错误参数count('+count+')');
			}
		})
		this.numbers = this.numbers.filter(item => {
			return selected.indexOf(item) > -1;
		})
		return this;
	}

	contains(action, value) {
		if (!action || !value) {
			return this;
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(f => {
				let temp = false;
				value.split('').forEach(s => {
					if (f.indexOf(s) > -1) {
						if (!temp) temp = true;
					}
				});
				return temp;
			});
		} else {
			value.split('').forEach(s => {
				this.numbers = this.numbers.filter(f => {
					return f.indexOf(s) == -1;
				});
			});
		}
		return this;
	}

	compound(action, value) {
		let selected = [];
		for (let i = 0; i < value.length; i++) {
			for (let j = i; j < value.length; j++) {
				for (let k = j; k < value.length; k++) {
					for (let l = k; l < value.length; l++) {
						let temp = value[i]+''+value[j]+''+value[k] + ''+value[l];
						selected.push(temp);
					}
				}
			}
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	repeat(action, count) {
		let selected = this._repeatOrSerial(count, 
			['00','11','22','33','44','55','66','77','88','99'],
			['000','111','222','333','444','555','666','777','888','999'],
			['0000','1111','2222','3333','4444','5555','6666','7777','8888','9999'],);
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_repeatOrSerial(count, _original, _original2, _selected) {
		let selected;
		if (count === 2) {
			let original = _original;
			selected = [];
			original.forEach(o => {
				for (let i = 0; i < 10; i++) {
					for (let j = i; j < 10; j++) {
						let temp = o+i+''+j;
						let arr = [temp[0], temp[1], temp[2], temp[3]];
						arr.sort();
						selected.push(arr.join(''));
					}
				}
			});
			selected.unique();
		} else if(count === 3) {
			selected = [];
			_original2.forEach(o => {
				for (let i = 0; i < 10; i++) {
					let temp = o+i;
					let arr = [temp[0], temp[1], temp[2], temp[3]];
					arr.sort();
					selected.push(arr.join(''));
				}
			})
			selected.unique();
		} else if(count === 4) {
			selected = _selected;
		} else {
			throw Error('错误参数count('+count+')');
		}
		return selected;
	}

	serial(action, count) {
		let selected = this._repeatOrSerial(count, ['01','09','12','23','34','45','56','67','78','89'],
			['012','019','089','123','234','345','456','567','678','789'],
			['0123','0129','0189','0789','1234','2345','3456','4567','5678','6789']);
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	opposite(action, n1, n2, n3) {
		let selected = [];
		let temp = [];
		this._opposite(n1, selected);
		this._opposite(n2, selected);
		this._opposite(n3, selected);

		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}

	_opposite(n, selected) {
		if (n) {
			for (let i = 0; i < 10; i++) {
				for (let j = i; j < 10; j++) {
					let temp = [n[0], n[1], i+'', j+''];
					temp.sort();
					selected.push(temp.join(''));
				}
			}
		}
	}

	odd(action, n1, n2, n3, n4) {
		return this.common(action, n1, n2, n3, n4, '13579');
	}

	even(action, n1, n2, n3, n4) {
		return this.common(action, n1, n2, n3, n4, '02468');
	}

	large(action, n1, n2, n3, n4) {
		return this.common(action, n1, n2, n3, n4, '56789');
	}

	small(action, n1, n2, n3, n4) {
		return this.common(action, n1, n2, n3, n4, '01234');
	}

	common(action, n1, n2, n3, n4, value) {
		if (!action || (!n1 && !n2)) return this;
		let selected = this.numbers ? this.numbers : this.buildNumbers();
		if (n1) {
			selected = selected.filter(f => {
				return value.indexOf(f[0]) > -1;
			});
		}
		if (n2) {
			selected = selected.filter(f => {
				return value.indexOf(f[1]) > -1;
			});
		}
		if (n3) {
			selected = selected.filter(f => {
				return value.indexOf(f[2]) > -1;
			});
		}
		if (n4) {
			selected = selected.filter(f => {
				return value.indexOf(f[3]) > -1;
			});
		}
		if (action === 's') {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) > -1;
			}).sort();
		} else {
			this.numbers = this.numbers.filter(e => {
				return selected.indexOf(e) == -1;
			}).sort();
		}
		return this;
	}
}