<template>
	<div class="currency-converter-page">
		<div class="exchange-rates"> 
			<router-link to="/exchange-rates"><a>Exchange Rates</a></router-link>
		</div>
		<h1>Currency Converter</h1>
		<div class="currency-wrapper">
			<div class="inputs">
				<div class="amount">
					<label>Amount</label>
					<input type="text" value="1" v-model="amount">
				</div>
				<div class="from">
					<label>From</label>
					<select v-if="multiply" v-model="from" @change="isSubmitted=false">
						<option v-for="rate in allRates" :value='rate'>{{ rate.currency }}</option>
					</select>
					<select v-else>
						<option value='baseCurrency'>{{ baseCurrency }}</option>
					</select>
				</div>
				<div class="switch" @click="switchCalculation()"><i class="fas fa-exchange-alt"></i></div>
				<div class="to">
					<label>To</label>
					<select v-if="multiply">
						<option value='baseCurrency'>{{ baseCurrency }}</option>
					</select>
					<select v-else v-model="to" @change="isSubmitted=false">
						<option v-for="rate in allRates" :value='rate'>{{ rate.currency }}</option>
					</select>
				</div>
				<button type="button" class="send" @click="submit"><i class="fas fa-angle-right"></i></button>
			</div>
			<div class="result" v-if="isSubmitted">
				<div class="buy-eur" v-if="multiply">{{ amount }} {{ from.currency }} = {{ result }} {{ baseCurrency }}</div>
				<div class="sell-eur" v-else>{{ amount }} {{ baseCurrency }} = {{ result }} {{ to.currency }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters([
			'baseCurrency',
			'allRates'
		])
	},
	data() {
		return {
			amount: '1',
			to: '',
			from: '',
			multiply: true,
			isSubmitted: false,
			result: ''
		}
	},
	methods: {
		switchCalculation() {
			this.multiply = !this.multiply;
			if (this.multiply) {
				this.from = this.to;
			} else {
				this.to = this.from
			}
			this.isSubmitted = false;
		},
		submit() {
			console.log('submit called to, from: ', this.from, this.to);
			this.isSubmitted = true;
			var result; 
			if (this.multiply) {
				result = (this.amount / this.from.value).toFixed(4);
			}
			else {
				result = (this.amount * this.to.value).toFixed(4);
			}
			console.log("result: ", result)
			this.result = result;
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.currency-converter-page {
	@include flexbox-center; 
	flex-direction: column;
	text-align: center;
}

.exchange-rates {
	padding-top: $base-padding;
}

.exchange-rates a {
	@include link;

	&:hover {
		color: #9e0144;
	}

	&:before {
		@include before;
	}

	&:hover:before {
		@include hover-before;
	}
}

h1 {
	color: white;
}

.currency-wrapper {
	max-width: 800px;
	width: 80%;
	padding: 0 10px;
	@include wrapper-style;
	margin: 0 auto;
}

.inputs {
	@include flexbox-center;
	flex-wrap: wrap;
	align-items: center;
	padding-top: $base-padding;
	padding-bottom: $base-padding;
}

.amount {
	display: flex;
	flex-direction: column;
	padding-right: $base-padding - 35;
}

label {
	display: flex;
	color: white;
	font-size: $base-font-size - 3;
	margin-bottom: $base-margin - 15;
}

input[type=text] {
	max-width: 250px;
	width: 100%;
	height: 42px;
	border-radius: $base-border-radius - 5;
	font-size: $base-font-size + 10;
	padding-left: $base-padding - 40;
}

.to {
	padding-right: $base-padding - 35;
}

select {
	max-width: 250px;
	width: 100%;
	height: 50px;
	border-radius: $base-border-radius - 5;
	font-size: $base-font-size + 10;
	padding: 0px 10px;
	cursor: pointer;
}

.switch {
	@include switch-style;

	&:active {
		@include switch-style;
		border: 1px solid #2196f3;
		border-radius: $base-border-radius - 5;
	}
}

.send {
	font-size: $base-font-size + 10;
	width: 50px;
	height: 50px;
	border-radius: $base-border-radius - 5;
	cursor: pointer;
	background-color: #fbbf08;
	color: blue;
	font-weight: $base-font-weight - 100;
	margin-top: $base-margin + 3;

	&:active {
		background-color: #2196f3;
		color: white;
		cursor: pointer;
	}
}

.result {
	@include flexbox-center;
	align-items: center;
	flex-wrap: wrap;
	padding-bottom: $base-padding;
}

.buy-eur,
.sell-eur {
	@include buy-and-sell-eur-style;
}
</style>
